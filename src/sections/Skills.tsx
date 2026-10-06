import { 
  Code2, 
  Database, 
  Terminal,
  Cpu,
  Settings,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const skillCategories = [
  {
    title: "Personal Projects",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "React", level: "Personal projects", tech: "Components and interfaces" },
      { name: "TypeScript", level: "Personal projects", tech: "Types and APIs" },
      { name: "JavaScript", level: "Personal projects", tech: "Node.js and browser code" },
      { name: "Express", level: "Personal projects", tech: "API routes" },
    ]
  },
  {
    title: "Databases & SQL",
    icon: <Database className="h-4 w-4" />,
    skills: [
      { name: "PostgreSQL", level: "Professional use", tech: "Support and data investigation" },
      { name: "Firebird", level: "Professional use", tech: "ERP database support" },
      { name: "SQL", level: "Professional use", tech: "Reports and diagnostics" },
      { name: "Data validation", level: "Professional use", tech: "Updates and migrations" },
    ]
  },
  {
    title: "System Operations",
    icon: <Settings className="h-4 w-4" />,
    skills: [
      { name: "Application Support", level: "Professional use", tech: "Incidents and troubleshooting" },
      { name: "IT Support", level: "Professional use", tech: "Users and workstations" },
      { name: "ERP Systems", level: "Professional use", tech: "Support and integration issues" },
      { name: "Technical Documentation", level: "Professional use", tech: "Findings and procedures" },
    ]
  }
];

// Compound Components for Skills Matrix
const SkillItem = ({ name, level, tech }: { name: string; level: string; tech: string }) => (
  <div className="group p-4 border-glow glass-card glass-hover">
    <div className="flex justify-between items-start mb-2">
      <span className="font-medium text-sm text-foreground">{name}</span>
      <span className="font-mono text-[8px] text-emerald-500 uppercase tracking-tighter bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/10">
        {level}
      </span>
    </div>
    <p className="text-[9px] font-mono text-muted-foreground leading-tight uppercase tracking-wider opacity-60">
      {tech}
    </p>
  </div>
);

const SkillCategory = ({ title, icon, children, delay }: { title: string; icon: React.ReactNode; children: React.ReactNode; delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <div className="flex items-center gap-3 pb-4 border-b border-white/5">
      <div className="text-muted-foreground">{icon}</div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/80">{title}</h3>
    </div>
    <div className="space-y-3">
      {children}
    </div>
  </motion.div>
);

const SystemStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-3 px-6 py-3 border-glow glass-card glass-hover">
    <div className="text-muted-foreground">{icon}</div>
    <div className="flex flex-col">
      <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">{label}</span>
      <span className="font-semibold text-xs tracking-tight">{value}</span>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-muted-foreground" />
            <span className="mono-detail">Technical Matrix // 0.1</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-balance">
            Core <span className="text-muted-foreground">Capabilities.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCategory 
              key={idx} 
              title={category.title} 
              icon={category.icon}
              delay={idx * 0.1}
            >
              {category.skills.map((skill, sIdx) => (
                <SkillItem key={sIdx} {...skill} />
              ))}
            </SkillCategory>
          ))}
        </div>

        {/* System Stats Badge */}
        <div className="mt-20 flex flex-wrap gap-4 justify-center">
          <SystemStat 
            icon={<ShieldCheck className="w-4 h-4" />} 
            label="Infrastructure" 
            value="ERP and database support"
          />
          <SystemStat 
            icon={<Terminal className="w-4 h-4" />} 
            label="Runtime" 
            value="Brazil-based professional"
          />
          <SystemStat 
            icon={<Globe className="w-4 h-4" />} 
            label="Communication" 
            value="English intermediate"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

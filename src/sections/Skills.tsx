import { 
  Code2, 
  Database, 
  Layers,
  GitBranch,
  Terminal,
  Cpu,
  Settings,
  Globe,
  Wrench,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Logic & Frameworks",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "React", level: "L3 / Mid", tech: "Hooks, Context, Performance" },
      { name: "TypeScript", level: "L2 / Intermediate", tech: "Advanced Types, Interfaces" },
      { name: "JavaScript", level: "L4 / Senior-ish", tech: "ES6+, Async, DOM" },
      { name: "Tailwind CSS", level: "L5 / Expert", tech: "JIT, Custom Config" },
    ]
  },
  {
    title: "Database Architectures",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "PostgreSQL", level: "L5 / Expert", tech: "Optimization, Indexing" },
      { name: "SQL Server", level: "L5 / Expert", tech: "T-SQL, Procedures" },
      { name: "Firebird", level: "L5 / Expert", tech: "Legacy Maintenance" },
      { name: "Query Tuning", level: "L4 / Advanced", tech: "Execution Plans" },
    ]
  },
  {
    title: "System Operations",
    icon: <Settings className="w-4 h-4" />,
    skills: [
      { name: "Windows Server", level: "L4 / Advanced", tech: "AD, IIS, Security" },
      { name: "IT Support T1-T3", level: "L5 / Expert", tech: "Critical Infrastructure" },
      { name: "ERP Systems", level: "L4 / Advanced", tech: "Questor, Integration" },
      { name: "API Strategy", level: "L3 / Mid", tech: "REST, Webhooks" },
    ]
  }
];

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
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                {category.icon}
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group p-4 industrial-border bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="font-mono text-[9px] text-emerald-500 uppercase tracking-tighter bg-emerald-500/10 px-2 py-0.5 rounded-sm">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-muted-foreground leading-tight uppercase tracking-wider">
                      {skill.tech}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Stats Badge */}
        <div className="mt-20 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-3 px-6 py-3 industrial-border bg-white/5">
            <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Infrastructure</span>
              <span className="font-bold text-sm">50+ Corporate Clients</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 industrial-border bg-white/5">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Runtime</span>
              <span className="font-bold text-sm">3+ Years Professional</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 industrial-border bg-white/5">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-muted-foreground uppercase">Communication</span>
              <span className="font-bold text-sm">English B1 [Ireland]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

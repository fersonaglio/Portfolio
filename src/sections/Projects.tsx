import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { Terminal, Database, Shield, Layout, Globe, Cpu } from "lucide-react";

const projects = [
  {
    title: "TailCash",
    description: "Financial Architecture & Data Persistence. Engineered a high-integrity React ecosystem for real-time financial orchestration, utilizing PostgreSQL for atomic transaction management and developer-centric UX protocols.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm overflow-hidden border border-white/5 relative group">
      <img 
        src="/tailcash-dashboard.png" 
        alt="TailCash Dashboard" 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>,
    icon: <Shield className="h-4 w-4 text-emerald-500" />,
    className: "md:col-span-8",
    tech: ["React_18", "PostgreSQL", "Tailwind_v3", "Lucide"],
    href: "https://tailcash.com.br",
  },
  {
    title: "NBM Manager",
    description: "Scalable Community Engine. Developed a robust micro-SaaS architecture for residential ecosystem management, optimizing SQL query performance for complex multi-tenant data structures.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">NBM</div>
    </div>,
    icon: <Globe className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-4",
    tech: ["TypeScript", "SQL_Server", "Express"],
  },
  {
    title: "Questor Systems",
    description: "Corporate Infrastructure Management. Orchestrating multi-tier production environments for 50+ enterprise clients, focusing on high-availability SQL architectures and mission-critical uptime.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">SYS</div>
    </div>,
    icon: <Cpu className="h-4 w-4 text-orange-500" />,
    className: "md:col-span-4",
    tech: ["Win_Server", "Firebird", "Networking"],
  },
  {
    title: "SQL Optimization Lab",
    description: "High-performance data architectures. Achieving 40% reduction in query latency through surgical indexing and relational schema optimization for high-load SaaS platforms.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">DBA</div>
    </div>,
    icon: <Database className="h-4 w-4 text-purple-500" />,
    className: "md:col-span-4",
    tech: ["SQL_Server", "Opt_Metrics", "SaaS_Arch"],
  },
  {
    title: "UI System Architect",
    description: "High-fidelity digital interfaces. Crafting minimalist, high-precision UI systems using modern React patterns and industrial-grade aesthetic protocols.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">GUI</div>
    </div>,
    icon: <Layout className="h-4 w-4 text-pink-500" />,
    className: "md:col-span-4",
    tech: ["React_18", "Framer_Motion", "Tailwind"],
  },
  {
    title: "NEXUS Node",
    description: "AI Infrastructure Orchestration. Engineered a sophisticated local environment for LLM execution with Ollama integration, focusing on isolated system performance.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm overflow-hidden border border-white/5 relative group">
      <img 
        src="/nexus-mockup.png" 
        alt="NEXUS AI Infrastructure" 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>,
    icon: <Cpu className="h-4 w-4 text-emerald-500" />,
    className: "md:col-span-6",
    tech: ["Ollama_v2", "LLM_Ops", "Infra_Spec"],
    href: "https://github.com/fersonaglio/NEXUS",
  },
  {
    title: "Prisma Data Engine",
    description: "Type-safe persistence layers. Developed a robust backend ecosystem using Prisma ORM and MongoDB, ensuring high-integrity data flow and scalable node architectures.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm overflow-hidden border border-white/5 relative group">
      <img 
        src="/api-mockup.png" 
        alt="Prisma API Engine" 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>,
    icon: <Database className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-6",
    tech: ["Node_js", "Prisma_ORM", "MongoDB", "TypeScript"],
    href: "https://github.com/fersonaglio/API",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-muted-foreground" />
            <span className="mono-detail">Project Archive // 2026</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-balance">
            Selected <span className="text-muted-foreground">Architectures.</span>
          </h2>
        </div>

        <BentoGrid>
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              tech={item.tech}
              href={item.href}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;

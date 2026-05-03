import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { Terminal, Database, Shield, Layout, Globe, Cpu } from "lucide-react";

const projects = [
  {
    title: "TailCash",
    description: "Financial OS for Power Users. Engineered a high-performance React dashboard with real-time financial tracking, PostgreSQL-backed data integrity, and a focus on security and developer-centric UX.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">$TC</div>
    </div>,
    icon: <Shield className="h-4 w-4 text-emerald-500" />,
    className: "md:col-span-8",
    tech: ["React", "PostgreSQL", "Tailwind", "Lucide"],
  },
  {
    title: "Neighbourhood Manager",
    description: "Community Scaling Engine. Developed a robust management platform for complex residential ecosystems, optimizing SQL query performance for thousands of concurrent data points.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">NBM</div>
    </div>,
    icon: <Globe className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-4",
    tech: ["TypeScript", "SQL Server", "Express"],
  },
  {
    title: "IT Support Engine",
    description: "Multi-tier infrastructure support system. Managing production environments for 50+ corporate clients with a focus on uptime and precision.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">SYS</div>
    </div>,
    icon: <Cpu className="h-4 w-4 text-orange-500" />,
    className: "md:col-span-4",
    tech: ["Windows Server", "Firebird", "Networking"],
  },
  {
    title: "SQL Performance Lab",
    description: "Optimizing relational database architectures for high-load SaaS applications. Achieving 40% reduction in query latency through surgical indexing.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">DBA</div>
    </div>,
    icon: <Database className="h-4 w-4 text-purple-500" />,
    className: "md:col-span-4",
    tech: ["SQL", "Optimization", "SaaS"],
  },
  {
    title: "Frontend Architect",
    description: "Crafting minimalist, high-precision user interfaces using modern React patterns and technical aesthetics.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 flex-col items-center justify-center p-4">
      <div className="text-4xl font-bold tracking-tighter opacity-20">GUI</div>
    </div>,
    icon: <Layout className="h-4 w-4 text-pink-500" />,
    className: "md:col-span-4",
    tech: ["React", "Framer Motion", "Tailwind"],
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
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;

import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { Terminal, Shield, Camera, Database } from "lucide-react";
import ProjectImageHeader from "../components/projects/ProjectImageHeader";
import ProjectLabelHeader from "../components/projects/ProjectLabelHeader";
import type { BentoProject } from "../types/project";

const projects: BentoProject[] = [
  {
    slug: "tailcash",
    title: "TailCash",
    description:
      "Personal finance project with an Express API, PostgreSQL and incremental data synchronisation. Personal project; source code is private.",
    header: (
      <ProjectImageHeader
        src="/tailcash-dashboard.png"
        alt="TailCash Dashboard"
      />
    ),
    icon: <Shield className="h-4 w-4 text-emerald-500" />,
    className: "md:col-span-8",
    tech: ["PostgreSQL", "Express", "SQL"],
    href: "https://tailcash.com.br",
  },
  {
    slug: "glimpse",
    title: "Glimpse",
    description:
      "Personal photo-sharing project with PostgreSQL migrations, Express routes and real-time events. Source code is private.",
    header: (
      <ProjectLabelHeader
        label="GLIMPSE // v0.1"
        accent="from-sky-950/40 to-neutral-900"
      />
    ),
    icon: <Camera className="h-4 w-4 text-sky-400" />,
    className: "md:col-span-4",
    tech: ["PostgreSQL", "Express", "Events"],
  },
  {
    slug: "prisma-api",
    title: "Prisma Data Engine",
    description:
      "Public personal API project built with Express, Prisma and MongoDB. Code is available on GitHub.",
    header: (
      <ProjectImageHeader
        src="/api-mockup.png"
        alt="Prisma API Engine"
      />
    ),
    icon: <Database className="h-4 w-4 text-amber-500" />,
    className: "md:col-span-8",
    tech: ["Express", "Prisma", "MongoDB", "Node.js"],
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
          {projects.map((item) => (
            <BentoGridItem
              key={item.slug}
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

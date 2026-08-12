import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { Terminal, Shield, Film, Camera, Database } from "lucide-react";
import ProjectImageHeader from "../components/projects/ProjectImageHeader";
import ProjectLabelHeader from "../components/projects/ProjectLabelHeader";
import type { BentoProject } from "../types/project";

const projects: BentoProject[] = [
  {
    slug: "tailcash",
    title: "TailCash",
    description:
      "SaaS de finanças pessoais com segurança bancária — PGP encryption no banco, RLS multi-tenant, JWT dual-token, Stripe e IA integrada.",
    header: (
      <ProjectImageHeader
        src="/tailcash-dashboard.png"
        alt="TailCash Dashboard"
      />
    ),
    icon: <Shield className="h-4 w-4 text-emerald-500" />,
    className: "md:col-span-8",
    tech: ["React", "PostgreSQL", "Express", "Stripe", "PWA"],
    href: "https://tailcash.com.br",
  },
  {
    slug: "glimpse",
    title: "Glimpse",
    description:
      "Compartilhamento de fotos em eventos em tempo real — moderação IA com GPU, busca facial vetorial pgvector e self‑hosted.",
    header: (
      <ProjectLabelHeader
        label="GLIMPSE // v0.1"
        accent="from-sky-950/40 to-neutral-900"
      />
    ),
    icon: <Camera className="h-4 w-4 text-sky-400" />,
    className: "md:col-span-4",
    tech: ["Next.js", "Redis", "PostgreSQL", "TensorFlow", "SSE"],
  },
  {
    slug: "spliced",
    title: "Spliced",
    description:
      "Plataforma de cortes virais com IA — pipeline local com análise vetorial 200D, face‑tracking, MCP server e P2P streaming.",
    header: (
      <ProjectLabelHeader
        label="SPLICED // v0.1"
        accent="from-purple-950/40 to-neutral-900"
      />
    ),
    icon: <Film className="h-4 w-4 text-purple-500" />,
    className: "md:col-span-4",
    tech: ["Next.js", "Python", "FFmpeg", "WebTorrent", "MCP"],
  },
  {
    slug: "prisma-api",
    title: "Prisma Data Engine",
    description:
      "API REST com tipagem segura — Express, Prisma ORM e MongoDB para CRUD completo com documentação OpenAPI.",
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

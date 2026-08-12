export interface BentoProject {
  slug: string;
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
  className: string;
  tech: string[];
  href?: string;
}

import { ExternalLink, Github, Folder, Database, Settings, Cpu } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  bgColor: string;
}

interface Category {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Digital Clock',
    description: 'A modern and responsive digital clock application with real-time display.',
    image: '/project-1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/fersonaglio/Projeto-Relogio',
    bgColor: 'bg-pastel-blue',
  },
  {
    id: 2,
    title: 'Custom Linktree',
    description: 'Personalized link page with dark theme, light/dark mode toggle, and responsive design.',
    image: '/project-2.png',
    technologies: ['React', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/fersonaglio/Projeto',
    bgColor: 'bg-pastel-pink',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Weather forecast application with real-time data and intuitive interface.',
    image: '/project-3.png',
    technologies: ['JavaScript', 'API', 'CSS'],
    githubUrl: 'https://github.com/fersonaglio/Weather-App',
    bgColor: 'bg-pastel-green',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'Modern and responsive portfolio website for showcasing projects and skills.',
    image: '/project-1.png',
    technologies: ['React', 'Tailwind', 'TypeScript'],
    githubUrl: 'https://github.com/fersonaglio',
    bgColor: 'bg-pastel-yellow',
  },
];

const categories: Category[] = [
  {
    icon: <Folder className="w-6 h-6" />,
    title: 'Front-End Development',
    description: 'React, JavaScript, HTML/CSS',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Database Administration',
    description: 'SQL, PostgreSQL, Firebird',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'API Integration',
    description: 'REST APIs, ERP Integration',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'IT Support',
    description: 'Technical Support Tier 1-3',
  },
];

const techColors: Record<string, string> = {
  HTML: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
  CSS: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
  React: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  Vite: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  API: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
  Tailwind: 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
  TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="pill-active bg-accent-green">PROJECTS</span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground">
            | FERNANDO SONAGLIO
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border"
            >
              {/* Image Container */}
              <div className={`relative h-56 ${project.bgColor} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                  >
                    <Github className="w-6 h-6 text-foreground" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-teal/90 backdrop-blur-sm rounded-full hover:bg-accent-teal transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-card-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        techColors[tech] || 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Footer */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue via-pastel-pink to-pastel-green rounded-3xl opacity-50 dark:opacity-20" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 hover:bg-muted/50 rounded-2xl transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-coral/20 flex items-center justify-center mb-3 text-accent-coral">
                    {category.icon}
                  </div>
                  <h4 className="font-montserrat font-semibold text-foreground mb-1">
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

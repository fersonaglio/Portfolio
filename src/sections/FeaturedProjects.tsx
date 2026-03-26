import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  bgColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Digital Clock',
    description: 'A modern and responsive digital clock application displaying real-time',
    image: '/project-1.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/fersonaglio/Projeto-Relogio',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 2,
    title: 'Custom Linktree',
    description: 'Personalized link page with dark theme and light/dark mode toggle',
    image: '/project-2.png',
    technologies: ['React', 'Vite', 'CSS'],
    githubUrl: 'https://github.com/fersonaglio/Projeto',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'Weather forecast app with intuitive interface and real-time data',
    image: '/project-3.png',
    technologies: ['JavaScript', 'API', 'CSS'],
    githubUrl: 'https://github.com/fersonaglio/Weather-App',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
];

const techColors: Record<string, string> = {
  HTML: 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
  CSS: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300',
  React: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300',
  Vite: 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
  API: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
};

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-4">
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className={`relative h-48 ${project.bgColor} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        techColors[tech] || 'bg-secondary text-foreground'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-xl text-sm font-medium text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 rounded-xl text-sm font-medium text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

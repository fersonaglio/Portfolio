import { ExternalLink, Github, Folder, Database, Settings, Cpu } from 'lucide-react';

// ============================================
// INSTRUÇÕES PARA ADICIONAR NOVOS PROJETOS:
// ============================================
// 1. Adicione uma nova entrada no array 'projects' abaixo
// 2. Siga o formato existente:
//    {
//      id: NÚMERO_SEQUENCIAL,
//      title: 'Nome do Projeto',
//      description: 'Descrição curta do projeto',
//      image: '/nome-da-imagem.png',  // Coloque a imagem na pasta public/
//      technologies: ['Tech1', 'Tech2', 'Tech3'],
//      githubUrl: 'https://github.com/seu-usuario/nome-repo',
//      bgColor: 'bg-pastel-blue', // ou bg-pastel-pink, bg-pastel-green, bg-pastel-yellow
//    }
// 3. As cores pastel disponíveis são:
//    - bg-pastel-blue (azul)
//    - bg-pastel-pink (rosa)
//    - bg-pastel-green (verde)
//    - bg-pastel-yellow (amarelo)
// ============================================

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

// ============================================
// ARRAY DE PROJETOS - ADICIONE SEUS PROJETOS AQUI
// ============================================
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
  // ADICIONE MAIS PROJETOS AQUI SEGUINDO O MESMO FORMATO
  // {
  //   id: 5,
  //   title: 'Nome do Novo Projeto',
  //   description: 'Descrição do novo projeto',
  //   image: '/nova-imagem.png',
  //   technologies: ['React', 'Node.js', 'MongoDB'],
  //   githubUrl: 'https://github.com/fersonaglio/novo-projeto',
  //   bgColor: 'bg-pastel-blue',
  // },
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

// Cores das tecnologias para light e dark mode
const techColors: Record<string, string> = {
  HTML: 'bg-orange-100 text-orange-700 dark:bg-orange-900/60 dark:text-orange-300',
  CSS: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/60 dark:text-yellow-300',
  React: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/60 dark:text-cyan-300',
  Vite: 'bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300',
  API: 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-300',
  Tailwind: 'bg-teal-100 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300',
  TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
  'Node.js': 'bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-300',
  MongoDB: 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-300',
  PostgreSQL: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
  Python: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/60 dark:text-yellow-300',
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-bg-main dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pastel-green dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            PROJECTS
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-white">
            My Work
          </h2>
          <p className="mt-4 text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in frontend development, database administration, and system integration.
          </p>
        </div>

        {/* Projects Grid - Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className={`relative h-48 sm:h-56 ${project.bgColor} dark:opacity-90 overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-6 h-6 text-text-primary dark:text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-teal dark:bg-teal-600 backdrop-blur-sm rounded-full hover:bg-accent-teal/90 dark:hover:bg-teal-500 transition-colors shadow-lg"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-montserrat font-bold text-lg sm:text-xl text-text-primary dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        techColors[tech] || 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
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
          <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue via-pastel-pink to-pastel-green dark:from-blue-900/40 dark:via-pink-900/40 dark:to-green-900/40 rounded-3xl opacity-60" />
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-2xl transition-colors"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent-coral/20 dark:bg-orange-900/40 flex items-center justify-center mb-3 text-accent-coral dark:text-orange-400">
                    {category.icon}
                  </div>
                  <h4 className="font-montserrat font-semibold text-sm sm:text-base text-text-primary dark:text-white mb-1">
                    {category.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-gray-400">{category.description}</p>
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

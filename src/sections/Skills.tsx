import { 
  Code2, 
  Database, 
  Palette, 
  GitBranch, 
  Layers,
  FileCode,
  Box,
  Server,
  Cpu,
  Settings
} from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  bgColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-End Development',
    bgColor: 'bg-pastel-blue',
    skills: [
      { name: 'HTML5', level: 'Intermediate', icon: <Code2 className="w-5 h-5" />, color: 'text-orange-600' },
      { name: 'CSS3', level: 'Intermediate', icon: <Palette className="w-5 h-5" />, color: 'text-blue-600' },
      { name: 'JavaScript', level: 'Intermediate', icon: <FileCode className="w-5 h-5" />, color: 'text-yellow-600' },
      { name: 'React', level: 'Basic', icon: <Layers className="w-5 h-5" />, color: 'text-cyan-600' },
    ],
  },
  {
    title: 'Database & Systems',
    bgColor: 'bg-pastel-green',
    skills: [
      { name: 'SQL Server', level: 'Intermediate', icon: <Database className="w-5 h-5" />, color: 'text-indigo-600' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: <Database className="w-5 h-5" />, color: 'text-blue-700' },
      { name: 'Firebird', level: 'Intermediate', icon: <Database className="w-5 h-5" />, color: 'text-red-600' },
      { name: 'Windows Server', level: 'Intermediate', icon: <Server className="w-5 h-5" />, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Integration & Tools',
    bgColor: 'bg-pastel-pink',
    skills: [
      { name: 'REST API', level: 'Intermediate', icon: <Cpu className="w-5 h-5" />, color: 'text-green-600' },
      { name: 'ERP Integration', level: 'Intermediate', icon: <Settings className="w-5 h-5" />, color: 'text-purple-600' },
      { name: 'Git', level: 'Basic', icon: <GitBranch className="w-5 h-5" />, color: 'text-orange-700' },
      { name: 'Figma', level: 'Basic', icon: <Box className="w-5 h-5" />, color: 'text-pink-600' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary mb-4">
            MY SKILLS
          </h2>
          <div className="w-24 h-1 bg-accent-green mx-auto rounded-full" />
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            SQL Database Administrator | IT Support | API Integration | Front-End Development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className="font-montserrat font-bold text-xl text-text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:bg-white transition-colors"
                  >
                    <div className={`${skill.color}`}>{skill.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-montserrat font-semibold text-text-primary">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-text-secondary">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-pastel-yellow rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">3+</div>
            <p className="text-text-secondary">Years of Experience</p>
          </div>
          <div className="bg-pastel-blue rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-teal mb-2">10+</div>
            <p className="text-text-secondary">Projects Completed</p>
          </div>
          <div className="bg-pastel-pink rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-accent-pink mb-2">8+</div>
            <p className="text-text-secondary">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

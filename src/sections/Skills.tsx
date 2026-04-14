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
  Settings,
  Globe,
  Wrench
} from 'lucide-react';

interface Skill {
  name: string;
  level: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  bgColor: string;
  borderColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-End Development',
    icon: <Code2 className="w-6 h-6" />,
    bgColor: 'bg-pastel-blue dark:bg-blue-900/30',
    borderColor: 'border-blue-200 dark:border-blue-800',
    skills: [
      { name: 'HTML5', level: 'Advanced', icon: <FileCode className="w-5 h-5" />, color: 'text-orange-600 dark:text-orange-400' },
      { name: 'CSS3', level: 'Advanced', icon: <Palette className="w-5 h-5" />, color: 'text-blue-600 dark:text-blue-400' },
      { name: 'JavaScript', level: 'Intermediate', icon: <FileCode className="w-5 h-5" />, color: 'text-yellow-600 dark:text-yellow-400' },
      { name: 'React', level: 'Intermediate', icon: <Layers className="w-5 h-5" />, color: 'text-cyan-600 dark:text-cyan-400' },
      { name: 'Git', level: 'Intermediate', icon: <GitBranch className="w-5 h-5" />, color: 'text-red-600 dark:text-red-400' },
      { name: 'Figma', level: 'Basic', icon: <Box className="w-5 h-5" />, color: 'text-pink-600 dark:text-pink-400' },
    ],
  },
  {
    title: 'Database & Systems',
    icon: <Database className="w-6 h-6" />,
    bgColor: 'bg-pastel-green dark:bg-green-900/30',
    borderColor: 'border-green-200 dark:border-green-800',
    skills: [
      { name: 'SQL Server', level: 'Advanced', icon: <Database className="w-5 h-5" />, color: 'text-indigo-600 dark:text-indigo-400' },
      { name: 'PostgreSQL', level: 'Advanced', icon: <Database className="w-5 h-5" />, color: 'text-blue-700 dark:text-blue-400' },
      { name: 'Firebird', level: 'Advanced', icon: <Database className="w-5 h-5" />, color: 'text-red-600 dark:text-red-400' },
      { name: 'T-SQL', level: 'Intermediate', icon: <FileCode className="w-5 h-5" />, color: 'text-purple-600 dark:text-purple-400' },
      { name: 'Windows Server', level: 'Intermediate', icon: <Server className="w-5 h-5" />, color: 'text-blue-500 dark:text-blue-400' },
      { name: 'Query Optimization', level: 'Intermediate', icon: <Cpu className="w-5 h-5" />, color: 'text-green-600 dark:text-green-400' },
    ],
  },
  {
    title: 'Integration & Support',
    icon: <Settings className="w-6 h-6" />,
    bgColor: 'bg-pastel-pink dark:bg-pink-900/30',
    borderColor: 'border-pink-200 dark:border-pink-800',
    skills: [
      { name: 'REST API', level: 'Advanced', icon: <Globe className="w-5 h-5" />, color: 'text-green-600 dark:text-green-400' },
      { name: 'ERP Integration', level: 'Advanced', icon: <Settings className="w-5 h-5" />, color: 'text-purple-600 dark:text-purple-400' },
      { name: 'Tech Support', level: 'Advanced', icon: <Wrench className="w-5 h-5" />, color: 'text-orange-600 dark:text-orange-400' },
      { name: 'Data Visualization', level: 'Intermediate', icon: <Cpu className="w-5 h-5" />, color: 'text-blue-600 dark:text-blue-400' },
      { name: 'BI Dashboards', level: 'Intermediate', icon: <Box className="w-5 h-5" />, color: 'text-teal-600 dark:text-teal-400' },
      { name: 'Incident Management', level: 'Intermediate', icon: <Wrench className="w-5 h-5" />, color: 'text-red-500 dark:text-red-400' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pastel-green dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            MY SKILLS
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-white">
            Technical Expertise
          </h2>
          <p className="mt-4 text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning database administration, system integration, and frontend development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} rounded-3xl p-6 border ${category.borderColor} hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                  <span className="text-accent-teal dark:text-teal-400">{category.icon}</span>
                </div>
                <h3 className="font-montserrat font-bold text-lg text-text-primary dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 hover:bg-white dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700"
                  >
                    <div className={`${skill.color}`}>{skill.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-montserrat font-semibold text-sm text-text-primary dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' 
                        : skill.level === 'Intermediate'
                        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '50+', label: 'Clients Supported', color: 'bg-pastel-blue dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
            { value: '10+', label: 'Projects Completed', color: 'bg-pastel-green dark:bg-green-900/30 text-green-600 dark:text-green-400' },
            { value: '3+', label: 'Years Experience', color: 'bg-pastel-pink dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' },
            { value: 'B1', label: 'English Level', color: 'bg-pastel-yellow dark:bg-yellow-900/30 text-amber-600 dark:text-amber-400' },
          ].map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-2xl p-4 sm:p-6 text-center border border-gray-100 dark:border-gray-700`}>
              <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-text-secondary dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

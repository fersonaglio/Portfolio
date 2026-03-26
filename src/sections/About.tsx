import { MessageCircle, Users, Lightbulb, Wrench, Globe, Brain } from 'lucide-react';
import DeveloperIsometric from '@/components/illustrations/DeveloperIsometric';

interface SoftSkill {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const softSkills: SoftSkill[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Teamwork',
    description: 'Effective collaboration in agile environments',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Problem Solving',
    description: 'Analysis and resolution of technical challenges',
    bgColor: 'bg-pink-100 dark:bg-pink-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Time Management',
    description: 'Organization and task prioritization',
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Communication',
    description: 'Clear and objective communication',
    bgColor: 'bg-green-100 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Interpersonal Skills',
    description: 'Relationship building and adaptability',
    bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Intermediate English',
    description: 'Exchange experience in Ireland',
    bgColor: 'bg-pink-100 dark:bg-pink-900/20',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="pill-active bg-primary">ABOUT ME</span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground">
            | FERNANDO SONAGLIO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            {/* About Cards */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                  About Me
                </h3>
                <p className="text-muted-foreground">
                  SQL Database Administrator & IT Systems Professional with 3+ years of experience 
                  in database administration, API integration, technical support, and front-end development. 
                  Currently at Questor Sistemas, where I progressed from Junior to Mid-Level in under a year.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                  Professional Experience
                </h3>
                <p className="text-muted-foreground">
                  I administer, monitor, and optimize corporate database environments, ensuring high 
                  availability and performance. I perform database conversions, third-party ERP integrations 
                  via REST API, and develop custom SQL reports.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                  Education
                </h3>
                <p className="text-muted-foreground">
                  Bachelor's degree in Information Systems from UCEFF. Intermediate English with 
                  exchange experience in Ireland. Continuous focus on improving skills in web 
                  development and database administration.
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${skill.bgColor} rounded-2xl p-4 hover:scale-105 transition-transform duration-300`}
                  >
                    <div className={`${skill.iconColor} mb-2`}>{skill.icon}</div>
                    <h4 className="font-montserrat font-semibold text-sm text-foreground mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-pink-500/10 dark:from-green-500/5 dark:via-blue-500/5 dark:to-pink-500/5 rounded-3xl blur-3xl" />
            <div className="relative z-10 p-8">
              <DeveloperIsometric />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

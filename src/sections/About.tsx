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
    bgColor: 'bg-pastel-blue',
    iconColor: 'text-accent-teal',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Problem Solving',
    description: 'Analysis and resolution of technical challenges',
    bgColor: 'bg-pastel-pink',
    iconColor: 'text-accent-pink',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Time Management',
    description: 'Organization and task prioritization',
    bgColor: 'bg-pastel-yellow',
    iconColor: 'text-amber-600',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Communication',
    description: 'Clear and objective communication',
    bgColor: 'bg-pastel-green',
    iconColor: 'text-accent-green',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Interpersonal Skills',
    description: 'Relationship building and adaptability',
    bgColor: 'bg-pastel-blue',
    iconColor: 'text-accent-teal',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Intermediate English',
    description: 'Exchange experience in Ireland',
    bgColor: 'bg-pastel-pink',
    iconColor: 'text-accent-pink',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="pill-active bg-accent-teal">ABOUT ME</span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-text-primary">
            | FERNANDO SONAGLIO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            {/* About Cards */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                <h3 className="font-montserrat font-bold text-lg text-card-foreground mb-2">
                  About Me
                </h3>
                <p className="text-muted-foreground">
                  SQL Database Administrator & IT Systems Professional with 3+ years of experience
                  in database administration, API integration, technical support, and front-end development.
                  Currently at Questor Sistemas, where I progressed from Junior to Mid-Level in under a year.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                <h3 className="font-montserrat font-bold text-lg text-card-foreground mb-2">
                  Professional Experience
                </h3>
                <p className="text-muted-foreground">
                  I administer, monitor, and optimize corporate database environments, ensuring high
                  availability and performance. I perform database conversions, third-party ERP integrations
                  via REST API, and develop custom SQL reports.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                <h3 className="font-montserrat font-bold text-lg text-card-foreground mb-2">
                  Education
                </h3>
                <p className="text-muted-foreground">
                  Bachelor's degree in Information Systems from Estacio. Intermediate English with
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
                    className={`${skill.bgColor} rounded-2xl p-4 hover:scale-105 transition-transform duration-300 dark:opacity-80`}
                  >
                    <div className={`${skill.iconColor} mb-2`}>{skill.icon}</div>
                    <h4 className="font-montserrat font-semibold text-sm text-text-primary mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-text-secondary">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-green/30 via-pastel-blue/30 to-pastel-pink/30 rounded-3xl blur-3xl" />
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

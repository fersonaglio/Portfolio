import { MessageCircle, Users, Lightbulb, Wrench, Globe, Brain, Target, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
    bgColor: 'bg-pastel-blue dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Problem Solving',
    description: 'Analysis and resolution of technical challenges',
    bgColor: 'bg-pastel-pink dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Time Management',
    description: 'Organization and task prioritization',
    bgColor: 'bg-pastel-yellow dark:bg-yellow-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Communication',
    description: 'Clear and objective communication',
    bgColor: 'bg-pastel-green dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Client Focus',
    description: 'Understanding and meeting client needs',
    bgColor: 'bg-pastel-blue dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Continuous Learning',
    description: 'Always improving technical skills',
    bgColor: 'bg-pastel-pink dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Adaptability',
    description: 'Quick to learn and apply new technologies',
    bgColor: 'bg-pastel-yellow dark:bg-yellow-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'English B1',
    description: 'Cultural exchange in Ireland (2020)',
    bgColor: 'bg-pastel-green dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.animate-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-bg-main dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-card opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block px-4 py-2 bg-pastel-blue dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            ABOUT ME
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-white">
            Fernando Sonaglio
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            {/* Professional Summary */}
            <div className="animate-card opacity-0 translate-y-8 transition-all duration-700 delay-100 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-montserrat font-bold text-xl text-text-primary dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed">
                Results-driven <strong className="text-text-primary dark:text-white">IT Systems & Database Administrator</strong> with 3+ years of hands-on experience across Tier 1–3 technical support, SQL/PostgreSQL/Firebird database administration, system migrations, and Windows Server infrastructure.
              </p>
              <p className="text-text-secondary dark:text-gray-300 leading-relaxed mt-4">
                Promoted from <strong className="text-text-primary dark:text-white">Junior to Mid-Level at Questor Sistemas</strong> in under a year, overseeing production environments for 50+ corporate clients. Complementary frontend skills in React and JavaScript enable full-stack thinking — from data pipelines to user-facing dashboards.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="animate-card opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-montserrat font-bold text-xl text-text-primary dark:text-white mb-4">
                Experience Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-teal dark:bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-text-secondary dark:text-gray-300">Administer and monitor production SQL Server, PostgreSQL, and Firebird environments for <strong className="text-text-primary dark:text-white">50+ corporate clients</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-pink dark:bg-pink-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-text-secondary dark:text-gray-300">Lead <strong className="text-text-primary dark:text-white">zero-downtime database migrations</strong> and major version upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-green dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-text-secondary dark:text-gray-300">Develop <strong className="text-text-primary dark:text-white">10+ custom SQL reports and BI dashboards</strong> monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-coral dark:bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-text-secondary dark:text-gray-300">Designed and deployed <strong className="text-text-primary dark:text-white">3 complete client websites</strong> using React with sub-2s load times</span>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="animate-card opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-montserrat font-bold text-xl text-text-primary dark:text-white mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-pastel-blue dark:bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">BSc</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-white">BSc in Information Systems</p>
                    <p className="text-text-secondary dark:text-gray-400 text-sm">Estácio de Sá University · 2021–2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-pastel-green dark:bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">RS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary dark:text-white">Discover — Web Development</p>
                    <p className="text-text-secondary dark:text-gray-400 text-sm">Rocketseat · 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Photo */}
          <div className="space-y-6">
            {/* Photo */}
            <div className="animate-card opacity-0 translate-y-8 transition-all duration-700 delay-100 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-green rounded-3xl blur-xl opacity-50"></div>
                <img 
                  src="/Foto frente-Photoroom(1).png" 
                  alt="Fernando Sonaglio" 
                  className="relative w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>

            {/* Core Competencies */}
            <div className="animate-card opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <h3 className="font-montserrat font-bold text-xl text-text-primary dark:text-white mb-4 text-center lg:text-left">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${skill.bgColor} rounded-xl p-3 sm:p-4 hover:scale-105 transition-transform duration-300`}
                  >
                    <div className={`${skill.iconColor} mb-2`}>{skill.icon}</div>
                    <h4 className="font-montserrat font-semibold text-sm text-text-primary dark:text-white mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-text-secondary dark:text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="animate-card opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-gradient-to-r from-pastel-blue via-pastel-pink to-pastel-green rounded-2xl p-6">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-text-primary dark:text-white font-medium text-center">
                  🌍 Open to relocation to the United Kingdom
                </p>
                <p className="text-text-secondary dark:text-gray-300 text-sm text-center mt-1">
                  Eligible for Skilled Worker Visa sponsorship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

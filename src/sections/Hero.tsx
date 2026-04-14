import { ArrowRight, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-bg-main dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pastel-blue dark:bg-blue-900/50 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Available for opportunities</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary dark:text-white leading-tight">
                Fernando
                <span className="block text-accent-teal dark:text-teal-400">Sonaglio</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary dark:text-gray-300 font-medium">
                IT Systems & Database Administrator · Frontend Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-text-secondary dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Results-driven professional with <strong className="text-text-primary dark:text-white">3+ years of experience</strong> across Tier 1–3 technical support, SQL/PostgreSQL/Firebird database administration, and React frontend development. Currently overseeing production environments for <strong className="text-text-primary dark:text-white">50+ corporate clients</strong> at Questor Sistemas.
            </p>

            {/* Info Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-accent-teal dark:text-teal-400" />
                <span className="text-sm text-text-secondary dark:text-gray-300">Chapecó, Brazil</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <Briefcase className="w-4 h-4 text-accent-pink dark:text-pink-400" />
                <span className="text-sm text-text-secondary dark:text-gray-300">3+ Years Exp.</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <GraduationCap className="w-4 h-4 text-accent-green dark:text-green-400" />
                <span className="text-sm text-text-secondary dark:text-gray-300">BSc Information Systems</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-pink dark:bg-pink-600 hover:bg-accent-pink/90 dark:hover:bg-pink-500 text-white font-montserrat font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                VIEW MY WORK
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://drive.google.com/file/d/1vIhj9zL3zX9z9z9z9z9z9z9z9z9z9z9z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-text-primary dark:text-white font-montserrat font-semibold rounded-full border-2 border-gray-200 dark:border-gray-700 hover:border-accent-teal dark:hover:border-teal-500 transition-all duration-300"
              >
                DOWNLOAD CV
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-pastel-blue dark:bg-blue-900/50 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">50+</span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-gray-400">Corporate</p>
                  <p className="font-semibold text-text-primary dark:text-white text-sm sm:text-base">Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-pastel-green dark:bg-green-900/50 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">10+</span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-gray-400">Projects</p>
                  <p className="font-semibold text-text-primary dark:text-white text-sm sm:text-base">Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-pastel-pink dark:bg-pink-900/50 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-pink-600 dark:text-pink-400">3+</span>
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-gray-400">Years of</p>
                  <p className="font-semibold text-text-primary dark:text-white text-sm sm:text-base">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-green dark:from-pink-900/40 dark:via-blue-900/40 dark:to-green-900/40 rounded-3xl blur-2xl opacity-60 scale-110"></div>
              
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src="/Foto frente-Photoroom(1).png"
                  alt="Fernando Sonaglio"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-text-primary dark:text-white">Open to work</span>
                  </div>
                </div>
                
                {/* Tech stack badge */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium">React</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs rounded-md font-medium">SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

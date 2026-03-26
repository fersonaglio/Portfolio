import { ArrowRight } from 'lucide-react';
import WorkspaceIsometric from '@/components/illustrations/WorkspaceIsometric';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                FERNANDO SONAGLIO
                <span className="block text-primary">| FRONT-END DEVELOPER</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Front-End Developer with experience in React, JavaScript, and API integration. 
                Also skilled in database administration with SQL, PostgreSQL, and Firebird.
              </p>
            </div>

            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white font-montserrat font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              EXPLORE MY WORK
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Years of</p>
                  <p className="font-semibold text-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-500">10+</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                  <p className="font-semibold text-foreground">Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Isometric Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-green-500/10 dark:from-pink-500/5 dark:via-blue-500/5 dark:to-green-500/5 rounded-3xl blur-3xl" />
            <div className="relative z-10 p-8">
              <WorkspaceIsometric />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

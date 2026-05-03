import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Terminal } from 'lucide-react';
import Magnetic from '../components/animations/Magnetic';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Badge / Status */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-3 py-1 industrial-border rounded-full bg-white/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-emerald-500/80">Available for select projects</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-6 max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tighter text-foreground text-balance leading-[1.1] md:leading-[0.9]"
            >
              Fernando Sonaglio. <br />
              <span className="text-muted-foreground">Data Systems Engineer.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
            >
              Engineering high-integrity data ecosystems. Specializing in robust database architectures and high-precision digital interfaces.
            </motion.p>
          </div>

          {/* CTA & Technical Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Magnetic strength={0.3}>
                <button
                  onClick={scrollToProjects}
                  className="group relative flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium rounded-sm transition-transform active:scale-95"
                >
                  EXPLORE ARCHIVE
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Magnetic>

              <a
                href="/CV.pdf"
                className="group flex items-center gap-3 px-8 py-4 industrial-border hover:bg-white/5 transition-colors font-medium rounded-sm"
              >
                DOWNLOAD SPEC
              </a>
            </div>

            {/* Technical Spec Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border w-full max-w-3xl">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Terminal className="w-4 h-4" />
                  <span className="mono-detail">Stack</span>
                </div>
                <p className="font-mono text-sm">TypeScript / React / Node</p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Database className="w-4 h-4" />
                  <span className="mono-detail">Database</span>
                </div>
                <p className="font-mono text-sm">PostgreSQL / Firebird / SQL</p>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="w-4 h-4" />
                  <span className="mono-detail">Experience</span>
                </div>
                <p className="font-mono text-sm">3+ Years Industrial Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blueprint Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;

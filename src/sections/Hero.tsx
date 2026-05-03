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
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Structural Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          
          {/* Identity Protocol */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 px-4 py-1.5 border-glow glass-card rounded-none"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/40"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/60">System_Status: Operational</span>
            </div>
            <div className="h-3 w-[1px] bg-white/10"></div>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-emerald-500/80">Available_for_2026</span>
          </motion.div>

          {/* Core Headline */}
          <div className="space-y-8 max-w-5xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[10rem] font-bold tracking-tighter text-foreground leading-[0.85] uppercase"
            >
              Fernando <br />
              <span className="text-muted-foreground/30">Sonaglio.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-4"
            >
              <h2 className="font-mono text-xs sm:text-sm uppercase tracking-[0.4em] text-emerald-500/90 font-medium">
                Data Systems Engineer // v0.1
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance font-inter opacity-70">
                Engineering high-integrity data ecosystems and high-precision digital interfaces through surgical architecture.
              </p>
            </motion.div>
          </div>

          {/* Action Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-12 w-full"
          >
            <div className="flex flex-wrap justify-center gap-6">
              <Magnetic strength={0.2}>
                <button
                  onClick={scrollToProjects}
                  className="group relative flex items-center gap-4 px-10 py-5 bg-foreground text-background font-mono text-[10px] uppercase tracking-widest transition-transform active:scale-95 hover:bg-emerald-500 transition-colors duration-500"
                >
                  ACCESS_ARCHIVE
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Magnetic>

              <a
                href="/CV.pdf"
                className="group flex items-center gap-4 px-10 py-5 border border-white/10 hover:border-white/20 glass-hover font-mono text-[10px] uppercase tracking-widest text-foreground transition-all"
              >
                DOWNLOAD_SPEC.PDF
              </a>
            </div>

            {/* Technical Matrix Footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-white/5 w-full max-w-4xl">
              <div className="flex flex-col items-center sm:items-start gap-3 group">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Terminal className="w-3.5 h-3.5 opacity-50" />
                  <span className="mono-detail">Core_Engine</span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/80 group-hover:text-emerald-500 transition-colors">TypeScript // React // Node.js</p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start gap-3 group">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Database className="w-3.5 h-3.5 opacity-50" />
                  <span className="mono-detail">Persistence_Layer</span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/80 group-hover:text-emerald-500 transition-colors">PostgreSQL // SQL_Server // Firebird</p>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-3 group">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="w-3.5 h-3.5 opacity-50" />
                  <span className="mono-detail">Industrial_Ops</span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/80 group-hover:text-emerald-500 transition-colors">50+ Corporate_Environments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Structural Lines */}
      <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"></div>
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"></div>
    </section>
  );
};

export default Hero;

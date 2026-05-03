import { Terminal, Fingerprint, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Fingerprint className="w-4 h-4 text-muted-foreground" />
            <span className="mono-detail">Identity Protocol // 0.1</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-balance">
            System <span className="text-muted-foreground">Overview.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Summary / Terminal Style */}
          <div className="lg:col-span-7 space-y-8">
            <div className="industrial-border bg-white/5 p-8 space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="font-mono text-[10px] uppercase tracking-widest">Professional_Summary.sh</span>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Results-driven <span className="text-foreground font-medium">IT Systems & Database Administrator</span> with 3+ years of technical operations experience. Specialized in high-availability SQL environments and robust system migrations.
                </p>
                <p>
                  Currently overseeing critical production environments for <span className="text-foreground font-medium">50+ corporate clients</span> at Questor Sistemas. Rapidly promoted to Mid-Level due to architectural precision and incident response efficiency.
                </p>
                <p>
                  Complementary frontend expertise in <span className="text-foreground font-medium">React ecosystems</span> allows for a full-stack architectural perspective — bridging the gap between low-level data integrity and high-level user interaction.
                </p>
              </div>

              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-border">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">Location</span>
                  <p className="text-xs">Santa Catarina, Brazil</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">Status</span>
                  <p className="text-xs text-emerald-500">Active / Operational</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="industrial-border p-6 space-y-6">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Experience_Log</span>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-4 border-l border-border group">
                  <div className="absolute left-[-1px] top-0 w-[1px] h-4 bg-emerald-500"></div>
                  <h4 className="text-sm font-semibold">Mid-Level DB Admin</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Questor Sistemas // 2024 - Present</p>
                </div>
                <div className="relative pl-4 border-l border-border">
                  <h4 className="text-sm font-semibold">Junior IT Support</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Questor Sistemas // 2023 - 2024</p>
                </div>
                <div className="relative pl-4 border-l border-border">
                  <h4 className="text-sm font-semibold">IT Consultant</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Independent // 2021 - 2023</p>
                </div>
              </div>
            </div>

            <div className="industrial-border p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-[10px] uppercase tracking-widest">Education.spec</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs">BSc Information Systems</span>
                  <span className="font-mono text-[9px] text-muted-foreground">Estácio // 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Rocketseat Discover</span>
                  <span className="font-mono text-[9px] text-muted-foreground">Web Dev // 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

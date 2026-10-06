import { Fingerprint, Activity, Zap } from 'lucide-react';

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
          {/* Photo & Summary Container */}
          <div className="lg:col-span-7 space-y-8">
            <div className="industrial-border bg-white/5 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Photo Column */}
                <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-border relative group">
                  <img 
                    src="/Foto perfil-Photoroom(1).png" 
                    alt="Fernando Sonaglio" 
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                {/* Text Content Column */}
                <div className="md:col-span-8 p-8 space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b border-border">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="font-mono text-[10px] uppercase tracking-widest">Professional_Summary.sh</span>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <span className="text-foreground font-medium">Application and database support professional</span> with experience helping users and investigating ERP application and data issues.
                    </p>
                    <p>
                      At <span className="text-foreground font-medium">Questor Sistemas</span>, I use SQL, logs and structured diagnostics to investigate incidents, validate updates and migrations, and document findings for technical teams and users.
                    </p>
                    <p>
                      Personal projects in <span className="text-foreground font-medium">React, Node.js and PostgreSQL</span> help me understand the application and API layers behind the issues I troubleshoot.
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
                  <h4 className="text-sm font-semibold">Application / Database Support</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Questor Sistemas // 2024 - Present</p>
                </div>
                <div className="relative pl-4 border-l border-border">
                  <h4 className="text-sm font-semibold">Computer Support Analyst</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">UCEFF // 2022 - 2024</p>
                </div>
                <div className="relative pl-4 border-l border-border">
                  <h4 className="text-sm font-semibold">Information Systems</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Estácio // 2021 - 2025</p>
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
                  <span className="font-mono text-[9px] text-muted-foreground">Web Dev // 2024</span>
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

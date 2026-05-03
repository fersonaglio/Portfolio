import { Terminal, Linkedin, Github, Mail } from 'lucide-react';

const ENCODED_EMAIL = 'c29uYWdsaW8zQGdtYWlsLmNvbQ==';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${atob(ENCODED_EMAIL)}`;
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-background border-t border-border py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {/* Logo & Identity */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-2 group">
              <Terminal className="w-4 h-4 text-foreground group-hover:rotate-12 transition-transform" />
              <span className="font-mono font-bold text-xs uppercase tracking-tighter">
                FERNANDO_SONAGLIO
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-xs font-mono uppercase tracking-widest opacity-60">
              Data Systems Engineer. Database specialist. Industrial-grade digital ecosystems.
            </p>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/fernando-sonaglio0/" target="_blank" rel="noopener noreferrer" className="p-2 industrial-border hover:bg-white/5 transition-colors">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="https://github.com/fersonaglio" target="_blank" rel="noopener noreferrer" className="p-2 industrial-border hover:bg-white/5 transition-colors">
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <button onClick={handleEmailClick} className="p-2 industrial-border hover:bg-white/5 transition-colors">
                <Mail className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Directory_Map</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">System_Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Operational_Ready</span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground opacity-60">
                CHA_SC // BR_SO_0.1
              </p>
            </div>
          </div>
        </div>

        {/* Technical Credits */}
        <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
            &copy; {currentYear} // SOURCE_CODE_PROTECTED
          </p>
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Built_with: React_Vite_Framer</span>
            <span className="hidden md:inline text-border">|</span>
            <span>Version: 2.0.26_Hybrid</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

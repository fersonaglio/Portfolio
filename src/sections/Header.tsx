import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// HOME', href: '#home', id: 'home' },
    { name: '// PROJECTS', href: '#projects', id: 'projects' },
    { name: '// SKILLS', href: '#skills', id: 'skills' },
    { name: '// ABOUT', href: '#about', id: 'about' },
    { name: '// CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-border' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection('#home')}
          >
            <Terminal className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
            <span className="font-mono font-bold text-sm tracking-tighter uppercase">
              FERNANDO_SONAGLIO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-[10px] font-mono tracking-widest transition-colors ${
                  activeSection === link.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Side - CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-4 py-1.5 industrial-border hover:bg-white/5 text-[10px] font-mono tracking-widest uppercase transition-colors"
            >
              [ CONNECT ]
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border p-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-[10px] font-mono tracking-widest text-left ${
                    activeSection === link.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-4 px-4 py-3 industrial-border text-[10px] font-mono tracking-widest text-center"
              >
                [ CONNECT ]
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  toggleTheme: () => void;
  isDark: boolean;
}

const Header = ({ activeSection, toggleTheme, isDark }: HeaderProps) => {
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
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('#home')}
          >
            <Terminal className="w-5 h-5 text-accent-teal dark:text-teal-400" />
            <span className="font-montserrat font-bold text-lg text-text-primary dark:text-white">
              Fernando Sonaglio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-accent-teal dark:text-teal-400'
                    : 'text-text-secondary dark:text-gray-300 hover:text-text-primary dark:hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-teal dark:bg-teal-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side - Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-pastel-blue dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-accent-teal dark:bg-teal-600 hover:bg-accent-teal/90 dark:hover:bg-teal-500 text-white text-sm font-medium rounded-full transition-colors"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-primary dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary dark:text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg mt-2 p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-3 rounded-xl text-left font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-pastel-blue dark:bg-blue-900/50 text-accent-teal dark:text-blue-300'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-text-primary dark:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-text-primary dark:text-white"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-blue-600" />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-2 px-6 py-3 bg-accent-teal dark:bg-teal-600 text-white text-center font-medium rounded-full hover:bg-accent-teal/90 dark:hover:bg-teal-500 transition-colors"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

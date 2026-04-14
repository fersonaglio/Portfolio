import { Terminal, Heart, Linkedin, Github, Mail } from 'lucide-react';

// Obfuscated contact data
const ENCODED_EMAIL = 'c29uYWdsaW8zQGdtYWlsLmNvbQ==';
const ENCODED_PHONE = 'KzU1ICg0OSkgOTk5MzQtNDg4Mg==';

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-teal-400" />
              <span className="font-montserrat font-bold text-xl">Fernando Sonaglio</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
              IT Systems & Database Administrator with 3+ years of experience. 
              Passionate about creating digital experiences and optimizing database performance. 
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/fernando-sonaglio0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/fersonaglio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <button
                onClick={handleEmailClick}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <button
                onClick={handleEmailClick}
                className="block text-gray-400 hover:text-white transition-colors text-left"
              >
                Send me an email
              </button>
              <a
                href={`https://wa.me/${atob(ENCODED_PHONE).replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <p className="text-gray-400">
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright {currentYear} Fernando Sonaglio. All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> and lots of code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import FeaturedProjects from './sections/FeaturedProjects';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header activeSection={activeSection} toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <FeaturedProjects />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

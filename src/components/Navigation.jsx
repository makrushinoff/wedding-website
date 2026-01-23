import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', name: 'Головна', icon: '🏠' },
    { id: 'details', name: 'Деталі', icon: '📋' },
    { id: 'info', name: 'Інфо', icon: 'ℹ️' },
    { id: 'timeline', name: 'Програма', icon: '⏰' },
    { id: 'colors', name: 'Кольори', icon: '🎨' },
    { id: 'rsvp', name: 'RSVP', icon: '✉️' },
    { id: 'map', name: 'Карта', icon: '📍' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const current = sectionElements.findIndex(el => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        }
        return false;
      });

      if (current !== -1) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Main Navigation */}
      <motion.nav
        className="main-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-content">
          <div className="nav-logo">А & І</div>

          <div className="nav-links">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                className={`nav-link ${activeSection === index ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-icon">{section.icon}</span>
                <span className="nav-text">{section.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Floating Navigation Dots (for mobile/simple view) */}
      <div className="nav-dots">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`nav-dot ${activeSection === index ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            title={section.name}
          >
            <span>{section.icon}</span>
          </motion.button>
        ))}
      </div>
    </>
  );
};

export default Navigation;

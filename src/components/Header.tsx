// src/components/Header.tsx
import logoWunjo2 from "@/assets/logoWunjo2.png";
import logoWunjo3 from "@/assets/logoWunjo3.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Dentro del nav:
<Link to="/crm" className="text-sm hover:text-primary">
  CRM
</Link>
const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Check background color to determine which logo to use
    const computedBg = getComputedStyle(document.documentElement).getPropertyValue('--background');
    const bgLightness = parseInt(computedBg.split(' ')[2]?.replace('%', '') || '0');
    setIsDark(bgLightness < 50);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['historia', 'manifiesto', 'experiences', 'para-marcas', 'proceso', 'colabora'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="cursor-pointer">
              <img
                src={isDark ? logoWunjo2 : logoWunjo3}
                alt="Wunjo Creations"
                className="h-20 w-auto"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('historia')}
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                activeSection === 'historia'
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Nuestra Esencia
            </button>
            <button
              onClick={() => scrollToSection('manifiesto')}
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                activeSection === 'manifiesto'
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Manifiesto Wunjo
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                activeSection === 'experiences'
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Experiencias Wunjo
            </button>
            <button
              onClick={() => scrollToSection('para-marcas')}
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                activeSection === 'para-marcas'
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Para Marcas
            </button>
            <button
              onClick={() => scrollToSection('proceso')}
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                activeSection === 'proceso'
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection('colabora')}
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                activeSection === 'colabora'
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

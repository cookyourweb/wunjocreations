// src/components/Header.tsx
import logoWunjo2 from "@/assets/logoWunjo2.png";
import logoWunjo3 from "@/assets/logoWunjo3.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check background color to determine which logo to use
    const computedBg = getComputedStyle(document.documentElement).getPropertyValue('--background');
    const bgLightness = parseInt(computedBg.split(' ')[2]?.replace('%', '') || '0');
    setIsDark(bgLightness < 50);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <img
                src={isDark ? logoWunjo2 : logoWunjo3}
                alt="Wunjo Creations"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/para-creadores"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                isActive('/para-creadores')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Para Creadores e Influencers
            </Link>
            <Link
              to="/experiencias"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                isActive('/experiencias')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Experiencias
            </Link>
            <Link
              to="/nuestra-esencia"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                isActive('/nuestra-esencia')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Nuestra Esencia
            </Link>
            <Link
              to="/proceso"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                isActive('/proceso')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Proceso
            </Link>
            <Link
              to="/contacto"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 ${
                isActive('/contacto')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

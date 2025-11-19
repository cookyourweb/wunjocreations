import logoWunjo2 from "@/assets/logoWunjo2.png";
import logoWunjo3 from "@/assets/logoWunjo3.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="cursor-pointer">
            <img
              src={isDark ? logoWunjo2 : logoWunjo3}
              alt="Wunjo Creations"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/para-creadores"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 text-base ${
                isActive('/para-creadores')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Para Creadores e Influencers
            </Link>
            <Link
              to="/experiencias"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 text-base ${
                isActive('/experiencias')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Experiencias
            </Link>
            <Link
              to="/nuestra-esencia"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 text-base ${
                isActive('/nuestra-esencia')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Nuestra Esencia
            </Link>
            <Link
              to="/proceso"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 text-base ${
                isActive('/proceso')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Proceso
            </Link>
            <Link
              to="/contacto"
              className={`text-foreground hover:text-primary transition-all duration-300 relative pb-1 text-base ${
                isActive('/contacto')
                  ? 'text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                  : ''
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden fixed top-4 right-4 z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-card/90 backdrop-blur-lg p-3 hover:scale-105 transition-all duration-300"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-card/90 backdrop-blur-lg border border-border/50 shadow-2xl p-3 space-y-2 min-w-[200px]">
                <Link
                  to="/para-creadores"
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Para Creadores
                </Link>
                <Link
                  to="/experiencias"
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experiencias
                </Link>
                <Link
                  to="/nuestra-esencia"
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nuestra Esencia
                </Link>
                <Link
                  to="/proceso"
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Proceso
                </Link>
                <Link
                  to="/contacto"
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

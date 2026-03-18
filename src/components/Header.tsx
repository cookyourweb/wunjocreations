import logoWunjo2 from "@/assets/logoWunjo2.png";
import logoWunjo3 from "@/assets/logoWunjo3.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const computedBg = getComputedStyle(document.documentElement).getPropertyValue('--background');
    const bgLightness = parseInt(computedBg.split(' ')[2]?.replace('%', '') || '0');
    setIsDark(bgLightness < 50);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/para-creadores", label: "Para Creadores" },
    { to: "/proceso", label: "Proceso" },
    { to: "/experiencias", label: "Experiencias" },
    { to: "/nuestra-esencia", label: "Nuestra Esencia" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-[hsl(38,15%,15%)]">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer shrink-0">
            <img
              src={isDark ? logoWunjo2 : logoWunjo3}
              alt="Wunjo Creations"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop navigation — solo en md+ */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-sans text-sm font-medium transition-all duration-300 relative pb-1 ${
                  isActive(to)
                    ? "text-[hsl(38,75%,55%)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[hsl(38,75%,55%)]"
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contacto">
              <button className="font-sans text-sm px-5 py-2 rounded-full bg-gradient-warm text-[hsl(25,15%,8%)] font-medium hover:opacity-90 hover:scale-105 transition-all duration-300">
                Inicia tu experiencia
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

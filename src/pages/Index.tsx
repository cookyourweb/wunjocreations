// src/pages/Index.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { label: "Para Creadores", to: "/para-creadores" },
    { label: "Experiencias", to: "/experiencias" },
    { label: "Nuestra Esencia", to: "/nuestra-esencia" },
    { label: "Proceso", to: "/proceso" },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Mobile menu button for home page */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-card/90 backdrop-blur-lg p-3 hover:scale-105 transition-all duration-300"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-full mt-2 right-0 bg-card/90 backdrop-blur-lg border border-border/50 shadow-2xl p-3 space-y-2 min-w-[200px]">
            {mainNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Hero />
      <Footer />
    </div>
  );
};

export default Index;

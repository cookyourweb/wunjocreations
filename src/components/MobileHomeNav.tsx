// src/components/MobileHomeNav.tsx
import { Link, useLocation } from "react-router-dom";
import {
  Users, Star, Flame, Map, MessageCircle
} from "lucide-react";

const MobileHomeNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { id: "para-creadores", label: "Creadores", path: "/para-creadores", icon: Users },
    { id: "experiencias", label: "Experiencias", path: "/experiencias", icon: Star },
    { id: "esencia", label: "Esencia", path: "/nuestra-esencia", icon: Flame },
    { id: "proceso", label: "Proceso", path: "/proceso", icon: Map },
    { id: "contacto", label: "Contacto", path: "/contacto", icon: MessageCircle },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-[hsl(38,15%,15%)] safe-area-inset-bottom">
      <div className="flex items-center justify-around px-2 py-3 max-w-full overflow-x-auto">
        {navItems.map(({ id, label, path, icon: Icon }) => (
          <Link
            key={id}
            to={path}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-0 flex-shrink-0 font-sans ${
              isActive(path)
                ? "bg-gradient-warm text-[hsl(25,15%,8%)] scale-110"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            title={label}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-[10px] font-medium truncate max-w-[60px]">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileHomeNav;

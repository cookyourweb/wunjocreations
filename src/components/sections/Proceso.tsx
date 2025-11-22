// src/components/sections/Proceso.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sparkles, Target, Lightbulb, TrendingUp,
  X, Check, Moon, Sun, Compass, Rocket,
  Code, Eye, CheckCircle2, Star
} from "lucide-react";

const Proceso = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "antes", "despues", "como"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Proceso", icon: Sparkles },
    { id: "antes", label: "Antes", icon: Moon },
    { id: "despues", label: "Después", icon: Sun },
    { id: "como", label: "Cómo", icon: Compass },
  ];

  return (
    <section id="proceso" className="relative pt-32 pb-32 lg:pb-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Fondo decorativo - contenedor separado para no afectar sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-primary via-accent to-secondary opacity-10 blur-[120px] rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary via-primary to-accent opacity-10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* HERO */}
        <div id="hero" className="text-center space-y-10 scroll-mt-32">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-[1.2]">
            El Proceso Wunjo:<br />
            de inspiración a impacto real.
          </h1>
        </div>

        {/* Separador decorativo - solo desktop */}
        <div className="hidden lg:flex items-center gap-4 max-w-3xl mx-auto py-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary/50" />
          <Star className="w-6 h-6 text-primary animate-pulse" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
        </div>

        {/* Menú de navegación sticky - Desktop */}
        <nav className="hidden lg:block sticky top-28 z-40 -mx-6 px-6 py-4 bg-background/95 backdrop-blur-lg rounded-xl">
          <div className="flex gap-2 justify-center max-w-5xl mx-auto">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground scale-105"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
                title={label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Menú de navegación fijo inferior - Móvil */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/50 safe-area-inset-bottom">
          <div className="flex items-center justify-around px-2 py-3 max-w-full overflow-x-auto">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex flex-col items-center gap-1 px-2 py-2 rounded-xl transition-all duration-300 min-w-0 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-to-b from-primary to-accent text-primary-foreground scale-110"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                title={label}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-[10px] font-medium truncate max-w-[60px]">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* ANTES DE WUNJO */}
        <div id="antes" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
              <Moon className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold">Antes de Wunjo</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              'los alumnos se pierden',
              'abandonan en silencio',
              'tú te desgastas',
              'no tienes visibilidad real',
              'los resultados son irregulares',
              'el negocio crece con límites'
            ].map((text, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-foreground font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Sun className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* DESPUÉS DE WUNJO */}
        <div id="despues" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Sun className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Después de Wunjo</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'caminos personalizados',
              'retención alta',
              'abandono bajo',
              'más casos de éxito',
              'menos desgaste',
              'comunidad motivada',
              'negocio estable y escalable',
              'detección real de talento'
            ].map((text, idx) => (
              <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/60 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-4">
                <p className="text-xl text-muted-foreground">
                  Tu contenido ya era bueno.
                </p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Wunjo lo hace transformador.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <Compass className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* CÓMO LO HACEMOS */}
        <div id="como" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <Compass className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">¿Cómo lo hacemos?</span>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                number: '1',
                title: 'Exploración',
                icon: Eye,
                gradient: 'from-primary/10 to-accent/10'
              },
              {
                number: '2',
                title: 'Diseño personalizado',
                icon: Lightbulb,
                gradient: 'from-accent/10 to-secondary/10'
              },
              {
                number: '3',
                title: 'Integración completa',
                icon: Code,
                gradient: 'from-secondary/10 to-primary/10'
              },
              {
                number: '4',
                title: 'Activación guiada',
                icon: Rocket,
                gradient: 'from-primary/10 to-accent/10'
              }
            ].map((step) => (
              <Card key={step.number} className={`group relative overflow-hidden border-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-50`} />
                <CardContent className="relative p-8 flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-primary font-display text-2xl font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h4 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">{step.title}</h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center space-y-8 py-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold max-w-2xl mx-auto">
            👉 Inicia tu experiencia Wunjo
          </h3>
          <Link to="/contacto">
            <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-xl">
              <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-4px] transition-transform" />
              Inicia tu experiencia Wunjo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Proceso;

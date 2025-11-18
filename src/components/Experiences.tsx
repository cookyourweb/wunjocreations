// src/components/Experiences.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  Sparkles, Target, Heart, Check,
  Globe, Brain, Rocket, Shield, BarChart3, Clock, TrendingUp
} from "lucide-react";

const Experiences = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "solucion", "resultados", "disponible"];
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
    { id: "hero", label: "Experiencias", icon: Sparkles },
    { id: "solucion", label: "La Solución", icon: Target },
    { id: "resultados", label: "Resultados", icon: Heart },
    { id: "disponible", label: "Disponible", icon: Globe },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Menú de navegación centrado horizontal */}
      <nav className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-full max-w-6xl px-4">
        <div className="bg-card/90 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl p-2 lg:p-3">
          <div className="flex gap-1 lg:gap-2 overflow-x-auto lg:overflow-x-visible justify-center">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative flex items-center justify-center gap-2 px-2 lg:px-3 py-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
                title={label}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="hidden lg:inline text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto space-y-20">
        {/* HERO */}
        <div id="hero" className="text-center space-y-10 scroll-mt-24 pt-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-[1.2]">
            Experiencias que transforman.<br />
            Tecnología que acompaña.<br />
            Energía que despierta.
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Wunjo Creations diseña experiencias digitales que ayudan a tu comunidad a avanzar, integrar y evolucionar.
          </p>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Sparkles className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LA SOLUCIÓN WUNJO */}
        <div id="solucion" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">La Solución Wunjo</span>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/40">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-primary font-bold text-lg">Powered by IA</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-primary font-bold pt-2">
              Inteligencia Artificial que personaliza tu contenido
            </h2>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all duration-500" />
            <CardContent className="relative p-10 space-y-6">
              <p className="text-lg text-foreground font-medium text-center">
                Adaptada a:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: BarChart3, text: "su nivel" },
                  { icon: Clock, text: "su ritmo" },
                  { icon: Brain, text: "su mentalidad" },
                  { icon: Shield, text: "sus bloqueos" },
                  { icon: Rocket, text: "su motivación" },
                  { icon: TrendingUp, text: "sus fortalezas" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-card/50 to-card hover:from-primary/5 hover:to-accent/5 hover:scale-105 transition-all duration-300 cursor-pointer group/item">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-xl text-primary font-bold text-center pt-6">
                Tu contenido se convierte en un proceso emocional y consciente.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Heart className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* RESULTADOS PARA TU COMUNIDAD */}
        <div id="resultados" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Resultados para tu comunidad</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "entienden mejor",
              "se sienten guiados",
              "superan bloqueos",
              "mantienen la motivación",
              "integran lo aprendido",
              "consiguen transformación real"
            ].map((text, idx) => (
              <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 border-accent/20 hover:border-accent/60 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Check className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-foreground font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-6 text-center">
              <p className="text-lg text-muted-foreground">
                No solo consumen tu contenido:
              </p>
              <p className="text-3xl text-primary font-bold">
                lo viven.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <Globe className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* EXPERIENCIA DISPONIBLE */}
        <div id="disponible" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <Globe className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Experiencia disponible</span>
            </div>
          </div>

          <Card className="group relative overflow-hidden border-2 border-secondary/30 hover:border-secondary/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 opacity-50 group-hover:opacity-70 transition-opacity" />
            <CardContent className="relative p-10 space-y-8">
              <div className="text-center space-y-4">
                <h3 className="font-display text-4xl text-foreground font-bold">
                  TuVueltaAlSol
                </h3>
                <p className="text-xl text-muted-foreground font-light">
                  365 días de claridad, motivación y propósito personal.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  onClick={() => window.open('https://tuvueltaalsol.es', '_blank')}
                  className="group/btn bg-gradient-to-r from-secondary via-primary to-accent hover:scale-105 transition-all duration-300 shadow-xl text-lg px-8 py-6"
                >
                  <Globe className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Descúbrela
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

// src/components/Experiences.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  Sparkles, Target, Lightbulb, Users, TrendingUp, Heart,
  Star, Compass, Zap, Brain, Rocket, Eye, CheckCircle2,
  ArrowUpCircle, Award, Globe, Sun, Moon, Code, BarChart3
} from "lucide-react";

const Experiences = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro", "solucion", "logros-comunidad", "tuvueltaalsol", "en-desarrollo"
      ];

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
    { id: "intro", label: "Introducción", icon: Sparkles },
    { id: "solucion", label: "La Solución", icon: Lightbulb },
    { id: "logros-comunidad", label: "Qué logran", icon: Award },
    { id: "tuvueltaalsol", label: "TuVueltaAlSol", icon: Sun },
    { id: "en-desarrollo", label: "En desarrollo", icon: Code },
  ];

  return (
    <section id="experiences" className="relative py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Menú flotante lateral */}
      <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-card/80 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl p-3 space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${
                activeSection === id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg scale-105"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
              }`}
              title={label}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className={`absolute left-full ml-4 whitespace-nowrap bg-card px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                activeSection === id ? "text-primary" : ""
              }`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <div className="max-w-5xl mx-auto space-y-24">
        {/* INTRO */}
        <div id="intro" className="text-center space-y-8 scroll-mt-24">
          <div className="inline-block">
            <Badge className="px-6 py-2 text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Experiencias Wunjo
            </Badge>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
            Experiencias que transforman. Tecnología que acompaña. Energía que despierta.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Wunjo Creations desarrolla experiencias digitales diseñadas para transformar, inspirar y acompañar a cada persona en su propio camino.
          </p>
          <p className="text-lg text-foreground font-medium max-w-3xl mx-auto">
            Creamos experiencias profundas, vivas y personalizadas que ayudan a tu comunidad a avanzar, integrar y evolucionar.
          </p>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Lightbulb className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LA SOLUCIÓN WUNJO */}
        <div id="solucion" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">La Solución Wunjo</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Transformamos tu curso, programa o mentoría en una experiencia personalizada con IA
            </h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Adaptamos cada paso a cada persona:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: BarChart3, text: "su nivel" },
              { icon: Zap, text: "su ritmo" },
              { icon: Brain, text: "su mentalidad" },
              { icon: Target, text: "sus bloqueos" },
              { icon: Rocket, text: "su motivación" },
              { icon: Award, text: "sus fortalezas" }
            ].map((item, idx) => (
              <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8">
            <div className="space-y-3 text-lg">
              <p className="text-foreground font-medium">Tu contenido se convierte en un proceso emocional, consciente y guiado.</p>
              <div className="flex items-center justify-center gap-4 text-xl font-semibold pt-4">
                <span className="text-primary">Tu esencia</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-accent">Su propio camino</span>
                <span className="text-muted-foreground">·</span>
                <span className="text-secondary">Resultados reales</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Award className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* QUÉ LOGRA TU COMUNIDAD */}
        <div id="logros-comunidad" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Resultados para tu comunidad</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              ¿Qué logra tu comunidad?
            </h3>
            <p className="text-xl text-muted-foreground">
              Con nuestras experiencias digitales:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Brain, text: "comprenden mejor" },
              { icon: Compass, text: "avanzan sin perderse" },
              { icon: Rocket, text: "encuentran motivación constante" },
              { icon: CheckCircle2, text: "superan bloqueos" },
              { icon: Eye, text: "desarrollan mentalidad" },
              { icon: Lightbulb, text: "integran lo aprendido" },
              { icon: Sparkles, text: "experimentan cambios reales" }
            ].map((item, idx) => (
              <Card key={idx} className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-lg">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-4">
                <p className="text-xl text-muted-foreground">
                  No solo consumen tu contenido:
                </p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  lo viven.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <Sun className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* TU VUELTA AL SOL */}
        <div id="tuvueltaalsol" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30">
              <Sun className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Experiencia disponible</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Experiencias disponibles
            </h3>
          </div>

          <Card className="group relative overflow-hidden border-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-8">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 group-hover:scale-110 transition-transform mx-auto">
                <Sun className="w-12 h-12 text-secondary" />
              </div>

              <div className="text-center space-y-4">
                <h4 className="font-display text-3xl text-foreground">
                  TuVueltaAlSol
                </h4>
                <p className="text-xl text-primary font-semibold">
                  Tu año extraordinario comienza aquí.
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Un recorrido personalizado que acompaña a cada persona durante 365 días con claridad, motivación y propósito.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => window.open('https://tuvueltaalsol.es', '_blank')}
                  className="group bg-gradient-to-r from-secondary via-primary to-accent hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Descúbrela
                  <ArrowUpCircle className="w-5 h-5 ml-2 group-hover:translate-y-[-4px] transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Code className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* EXPERIENCIAS EN DESARROLLO */}
        <div id="en-desarrollo" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Code className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Próximamente</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Experiencias en desarrollo
            </h3>
            <p className="text-lg text-muted-foreground">
              Creamos experiencias digitales listas para integrar en tu marca:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Users, text: "acompañamientos personalizados" },
              { icon: Moon, text: "rituales guiados" },
              { icon: Sparkles, text: "experiencias energéticas" },
              { icon: Star, text: "programas anuales" },
              { icon: TrendingUp, text: "trayectorias de crecimiento" },
              { icon: Heart, text: "rutas emocionales personalizadas" }
            ].map((item, idx) => (
              <Card key={idx} className="group relative overflow-hidden border-2 hover:border-accent/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 max-w-2xl mx-auto">
              <CardContent className="p-8 space-y-4">
                <Sparkles className="w-10 h-10 text-accent mx-auto" />
                <p className="text-xl text-foreground font-medium">
                  Todo diseñado para que tu comunidad se sienta vista, acompañada y transformada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center space-y-8 py-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold">
            ¿Listo para transformar tu comunidad con experiencias únicas?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crea experiencias que acompañen, transformen y eleven a cada persona de tu comunidad
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

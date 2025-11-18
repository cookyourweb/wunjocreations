// src/components/sections/Proceso.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sparkles, Target, Lightbulb, Users, TrendingUp, Heart,
  X, Check, Moon, Sun, Compass, Zap, Award, Eye, Rocket,
  Code, Shield, CheckCircle2
} from "lucide-react";

const Proceso = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro", "antes", "despues", "como"
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
    { id: "intro", label: "Intro", icon: Sparkles },
    { id: "antes", label: "Antes Wunjo", icon: Moon },
    { id: "despues", label: "Después Wunjo", icon: Sun },
    { id: "como", label: "Cómo lo hacemos", icon: Compass },
  ];

  return (
    <section id="proceso" className="relative py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
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
              Proceso Wunjo
            </Badge>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
            De inspiración a transformación. De intención a impacto real.
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            El Proceso Wunjo convierte tu contenido en una experiencia que acompaña, transforma y eleva a tu comunidad.
          </p>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Moon className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* ANTES DE WUNJO */}
        <div id="antes" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
              <Moon className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold">Antes de Wunjo</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Lo que nadie te cuenta
            </h3>
          </div>

          <div className="space-y-4">
            {[
              'los alumnos se pierden',
              'el abandono es alto',
              'el creador se desgasta',
              'la comunidad avanza a ritmos distintos',
              'la motivación cae',
              'los bloqueos paralizan',
              'los resultados son irregulares',
              'el negocio crece, pero con límites'
            ].map((text, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-foreground font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 pt-8">
            <Card className="bg-muted/50 border-muted max-w-2xl mx-auto">
              <CardContent className="p-6 space-y-3">
                <p className="text-foreground">Esto pasa incluso con contenido excelente.</p>
                <p className="text-muted-foreground">No es tu culpa.</p>
                <p className="text-foreground font-semibold text-lg">Es falta de personalización.</p>
              </CardContent>
            </Card>
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
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Lo que hace toda la diferencia
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Target, text: 'cada alumno recibe un camino adaptado' },
              { icon: Eye, text: 'los bloqueos se detectan antes' },
              { icon: TrendingUp, text: 'sube la retención' },
              { icon: Shield, text: 'baja el abandono' },
              { icon: Sparkles, text: 'hay más transformación real' },
              { icon: Heart, text: 'tú no te desgastas acompañando' },
              { icon: Rocket, text: 'la experiencia trabaja por ti' },
              { icon: Award, text: 'se multiplican los casos de éxito' },
              { icon: CheckCircle2, text: 'tu negocio se estabiliza y crece' },
              { icon: Users, text: 'se identifica talento real para colaborar contigo' }
            ].map((item, idx) => (
              <Card key={idx} className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30">
              <Compass className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">El método</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              ¿Cómo lo hacemos?
            </h3>
          </div>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Exploración',
                desc: 'Analizamos tu curso, tu comunidad y tu visión.',
                icon: Eye,
                gradient: 'from-primary/10 to-accent/10'
              },
              {
                number: '2',
                title: 'Diseño',
                desc: 'Creamos la estructura personalizada con IA + psicología + energía Wunjo.',
                icon: Lightbulb,
                gradient: 'from-accent/10 to-secondary/10'
              },
              {
                number: '3',
                title: 'Integración',
                desc: 'Montamos toda la experiencia en tu ecosistema digital.',
                icon: Code,
                gradient: 'from-secondary/10 to-primary/10'
              },
              {
                number: '4',
                title: 'Activación',
                desc: 'Acompañamos el lanzamiento y te enseñamos a sostenerlo.',
                icon: Rocket,
                gradient: 'from-primary/10 to-accent/10'
              }
            ].map((step) => (
              <Card key={step.number} className={`group relative overflow-hidden border-2 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-50`} />
                <CardContent className="relative p-8 flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span className="text-primary font-display text-2xl font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <h4 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-8 pt-12">
            <Card className="relative overflow-hidden border-2 max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
              <CardContent className="relative p-10 space-y-6">
                <Sparkles className="w-12 h-12 text-primary mx-auto" />
                <h4 className="font-display text-2xl text-foreground">El resultado</h4>
                <div className="space-y-4 text-lg">
                  <p className="text-foreground">Una experiencia digital con alma, ciencia y propósito.</p>
                  <p className="text-foreground">Una comunidad motivada, fiel y en crecimiento.</p>
                  <p className="text-primary font-bold text-xl">Un negocio sostenible y diferenciado.</p>
                </div>
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
            ¿Listo para transformar tu contenido en experiencia?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Da el paso de inspiración a impacto real con el Proceso Wunjo
          </p>
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

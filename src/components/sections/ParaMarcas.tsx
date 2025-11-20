// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles, Users, TrendingUp, Heart, Award, Rocket, Target,
  Check, X, Eye, Brain, Zap, Star, ChevronRight,
  MessageSquare, BarChart3, Shield, Clock, CheckCircle2,
  Lightbulb, Network, BadgeCheck, InfinityIcon, UserPlus, Trophy
} from "lucide-react";

const ParaMarcas = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero", "problema", "dolor-oculto", "solucion", "beneficios", "logros"
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
    { id: "hero", label: "Para Creadores Influencers", icon: Sparkles },
    { id: "problema", label: "El Problema", icon: Target },
    { id: "dolor-oculto", label: "Dolor Oculto", icon: Eye },
    { id: "solucion", label: "La Solución", icon: Lightbulb },
    { id: "beneficios", label: "Qué Ganas", icon: Award },
    { id: "logros", label: "Tus Logros", icon: BadgeCheck },
  ];

  return (
    <section id="para-marcas" className="relative pt-40 pb-32 lg:pb-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-primary via-accent to-secondary opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary via-primary to-accent opacity-10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto space-y-24 relative z-10">
        {/* HERO */}
        <div id="hero" className="text-center space-y-10 scroll-mt-32">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-[1.2]">
            Eleva tu comunidad,<br />tu impacto y tu negocio
          </h2>
        </div>

        {/* Separador decorativo - solo desktop */}
        <div className="hidden lg:flex items-center gap-4 max-w-3xl mx-auto py-4">
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

        {/* EL PROBLEMA */}
        <div id="problema" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
              <Target className="w-5 h-5 text-orange-500" />
              <span className="text-orange-500 font-semibold">El Problema</span>
            </div>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <CardContent className="relative p-8 md:p-10 space-y-6">
              <h3 className="font-display text-lg md:text-xl text-foreground font-bold text-center leading-tight">
                Tú ya tienes lo más difícil:
              </h3>
              <p className="text-lg md:text-xl text-primary font-bold text-center leading-tight">
                una comunidad que te admira, te escucha y quiere transformarse contigo.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6 text-center pt-8">
            <p className="text-lg md:text-xl text-foreground font-medium">
              Pero hay algo que nadie te dice cuando empiezas como creador:
            </p>
            <Card className="relative overflow-hidden bg-gradient-to-br from-destructive/20 to-destructive/10 border-2 border-orange-500/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl" />
              <CardContent className="relative p-8 md:p-10 space-y-4">
                <p className="text-lg md:text-xl text-foreground font-bold leading-tight">
                  Los lanzamientos traen alumnos…
                </p>
                <p className="text-lg md:text-xl text-orange-500 font-bold leading-tight">
                  pero el verdadero trabajo empieza después.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 pt-8">
            <p className="text-lg md:text-xl text-foreground text-center font-medium">
              Inviertes tiempo, energía y dinero en:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'retos',
                'webinars',
                'directos',
                'ads',
                'contenidos',
                'estrategia'
              ].map((item, idx) => (
                <Card key={idx} className="group bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 hover:border-primary/60 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg md:text-xl text-foreground font-bold">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-center pt-8">
            <p className="text-lg md:text-xl text-primary font-bold">✓ Consigues leads.</p>
            <p className="text-lg md:text-xl text-primary font-bold">✓ Consigues ventas.</p>
            <p className="text-lg md:text-xl text-primary font-bold">✓ Consigues comunidad.</p>
          </div>

          <Card className="relative overflow-hidden border-2 border-orange-500/40 mt-12 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/15 to-destructive/5" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-3xl" />
            <CardContent className="relative p-8 md:p-10 space-y-6 text-center">
              <p className="text-lg md:text-xl text-foreground font-semibold">
                Pero entonces ocurre lo que nadie te explica:
              </p>
              <p className="text-lg md:text-xl text-orange-500 font-bold leading-tight">
                La parte que más desgasta viene después del lanzamiento.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8 pt-12">
            <p className="text-lg md:text-xl text-foreground text-center font-bold">Porque:</p>
            <div className="space-y-4">
              {[
                'cada persona avanza a un ritmo distinto',
                'muchos se bloquean en silencio',
                'otros desaparecen sin avisar',
                'otros necesitan más apoyo',
                'algunos no integran lo aprendido',
                'otros se desmotivan antes de la mitad',
                'y tú no puedes acompañarlos uno a uno'
              ].map((text, idx) => (
                <Card key={idx} className="group border-l-[6px] border-l-orange-500 bg-gradient-to-r from-destructive/10 to-transparent hover:from-destructive/20 hover:shadow-2xl hover:-translate-x-2 hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-5 md:p-6 flex items-center gap-4">
                    <X className="w-6 h-6 md:w-7 md:h-7 text-orange-500 flex-shrink-0 group-hover:rotate-90 transition-transform duration-300" />
                    <p className="text-base md:text-lg text-foreground font-semibold">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-center pt-12">
            <p className="text-lg md:text-xl text-foreground font-bold">
              Y ahí es donde empiezas a sentirlo:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'te desgastas dando más de lo que recibes',
                'respondes una y otra vez las mismas dudas',
                'intentas motivar sin ver cambios reales',
                'tu energía baja',
                'tu visión se ralentiza',
                'y te preguntas si el esfuerzo vale la pena'
              ].map((text, idx) => (
                <Card key={idx} className="group bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-orange-500/30 hover:border-orange-500/60 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <p className="text-lg md:text-xl text-foreground font-bold leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/20 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardContent className="relative p-8 space-y-4 text-center">
              <p className="text-lg text-muted-foreground">No es tu culpa.</p>
              <p className="text-lg text-muted-foreground">No es tu método.</p>
              <p className="text-lg text-muted-foreground">No es tu contenido.</p>
              <div className="pt-4 space-y-2">
                <p className="text-lg text-foreground font-semibold">
                  Es que estás intentando transformar a cientos de personas con un camino único.
                </p>
                <p className="text-xl text-primary font-bold">
                  Y la transformación real… es siempre personalizada.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Eye className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* EL DOLOR OCULTO DEL CREADOR */}
        <div id="dolor-oculto" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Eye className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">El Dolor Oculto del Creador</span>
            </div>
          </div>

          <Card className="relative overflow-hidden border-2 border-accent/30">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5" />
            <CardContent className="relative p-8 space-y-6">
              <p className="text-xl text-foreground font-medium text-center">
                Muchos creadores quieren algo más grande que enseñar:
              </p>

              <div className="space-y-3">
                {[
                  'Quieren formar a su comunidad en su propio método.',
                  'Quieren entrenar a futuros implementadores.',
                  'Quieren desarrollar asistentes, mentores o vendedores propios.',
                  'Quieren escalar creando equipo desde su audiencia.',
                  'Quieren profesionalizar su ecosistema.'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <p className="text-xl text-foreground font-semibold">
              Pero hay un problema enorme:
            </p>
          </div>

          <div className="space-y-3">
            {[
              'No puedes ver quién realmente avanza',
              'No puedes detectar talento',
              'No puedes medir compromiso',
              'No puedes identificar mentalidad',
              'No puedes saber quién está listo para colaborar contigo'
            ].map((text, idx) => (
              <Card key={idx} className="group border-l-4 border-l-orange-500 hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <X className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <p className="text-foreground font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-2 border-orange-500/30 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5" />
            <CardContent className="relative p-8 space-y-6 text-center">
              <p className="text-xl text-foreground font-semibold">Y eso te limita.</p>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">No puedes delegar.</p>
                <p className="text-lg text-muted-foreground">No puedes escalar.</p>
                <p className="text-lg text-muted-foreground">No puedes crear equipo.</p>
                <p className="text-lg text-muted-foreground">No puedes profesionalizar tu visión.</p>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-xl text-foreground font-semibold">
                  Tu comunidad está llena de talento…
                </p>
                <p className="text-2xl text-orange-500 font-bold">
                  pero no tienes forma de verlo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Sparkles className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LA SOLUCIÓN: WUNJO */}
        <div id="solucion" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">La Solución: Wunjo</span>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/40">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-primary font-bold text-lg">Powered by IA</span>
            </div>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-8">
              <div className="text-center space-y-3">
                <p className="text-2xl text-primary font-bold">
                  Inteligencia Artificial que personaliza la experiencia
                </p>
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  Cada persona de tu comunidad vive su propio camino, adaptado a:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: BarChart3, text: "su nivel" },
                  { icon: Clock, text: "su ritmo" },
                  { icon: Brain, text: "su mentalidad" },
                  { icon: Shield, text: "sus bloqueos" },
                  { icon: Rocket, text: "su motivación" },
                  { icon: TrendingUp, text: "sus fortalezas" },
                  { icon: Target, text: "su propósito" },
                  { icon: Trophy, text: "su capacidad real de avanzar" }
                ].map((item, idx) => (
                  <Card key={idx} className="group/item bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/60 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                      </div>
                      <p className="text-foreground font-medium">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-6 space-y-4">
                <p className="text-xl text-foreground font-semibold">
                  Así, tú sabes EXACTAMENTE:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    '✔ quién progresa',
                    '✔ quién se estanca',
                    '✔ quién integra',
                    '✔ quién tiene mentalidad',
                    '✔ quién podría trabajar contigo',
                    '✔ quién puede seguir escalando tu método'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-start">
                      <p className="text-foreground font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-primary/30 mt-8">
                <CardContent className="p-6 space-y-3 text-center">
                  <p className="text-lg text-foreground font-semibold">
                    Tu comunidad deja de ser una audiencia.
                  </p>
                  <p className="text-2xl text-primary font-bold">
                    Se convierte en un ecosistema vivo de talento, transformación y crecimiento.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Award className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* ¿QUÉ GANAS COMO CREADOR? */}
        <div id="beneficios" className="space-y-10 scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">¿Qué ganas como creador?</span>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Más resultados para tu comunidad",
                desc: "Cada persona avanza de verdad porque el camino se ajusta a ella."
              },
              {
                icon: Heart,
                title: "Más retención",
                desc: "Las experiencias personalizadas evitan el abandono."
              },
              {
                icon: Rocket,
                title: "Más ventas",
                desc: "Más transformación → más testimonios → más conversión."
              },
              {
                icon: Users,
                title: "Más fidelidad",
                desc: "Tus alumnos sienten que les hablas a ellos, no a todos."
              },
              {
                icon: Trophy,
                title: "Más autoridad",
                desc: "Tu marca se percibe innovadora, profesional y con estándares altos."
              },
              {
                icon: Shield,
                title: "Más sostenibilidad",
                desc: "La experiencia acompaña por ti. Tú recuperas tu energía."
              }
            ].map((item, idx) => (
              <Card key={idx} className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <h4 className="font-display text-xl text-foreground font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 max-w-3xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-6 text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-110 transition-transform">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-display text-3xl text-foreground">Más negocio</h4>
              <p className="text-lg text-muted-foreground">Una comunidad transformada genera:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'más recomendaciones',
                  'más ventas recurrentes',
                  'más comunidad activa',
                  'más ingresos',
                  'más estabilidad',
                  'más largo plazo'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 justify-center text-foreground font-medium">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <BadgeCheck className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* TUS LOGROS CON WUNJO */}
        <div id="logros" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Tus logros con Wunjo</span>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Acompañas sin agotarte */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      1. Acompañas sin agotarte
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La IA detecta lo que cada persona necesita y adapta cada paso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Tu comunidad deja de abandonar */}
            <Card className="group relative overflow-hidden border-2 hover:border-accent/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      2. Tu comunidad deja de abandonar
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La personalización evita bloqueos y mantiene la motivación constante.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Más alumnos terminan tu programa */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      3. Más alumnos terminan tu programa
                    </h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">Dejan de consumir.</p>
                      <p className="text-primary font-bold text-xl">Empiezan a integrar.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Un lead deja de ser un lead */}
            <Card className="group relative overflow-hidden border-2 hover:border-secondary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Network className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-secondary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      4. Un lead deja de ser un lead
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Se convierte en parte de tu ecosistema vivo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Puedes formar colaboradores reales */}
            <Card className="group relative overflow-hidden border-2 hover:border-accent/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <UserPlus className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      5. Puedes formar colaboradores reales desde tu comunidad
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wunjo te muestra quién:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'destaca',
                        'tiene mentalidad',
                        'cumple estándares',
                        'puede apoyarte',
                        'puede crecer contigo',
                        'puede formar parte de tu marca'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-foreground">
                          <BadgeCheck className="w-4 h-4 text-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6. Todos ganan */}
            <Card className="group relative overflow-hidden border-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
              <CardContent className="relative p-10 space-y-6 text-center">
                <div className="inline-block p-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-110 transition-transform">
                  <InfinityIcon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground flex items-center justify-center gap-2">
                  <Sparkles className="w-8 h-8 text-primary" />
                  6. Todos ganan
                </h3>
                <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    'Tus alumnos avanzan.',
                    'Tu negocio crece.',
                    'Tu impacto se multiplica.'
                  ].map((item, idx) => (
                    <div key={idx} className="text-foreground font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center space-y-8 py-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-display text-3xl md:text-5xl text-foreground font-bold max-w-3xl mx-auto leading-tight">
            ¿Listo para transformar tu comunidad, tu negocio y tu energía?
          </h3>
          <Link to="/contacto">
            <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-2xl text-lg px-8 py-6">
              <Rocket className="w-6 h-6 mr-2 group-hover:translate-y-[-4px] transition-transform" />
              👉 Inicia tu experiencia Wunjo
              <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

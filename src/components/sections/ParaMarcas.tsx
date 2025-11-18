// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sparkles, Users, TrendingUp, Heart, Award, Rocket, Target,
  Check, X, Eye, Brain, Zap, ChevronRight,
  BarChart3, Shield, Clock, CheckCircle2,
  Lightbulb, Network, BadgeCheck, Infinity, UserPlus, Trophy
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
    { id: "hero", label: "Inicio", icon: Sparkles },
    { id: "problema", label: "El Problema", icon: Target },
    { id: "dolor-oculto", label: "Dolor Oculto", icon: Eye },
    { id: "solucion", label: "La Solución", icon: Lightbulb },
    { id: "beneficios", label: "Qué Ganas", icon: Award },
    { id: "logros", label: "Tus Logros", icon: BadgeCheck },
  ];

  return (
    <section id="para-marcas" className="relative py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
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

      <div className="max-w-6xl mx-auto space-y-32">
        {/* HERO */}
        <div id="hero" className="text-center space-y-10 scroll-mt-24 py-12">
          <div className="space-y-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-[1.1]">
              Eleva tu comunidad,<br />
              tu impacto y tu negocio
            </h1>
            <div className="inline-block">
              <Badge className="px-5 py-2.5 text-base bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20 hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Para Creadores e Influencers
              </Badge>
            </div>
          </div>
        </div>

        {/* Separador elegante */}
        <div className="flex items-center gap-6 max-w-2xl mx-auto opacity-30">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-destructive to-destructive/50" />
          <Target className="w-5 h-5 text-destructive" />
          <div className="h-px flex-1 bg-gradient-to-r from-destructive/50 via-destructive to-transparent" />
        </div>

        {/* EL PROBLEMA */}
        <div id="problema" className="space-y-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2 text-sm border-destructive/30 text-destructive">
              El Problema
            </Badge>
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-card/50 to-card backdrop-blur-sm shadow-xl">
            <CardContent className="p-10 md:p-12 space-y-8 text-center">
              <h3 className="font-display text-3xl md:text-4xl text-foreground font-semibold leading-tight">
                Tú ya tienes lo más difícil:
              </h3>
              <p className="text-2xl md:text-3xl text-primary font-medium leading-relaxed">
                una comunidad que te admira, te escucha y quiere transformarse contigo.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Pero hay algo que nadie te dice cuando empiezas como creador:
            </p>
            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20 backdrop-blur-sm">
              <CardContent className="p-10 space-y-4">
                <p className="text-2xl md:text-3xl text-foreground font-bold leading-tight">
                  Los lanzamientos traen alumnos…
                </p>
                <p className="text-xl md:text-2xl text-destructive font-semibold">
                  pero el verdadero trabajo empieza después.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <p className="text-xl text-foreground text-center leading-relaxed">
              Inviertes tiempo, energía y dinero en:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'retos',
                'webinars',
                'directos',
                'ads',
                'contenidos',
                'estrategia'
              ].map((item, idx) => (
                <Card key={idx} className="group bg-gradient-to-br from-card/50 to-card backdrop-blur-sm border-primary/10 hover:border-primary/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg text-foreground font-medium">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-5 text-center">
            <p className="text-xl text-foreground leading-relaxed">Consigues leads.</p>
            <p className="text-xl text-foreground leading-relaxed">Consigues ventas.</p>
            <p className="text-xl text-foreground leading-relaxed">Consigues comunidad.</p>
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-destructive/10 to-destructive/5 backdrop-blur-sm shadow-xl">
            <CardContent className="p-10 md:p-12 space-y-8 text-center">
              <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
                Pero entonces ocurre lo que nadie te explica:
              </p>
              <p className="text-2xl md:text-3xl text-destructive font-bold leading-tight">
                La parte que más desgasta viene después del lanzamiento.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <p className="text-xl text-foreground text-center font-medium mb-8">Porque:</p>
            {[
              'cada persona avanza a un ritmo distinto',
              'muchos se bloquean en silencio',
              'otros desaparecen sin avisar',
              'otros necesitan más apoyo',
              'algunos no integran lo aprendido',
              'otros se desmotivan antes de la mitad',
              'y tú no puedes acompañarlos uno a uno'
            ].map((text, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive/50 hover:border-l-destructive hover:shadow-lg hover:-translate-x-2 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-8 text-center pt-8">
            <p className="text-2xl text-foreground font-semibold leading-relaxed">
              Y ahí es donde empiezas a sentirlo:
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                'te desgastas dando más de lo que recibes',
                'respondes una y otra vez las mismas dudas',
                'intentas motivar sin ver cambios reales',
                'tu energía baja',
                'tu visión se ralentiza',
                'y te preguntas si el esfuerzo vale la pena'
              ].map((text, idx) => (
                <Card key={idx} className="group bg-destructive/5 border-destructive/20 hover:border-destructive/40 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-7">
                    <p className="text-lg text-foreground leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 backdrop-blur-sm shadow-xl mt-12">
            <CardContent className="p-10 md:p-12 space-y-6 text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">No es tu culpa.</p>
              <p className="text-xl text-muted-foreground leading-relaxed">No es tu método.</p>
              <p className="text-xl text-muted-foreground leading-relaxed">No es tu contenido.</p>
              <div className="pt-6 space-y-4">
                <p className="text-2xl text-foreground font-semibold leading-tight">
                  Es que estás intentando transformar a cientos de personas con un camino único.
                </p>
                <p className="text-3xl text-primary font-bold leading-tight">
                  Y la transformación real… es siempre personalizada.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador elegante */}
        <div className="flex items-center gap-6 max-w-2xl mx-auto opacity-30">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary/50" />
          <Eye className="w-5 h-5 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary/50 via-primary to-transparent" />
        </div>

        {/* EL DOLOR OCULTO DEL CREADOR */}
        <div id="dolor-oculto" className="space-y-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2 text-sm border-accent/30 text-accent">
              El Dolor Oculto del Creador
            </Badge>
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5 backdrop-blur-sm shadow-xl">
            <CardContent className="p-10 md:p-12 space-y-8">
              <p className="text-2xl md:text-3xl text-foreground font-medium text-center leading-tight">
                Muchos creadores quieren algo más grande que enseñar:
              </p>

              <div className="space-y-5 pt-4">
                {[
                  'Quieren formar a su comunidad en su propio método.',
                  'Quieren entrenar a futuros implementadores.',
                  'Quieren desarrollar asistentes, mentores o vendedores propios.',
                  'Quieren escalar creando equipo desde su audiencia.',
                  'Quieren profesionalizar su ecosistema.'
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6 py-8">
            <p className="text-2xl text-foreground font-semibold leading-relaxed">
              Pero hay un problema enorme:
            </p>
          </div>

          <div className="space-y-5">
            {[
              'No puedes ver quién realmente avanza',
              'No puedes detectar talento',
              'No puedes medir compromiso',
              'No puedes identificar mentalidad',
              'No puedes saber quién está listo para colaborar contigo'
            ].map((text, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive/50 hover:border-l-destructive hover:shadow-lg hover:-translate-x-2 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-destructive/10 to-destructive/5 backdrop-blur-sm shadow-xl mt-12">
            <CardContent className="p-10 md:p-12 space-y-8 text-center">
              <p className="text-2xl text-foreground font-semibold leading-tight">Y eso te limita.</p>
              <div className="space-y-3">
                <p className="text-xl text-muted-foreground leading-relaxed">No puedes delegar.</p>
                <p className="text-xl text-muted-foreground leading-relaxed">No puedes escalar.</p>
                <p className="text-xl text-muted-foreground leading-relaxed">No puedes crear equipo.</p>
                <p className="text-xl text-muted-foreground leading-relaxed">No puedes profesionalizar tu visión.</p>
              </div>
              <div className="pt-6 space-y-4">
                <p className="text-2xl text-foreground font-semibold leading-tight">
                  Tu comunidad está llena de talento…
                </p>
                <p className="text-3xl text-destructive font-bold leading-tight">
                  pero no tienes forma de verlo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador elegante */}
        <div className="flex items-center gap-6 max-w-2xl mx-auto opacity-30">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent/50" />
          <Sparkles className="w-5 h-5 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 via-secondary to-transparent" />
        </div>

        {/* LA SOLUCIÓN: WUNJO */}
        <div id="solucion" className="space-y-16 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary">
              La Solución: Wunjo
            </Badge>
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-pulse" />
            <CardContent className="relative p-10 md:p-14 space-y-12">
              <p className="text-2xl md:text-3xl text-foreground font-medium text-center leading-relaxed">
                Creamos experiencias personalizadas con IA para que cada persona de tu comunidad viva su propio camino, adaptado a:
              </p>

              <div className="grid md:grid-cols-2 gap-5 pt-6">
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
                  <Card key={idx} className="group/item bg-gradient-to-br from-card/70 to-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary group-hover/item:scale-110 transition-transform" />
                      </div>
                      <p className="text-lg text-foreground leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-8 space-y-6">
                <p className="text-2xl text-foreground font-semibold leading-relaxed">
                  Así, tú sabes EXACTAMENTE:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    '✔ quién progresa',
                    '✔ quién se estanca',
                    '✔ quién integra',
                    '✔ quién tiene mentalidad',
                    '✔ quién podría trabajar contigo',
                    '✔ quién puede seguir escalando tu método'
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 justify-start">
                      <p className="text-lg text-foreground font-medium leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-none backdrop-blur-sm mt-10 shadow-lg">
                <CardContent className="p-8 space-y-4 text-center">
                  <p className="text-xl text-foreground font-semibold leading-relaxed">
                    Tu comunidad deja de ser una audiencia.
                  </p>
                  <p className="text-2xl md:text-3xl text-primary font-bold leading-tight">
                    Se convierte en un ecosistema vivo de talento, transformación y crecimiento.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Separador elegante */}
        <div className="flex items-center gap-6 max-w-2xl mx-auto opacity-30">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent/50" />
          <Award className="w-5 h-5 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent/50 via-secondary to-transparent" />
        </div>

        {/* ¿QUÉ GANAS COMO CREADOR? */}
        <div id="beneficios" className="space-y-16 scroll-mt-24">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary">
              ¿Qué ganas como creador?
            </Badge>
          </div>

          <div className="space-y-10 max-w-3xl mx-auto">
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
              <Card key={idx} className="group relative overflow-hidden bg-gradient-to-br from-card/70 to-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8 space-y-4">
                  <div className="flex items-start gap-5">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <h4 className="font-display text-2xl text-foreground font-semibold group-hover:text-primary transition-colors leading-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed pl-9">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm shadow-2xl max-w-3xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-pulse" />
            <CardContent className="relative p-10 md:p-12 space-y-8 text-center">
              <div className="inline-block p-5 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-110 transition-transform">
                <Rocket className="w-12 h-12 text-primary" />
              </div>
              <h4 className="font-display text-4xl text-foreground leading-tight">Más negocio</h4>
              <p className="text-xl text-muted-foreground leading-relaxed">Una comunidad transformada genera:</p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  'más recomendaciones',
                  'más ventas recurrentes',
                  'más comunidad activa',
                  'más ingresos',
                  'más estabilidad',
                  'más largo plazo'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 justify-center text-foreground font-medium text-lg">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador elegante */}
        <div className="flex items-center gap-6 max-w-2xl mx-auto opacity-30">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary/50" />
          <BadgeCheck className="w-5 h-5 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 via-accent to-transparent" />
        </div>

        {/* TUS LOGROS CON WUNJO */}
        <div id="logros" className="space-y-16 max-w-3xl mx-auto scroll-mt-24">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary">
              Tus logros con Wunjo
            </Badge>
          </div>

          <div className="space-y-10">
            {/* 1-6 Logros con diseño mejorado */}
            {[
              {
                num: 1,
                icon: Shield,
                title: "Acompañas sin agotarte",
                desc: "La IA detecta lo que cada persona necesita y adapta cada paso.",
                gradient: "from-primary/5 to-accent/5"
              },
              {
                num: 2,
                icon: Heart,
                title: "Tu comunidad deja de abandonar",
                desc: "La personalización evita bloqueos y mantiene la motivación constante.",
                gradient: "from-accent/5 to-secondary/5"
              },
              {
                num: 3,
                icon: Trophy,
                title: "Más alumnos terminan tu programa",
                desc: "Dejan de consumir. Empiezan a integrar.",
                gradient: "from-primary/5 to-accent/5"
              },
              {
                num: 4,
                icon: Network,
                title: "Un lead deja de ser un lead",
                desc: "Se convierte en parte de tu ecosistema vivo.",
                gradient: "from-secondary/5 to-primary/5"
              },
              {
                num: 5,
                icon: UserPlus,
                title: "Puedes formar colaboradores reales desde tu comunidad",
                desc: "Wunjo te muestra quién destaca, tiene mentalidad, cumple estándares, puede apoyarte, puede crecer contigo y puede formar parte de tu marca.",
                gradient: "from-accent/5 to-primary/5"
              },
              {
                num: 6,
                icon: Infinity,
                title: "Todos ganan",
                desc: "Tus alumnos avanzan. Tu negocio crece. Tu impacto se multiplica.",
                gradient: "from-primary/5 via-accent/5 to-secondary/5"
              }
            ].map((item) => (
              <Card key={item.num} className={`group relative overflow-hidden border-none bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer`}>
                <CardContent className="p-8 md:p-10 space-y-5">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors flex items-center gap-3 leading-tight">
                        <span className="text-primary/60">{item.num}.</span>
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center space-y-10 py-20">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-14 h-14 text-primary" />
          </div>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold max-w-4xl mx-auto leading-tight">
            ¿Listo para transformar tu comunidad, tu negocio y tu energía?
          </h3>
          <Link to="/contacto">
            <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-2xl text-xl px-10 py-8 mt-6">
              <Rocket className="w-7 h-7 mr-3 group-hover:translate-y-[-4px] transition-transform" />
              Inicia tu experiencia Wunjo
              <ChevronRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

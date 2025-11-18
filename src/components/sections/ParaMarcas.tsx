// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sparkles, Users, TrendingUp, Heart, Award, Rocket, Target,
  Check, X, Eye, Brain, Zap, Star, ChevronRight, Globe,
  MessageSquare, BarChart3, UserCheck, Compass, Shield,
  Clock, CheckCircle2, Lightbulb, Network, ArrowUpCircle,
  BadgeCheck, Infinity, UserPlus, Trophy
} from "lucide-react";

const ParaMarcas = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero", "problema", "solucion", "beneficios", "logros", "ventaja"
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
    { id: "solucion", label: "La Solución", icon: Lightbulb },
    { id: "beneficios", label: "Qué Ganas", icon: Award },
    { id: "logros", label: "Tus Logros", icon: BadgeCheck },
    { id: "ventaja", label: "Ventaja Oculta", icon: Eye },
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

      <div className="max-w-5xl mx-auto space-y-24">
        {/* HERO */}
        <div id="hero" className="text-center space-y-8 scroll-mt-24">
          <div className="inline-block">
            <Badge className="px-6 py-2 text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Para Creadores con Comunidad
            </Badge>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
            El problema que nadie te cuenta.<br />
            La excelencia que nadie te ofrece.
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Tienes una comunidad, una visión y un mensaje poderoso.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pero tú lo sabes: no basta con enseñar bien.
            </p>
            <p className="text-2xl text-primary font-semibold pt-4">
              La verdadera excelencia está en cómo lo vive tu comunidad.
            </p>
          </div>
          <p className="text-lg text-muted-foreground">
            Y ahí es donde la mayoría de creadores se quedan cortos.
          </p>
        </div>

        {/* EL PROBLEMA (REAL) */}
        <div id="problema" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
              <Target className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold">El Problema (Real)</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Lo que ningún creador dice en voz alta
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Users,
                title: "Tu comunidad es excelente, pero avanza de forma desigual",
                desc: "Unos vuelan, otros dudan, otros entran con fuerza y luego se apagan."
              },
              {
                icon: Eye,
                title: "La experiencia no está a la altura de tu contenido",
                desc: "Tu contenido es top, pero la forma de vivirlo no siempre lo refleja."
              },
              {
                icon: Zap,
                title: "Tu energía se dispersa intentando acompañar a todos",
                desc: "Y aún así, se quedan personas sin recibir lo que necesitan."
              },
              {
                icon: Shield,
                title: "La falta de personalización limita tu excelencia",
                desc: "No porque tú no seas capaz, sino porque nadie puede acompañar individualmente a cientos de personas."
              },
              {
                icon: Heart,
                title: "Pierdes alumnos con potencial real",
                desc: "Personas que podrían haber brillado contigo… si hubieran recibido un camino adaptado a ellas."
              }
            ].map((item, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive hover:border-l-destructive/70 hover:shadow-xl hover:-translate-x-2 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-destructive/10 group-hover:scale-110 group-hover:rotate-3 transition-all">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start gap-2">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                        <h4 className="text-lg text-foreground font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8">
            <Card className="relative overflow-hidden border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
              <CardContent className="relative p-8 space-y-4">
                <p className="text-xl text-foreground font-semibold">
                  La excelencia no depende del contenido.
                </p>
                <p className="text-2xl text-primary font-bold">
                  Depende de la experiencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Sparkles className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LA SOLUCIÓN WUNJO */}
        <div id="solucion" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">La Solución Wunjo</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Convertimos tu curso en una experiencia de excelencia adaptada a cada alumno.
            </h3>
            <p className="text-xl text-muted-foreground font-light">
              Personalizada con IA. Diseñada con propósito. Sostenida con alma.
            </p>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all duration-500" />
            <CardContent className="relative p-8 space-y-6">
              <p className="text-lg text-foreground text-center">
                Analizamos tu curso, tu mentoría o tu programa<br />
                y lo convertimos en un acompañamiento vivo y personalizado que adapta:
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: BarChart3, text: "su nivel" },
                  { icon: Clock, text: "su ritmo" },
                  { icon: Brain, text: "su mentalidad" },
                  { icon: Shield, text: "sus bloqueos" },
                  { icon: Zap, text: "sus fortalezas" },
                  { icon: Rocket, text: "su motivación" },
                  { icon: Eye, text: "su estilo de aprendizaje" }
                ].map((item, idx) => (
                  <Card key={idx} className="group/item bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-5 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-gradient-to-br group-hover/item:from-primary/20 group-hover/item:to-accent/20 transition-all">
                        <item.icon className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                      </div>
                      <p className="text-foreground font-medium flex-1">{item.text}</p>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-4 pt-4">
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border border-primary/30">
              <p className="text-xl text-foreground font-semibold flex items-center gap-3 flex-wrap justify-center">
                <span>Tu esencia.</span>
                <Star className="w-5 h-5 text-primary" />
                <span>Su camino.</span>
                <Star className="w-5 h-5 text-accent" />
                <span>Transformación real.</span>
              </p>
            </div>
            <p className="text-lg text-muted-foreground pt-4">
              Tu contenido alcanza la excelencia cuando cada persona lo vive en su mejor versión.
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Award className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* LO QUE GANAS COMO CREADOR (NIVEL EXCELENCIA) */}
        <div id="beneficios" className="space-y-10 scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Nivel Excelencia</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Lo que ganas como creador
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Más profundidad en tu impacto",
                desc: "Lo que enseñas se integra. No se queda en teoría."
              },
              {
                icon: Users,
                title: "Una comunidad sostenida, acompañada y en crecimiento",
                desc: "Cuando la experiencia es excelente, la motivación se mantiene."
              },
              {
                icon: Rocket,
                title: "Un negocio más sólido y escalable",
                desc: "Más terminaciones, más resultados, más ventas."
              },
              {
                icon: Trophy,
                title: "Autoridad reforzada",
                desc: "Los creadores que ofrecen excelencia destacan de inmediato."
              },
              {
                icon: Zap,
                title: "Liberas tu energía",
                desc: "La experiencia acompaña por ti. Tú vuelves a enfocarte en crear, liderar y expandirte."
              },
              {
                icon: Star,
                title: "Una marca memorable",
                desc: "Tu comunidad no solo aprende contigo: vive una experiencia inolvidable."
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
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <BadgeCheck className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* TUS LOGROS CON WUNJO (EXCELENCIA EN ACCIÓN) */}
        <div id="logros" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Tus logros con Wunjo</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Excelencia en Acción
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Con una experiencia personalizada:
            </p>
          </div>

          <Card className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all" />
            <CardContent className="relative p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Target, text: "tus alumnos avanzan con claridad" },
                  { icon: Shield, text: "superan bloqueos antes de que se estanquen" },
                  { icon: Rocket, text: "mantienen la motivación" },
                  { icon: Heart, text: "sienten un acompañamiento real" },
                  { icon: Brain, text: "integran mentalidad, acción y evolución" },
                  { icon: TrendingUp, text: "multiplican resultados" },
                  { icon: CheckCircle2, text: "y quieren seguir contigo" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-card/50 to-card hover:from-primary/5 hover:to-accent/5 hover:scale-105 transition-all duration-300 cursor-pointer group/item">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 space-y-3">
                <p className="text-lg text-muted-foreground">
                  Esto es lo que pasa cuando tu contenido se vive con excelencia.
                </p>
                <p className="text-2xl text-primary font-bold">
                  ✨ Transformación real ✨
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

        {/* LO QUE NADIE TE DICE (TU VENTAJA OCULTA) */}
        <div id="ventaja" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Eye className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Lo que nadie te dice</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Tu ventaja oculta
            </h2>
          </div>

          <Card className="relative overflow-hidden border-2 border-accent/30 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-8">
              <div className="text-center space-y-4">
                <p className="text-xl text-foreground leading-relaxed">
                  Cuando elevas la experiencia de tu comunidad a este nivel de excelencia…
                </p>
                <p className="text-2xl text-primary font-bold">
                  …empiezas a ver talento real.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground text-center">
                  No solo alumnos.
                </p>
                <p className="text-lg text-foreground text-center font-medium">
                  Personas que pueden convertirse en:
                </p>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: UserPlus, text: "implementadores" },
                    { icon: Users, text: "colaboradores" },
                    { icon: Award, text: "mentores internos" },
                    { icon: TrendingUp, text: "vendedores formados por ti" },
                    { icon: Star, text: "parte del futuro de tu marca" }
                  ].map((item, idx) => (
                    <Card key={idx} className="group/item bg-gradient-to-br from-card to-card/50 border-accent/20 hover:border-accent/60 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-5 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors">
                          <item.icon className="w-5 h-5 text-accent group-hover/item:scale-110 transition-transform" />
                        </div>
                        <p className="text-foreground font-medium flex-1">{item.text}</p>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/item:text-accent group-hover/item:translate-x-1 transition-all" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="text-center pt-6 space-y-3">
                <p className="text-xl text-foreground font-semibold">
                  La excelencia atrae excelencia.
                </p>
                <p className="text-2xl text-accent font-bold">
                  Y la revela.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA PRINCIPAL */}
        <div className="text-center space-y-8 py-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-display text-3xl md:text-5xl text-foreground font-bold max-w-3xl mx-auto leading-tight">
            ¿Listo para ofrecer a tu comunidad una experiencia de excelencia que nadie más ofrece?
          </h3>
          <Link to="/contacto">
            <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-2xl text-lg px-8 py-6">
              <Rocket className="w-6 h-6 mr-2 group-hover:translate-y-[-4px] transition-transform" />
              Inicia tu experiencia Wunjo
              <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

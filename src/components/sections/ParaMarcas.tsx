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
  Clock, CheckCircle2, HelpCircle, Lightbulb, Moon, Sun,
  Network, ArrowUpCircle, BadgeCheck, Infinity
} from "lucide-react";

const ParaMarcas = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero", "problema", "solucion", "beneficios", "logros",
        "verdades", "antes-despues", "diferencia", "faq"
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
    { id: "beneficios", label: "Beneficios", icon: Award },
    { id: "logros", label: "Qué consigues", icon: BadgeCheck },
    { id: "verdades", label: "Lo que nadie dice", icon: Eye },
    { id: "antes-despues", label: "Antes/Después", icon: TrendingUp },
    { id: "diferencia", label: "Diferenciación", icon: Star },
    { id: "faq", label: "FAQ", icon: HelpCircle },
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
              Para Creadores Visionarios
            </Badge>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
            Eleva tu comunidad, tu impacto y tu negocio
          </h2>
        </div>

        {/* EL PROBLEMA */}
        <div id="problema" className="space-y-8 max-w-3xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
              <Target className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold">El Problema</span>
            </div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Tú ya tienes lo más difícil: una comunidad que te escucha, te admira y quiere transformarse contigo. Pero hay algo que ningún creador ve… hasta que lo siente:
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Users, text: "Cada persona avanza de forma diferente." },
              { icon: Heart, text: "Muchos se bloquean, se desmotivan o se pierden." },
              { icon: Clock, text: "Y tú no puedes acompañarlos uno a uno." }
            ].map((item, idx) => (
              <Card key={idx} className="group border-l-4 border-l-primary hover:border-l-accent hover:shadow-xl hover:-translate-x-2 transition-all duration-300 cursor-pointer overflow-hidden">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Cuando esto ocurre, tu contenido es increíble… pero los resultados se diluyen, tu comunidad se dispersa y la experiencia pierde fuerza.
            </p>
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
              <p className="text-xl text-primary font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Aquí es donde nace Wunjo
              </p>
            </div>
          </div>
        </div>

        {/* LA SOLUCIÓN */}
        <div id="solucion" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Lightbulb className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">La Solución</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Creamos experiencias personalizadas con IA para que tu comunidad avance, se transforme… y se quede contigo.
            </h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Analizamos tu curso, tu mentoría o tu contenido y lo convertimos en un acompañamiento vivo que adapta cada paso a cada persona:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: BarChart3, text: "su nivel" },
              { icon: Clock, text: "su ritmo" },
              { icon: Brain, text: "su mentalidad" },
              { icon: Zap, text: "sus fortalezas" },
              { icon: Shield, text: "sus bloqueos" },
              { icon: Rocket, text: "su motivación" },
              { icon: Compass, text: "su propósito" }
            ].map((item, idx) => (
              <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                  <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-lg text-foreground font-semibold text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
            La experiencia se ajusta automáticamente para que nadie se quede atrás, y los resultados se multiplican.
          </p>
        </div>

        {/* BENEFICIOS PARA CREADOR */}
        <div id="beneficios" className="space-y-10 scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Beneficios para ti</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              ¿Qué ganas como creador?
            </h3>
            <p className="text-xl text-muted-foreground">Mucho más de lo que imaginas.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle2, title: "Más resultados para tu comunidad", desc: "Porque cada persona recibe lo que necesita para avanzar de verdad." },
              { icon: Heart, title: "Más retención", desc: "Los alumnos dejan de abandonar porque se sienten guiados y acompañados. Tu comunidad se mantiene viva." },
              { icon: TrendingUp, title: "Más ventas", desc: "Más transformación = más testimonios = más conversión." },
              { icon: Star, title: "Más fidelidad", desc: "Cuando un alumno siente que \"tu contenido fue creado para él\", se queda contigo… y vuelve." },
              { icon: Award, title: "Más autoridad", desc: "Tu marca se percibe como innovadora, avanzada, con estándares altos." },
              { icon: Shield, title: "Más sostenibilidad", desc: "La experiencia funciona sola. No tienes que estar encima de cada alumno." }
            ].map((item, idx) => (
              <Card key={idx} className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:border-primary/60 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-xl text-primary font-medium mb-2 group-hover:translate-x-1 transition-transform">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden max-w-3xl mx-auto group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse" />
            <CardContent className="relative p-10 space-y-6 text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-110 transition-transform">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-display text-3xl text-foreground">Más negocio</h4>
              <p className="text-muted-foreground text-lg">Una comunidad que termina, progresa y se transforma genera:</p>
              <div className="grid md:grid-cols-2 gap-3 text-foreground font-medium">
                {["más recomendaciones", "más ventas recurrentes", "más comunidad activa", "más ingresos totales"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 justify-center">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xl text-primary font-bold pt-4">un negocio estable y escalable</p>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Rocket className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LO QUE CONSIGUE TU MARCA */}
        <div id="logros" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Tus logros con Wunjo</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Lo que consigue tu marca cuando personaliza su experiencia
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground font-light">
                Tu contenido ya transforma.
              </p>
              <p className="text-xl text-foreground font-medium">
                Pero cuando conviertes tu curso, mentoría o programa en una experiencia personalizada para cada persona de tu comunidad, todo cambia:
              </p>
              <div className="flex items-center justify-center gap-4 text-xl text-primary font-semibold pt-4">
                <span>tu impacto</span>
                <span>·</span>
                <span>sus resultados</span>
                <span>·</span>
                <span>tu negocio</span>
              </div>
            </div>
          </div>

          <p className="text-2xl text-foreground font-semibold text-center">
            Esto es lo que logras con Wunjo:
          </p>

          <div className="space-y-8">
            {/* 1. Acompañas sin desgastarte */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      1. Acompañas a cada alumno sin desgastarte
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La IA detecta lo que cada persona necesita y entrega mensajes, mentalidad y pasos adaptados a su proceso.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2 text-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>No tienes que multiplicarte</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        <span>Sin estar pendiente de cientos</span>
                      </div>
                    </div>
                    <p className="text-primary font-semibold pt-2">
                      Acompañamiento real, sin agotarte.
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
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      2. Tu comunidad deja de abandonar
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cuando cada persona recibe un camino hecho para ella:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['no se pierde', 'no se bloquea', 'no se desmotiva', 'no desaparece'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-foreground">
                          <Check className="w-4 h-4 text-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 mt-4 space-y-2">
                      <p className="text-foreground font-medium">✓ La retención sube</p>
                      <p className="text-foreground font-medium">✓ El abandono desaparece</p>
                      <p className="text-accent font-semibold">✓ Tu mensaje llega hasta el final</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Más alumnos terminan */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      3. Más alumnos terminan tu programa y logran resultados
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cuando el camino es claro, personalizado y emocionalmente sostenido, las personas avanzan.
                    </p>
                    <div className="flex items-center justify-center gap-3 py-4 text-lg font-medium">
                      <span className="text-primary">Más finalización</span>
                      <ChevronRight className="w-5 h-5 text-primary" />
                      <span className="text-accent">más casos de éxito</span>
                      <ChevronRight className="w-5 h-5 text-accent" />
                      <span className="text-secondary">más fuerza para tu marca</span>
                    </div>
                    <div className="text-center space-y-2 pt-2">
                      <p className="text-muted-foreground">Tu contenido deja de ser consumido.</p>
                      <p className="text-primary font-bold text-xl">Empieza a ser integrado.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Lead se convierte en ecosistema */}
            <Card className="group relative overflow-hidden border-2 hover:border-secondary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Network className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-secondary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      4. Un lead deja de ser solo un lead: se convierte en parte de tu ecosistema
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La mayoría de creadores pierden a sus leads en la mitad del camino.
                    </p>
                    <p className="text-foreground font-medium">Con Wunjo, ese lead:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['se siente acompañado', 'se siente visto', 'progresa', 'crece contigo', 'desarrolla habilidades', 'se fideliza', 'avanza por tus productos', 'quiere volver'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-foreground">
                          <ArrowUpCircle className="w-4 h-4 text-secondary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-4 mt-4 text-center space-y-2">
                      <p className="text-muted-foreground">Tu comunidad deja de ser una audiencia.</p>
                      <p className="text-secondary font-bold text-xl">Se convierte en una red viva de crecimiento.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Formar colaboradores */}
            <Card className="group relative overflow-hidden border-2 hover:border-accent/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <UserCheck className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      5. Puedes formar colaboradores reales desde tu propia comunidad
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Si tu visión incluye formar implementadores, entrenar vendedores, preparar expertos, o crear un equipo desde tu comunidad…
                    </p>
                    <p className="text-foreground font-medium">Wunjo te permite identificar:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {['quién destaca', 'quién tiene mentalidad', 'quién cumple tus estándares', 'quién podría trabajar contigo', 'quién está listo para más'].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-foreground">
                          <BadgeCheck className="w-4 h-4 text-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 mt-4 space-y-2">
                      <p className="text-foreground">La personalización no solo transforma al alumno:</p>
                      <p className="text-accent font-bold text-xl">te revela talento.</p>
                      <p className="text-sm text-muted-foreground pt-2">Esto multiplica tu impacto y crea un modelo de negocio sostenible y escalable.</p>
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
                  <Infinity className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground flex items-center justify-center gap-2">
                  <Sparkles className="w-8 h-8 text-primary" />
                  6. Todos ganan
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    'Tus alumnos avanzan',
                    'Tu comunidad se mantiene motivada',
                    'Tus resultados aumentan',
                    'Tu negocio crece',
                    'Tu autoridad se fortalece',
                    'Tu marca evoluciona',
                    'Tu ecosistema se expande'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center text-foreground font-medium">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 space-y-3">
                  <p className="text-xl text-foreground">
                    Cuando personalizas la experiencia, tú no solo enseñas.
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Transformas.
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Y cuando transformas, tu negocio escala naturalmente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-8">
            <p className="text-xl text-foreground font-medium">
              ¿Listo para convertir tu contenido en una experiencia que eleva a tu comunidad y expande tu negocio?
            </p>
            <Link to="/contacto">
              <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-xl">
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Inicia tu experiencia Wunjo
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Eye className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LO QUE NADIE TE CUENTA */}
        <div id="verdades" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10">
              <Eye className="w-5 h-5" />
              <span className="font-semibold">La verdad</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Lo que nadie te cuenta cuando tienes una comunidad
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Construir una comunidad es un logro enorme.
            </p>
            <p className="text-xl text-foreground font-medium">
              Pero mantenerla viva, comprometida y avanzando… es otro juego completamente distinto.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              La mayoría de los creadores se dan cuenta tarde de estas verdades:
            </p>

            <div className="grid gap-4">
              {[
                "No todo el mundo avanza con el mismo ritmo.",
                "Muchos se bloquean… y jamás te lo dicen.",
                "La mayoría abandona por falta de claridad, no por falta de valor.",
                "La experiencia que viven tus seguidores determina si vuelven a comprarte o no.",
                "Y tú, por más que quieras, no puedes acompañarlos uno a uno."
              ].map((text, idx) => (
                <Card key={idx} className="group border-l-4 border-l-destructive hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                  <CardContent className="p-5 flex items-start gap-4">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
            <CardContent className="relative p-8 space-y-6">
              <div className="flex items-center gap-3 justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl text-foreground text-center">
                  Por eso las marcas que crecen no solo enseñan: crean experiencias.
                </h3>
              </div>
              <p className="text-muted-foreground text-center">Experiencias que contienen:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {['personalización', 'seguimiento', 'mentalidad', 'estrategia', 'rituales', 'claridad', 'motivación', 'transformación real'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="text-center pt-4 space-y-3">
                <p className="text-lg text-foreground">Cuando tu comunidad vive todo esto…</p>
                <p className="text-xl text-primary font-semibold">tu contenido deja de ser "información" y se convierte en impacto.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Star className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* ANTES Y DESPUÉS */}
        <div id="antes-despues" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Transformación</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              El Antes y el Después de trabajar con Wunjo
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              No todas las experiencias digitales son iguales. Y no todos los creadores logran que su comunidad avance.
            </p>
          </div>

          {/* ANTES */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <Moon className="w-8 h-8 text-muted-foreground" />
              <h3 className="font-display text-3xl text-foreground">Antes de Wunjo</h3>
            </div>

            <div className="space-y-3">
              {[
                "Cada alumno avanza a su ritmo… pero sin dirección",
                "Muchos abandonan en silencio",
                "Tu contenido se consume… pero no se integra",
                "No tienes visibilidad real de tu comunidad",
                "Pierdes alumnos que podrían haber sido casos de éxito"
              ].map((text, idx) => (
                <Card key={idx} className="group border-l-4 border-l-destructive/50 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive" />
                    <p className="text-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* DESPUÉS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <Sun className="w-8 h-8 text-primary" />
              <h3 className="font-display text-3xl text-foreground">Después de Wunjo</h3>
            </div>

            <div className="space-y-3">
              {[
                "Cada miembro de tu comunidad recibe un camino personalizado",
                "Nadie se queda atrás",
                "Tu contenido se convierte en transformación real",
                "Tú ves todo desde arriba con claridad estratégica",
                "Multiplicas tus casos de éxito"
              ].map((text, idx) => (
                <Card key={idx} className="group border-l-4 border-l-primary hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <p className="text-primary font-medium">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center space-y-6 pt-8">
            <p className="text-xl text-foreground font-semibold">El cambio es simple:</p>
            <p className="text-lg text-muted-foreground">Antes compartías contenido.</p>
            <p className="text-2xl text-primary font-bold">Ahora generas experiencias que transforman vidas… y negocios.</p>
            <div className="pt-6">
              <Link to="/contacto">
                <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-xl">
                  <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Inicia tu experiencia Wunjo
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <Globe className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* POR QUÉ SOMOS DIFERENTES */}
        <div id="diferencia" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/30">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Único en el mercado</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Por qué Wunjo es diferente a cualquier "agencia digital"
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              La mayoría de las agencias crean webs, automatizaciones o diseños. Nosotras no hacemos "eso".
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Globe, title: "Diseñamos experiencias que cambian personas", desc: "Una agencia te entrega una web. Wunjo te entrega un universo digital que guía, acompaña y transforma.", gradient: "from-primary/10 to-accent/10" },
              { icon: Brain, title: "Creamos acompañamientos personalizados con IA", desc: "Tu comunidad no recibe correos genéricos. Recibe mensajes adaptados a su energía, ritmo y mentalidad.", gradient: "from-accent/10 to-secondary/10" },
              { icon: Heart, title: "Trabajamos en consciencia y estrategia", desc: "Cada decisión tiene un propósito: cómo se sienten, avanzan, reciben y transforman tus seguidores.", gradient: "from-secondary/10 to-primary/10" },
              { icon: BarChart3, title: "Entregamos impacto medible", desc: "Wunjo te permite ver quién avanza, se estanca, tiene potencial o podría trabajar contigo.", gradient: "from-primary/10 to-accent/10" },
              { icon: Users, title: "Co-creamos contigo", desc: "Nos sumergimos en tu energía, propósito, comunidad y visión para crear algo único.", gradient: "from-accent/10 to-secondary/10" },
              { icon: Sparkles, title: "Hacemos transformaciones, no proyectos", desc: "Un proyecto termina. Una transformación crea un antes y un después en tu comunidad.", gradient: "from-secondary/10 to-primary/10" }
            ].map((item, idx) => (
              <Card key={idx} className={`group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50`} />
                <CardContent className="relative p-8 flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8">
            <h3 className="font-display text-2xl text-foreground">El resultado de esta diferencia:</h3>
            <div className="space-y-3 text-lg text-foreground">
              <p>Tu comunidad vive algo único.</p>
              <p>Tu marca se convierte en referencia.</p>
              <p>Tu negocio crece de forma sostenible.</p>
              <p className="text-2xl text-primary font-bold pt-4">Y tú alcanzas un nivel de excelencia que casi ningún creador tiene hoy.</p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <HelpCircle className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* FAQ */}
        <div id="faq" className="space-y-12 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Preguntas frecuentes</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Todo lo que necesitas saber
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "¿Esto sustituye mi curso o mentoría?", a: "No. Wunjo no reemplaza tu contenido: lo amplifica. Tu curso sigue siendo el núcleo, pero cada persona recibe un camino personalizado según su nivel, ritmo y mentalidad." },
              { q: "¿Necesito saber de tecnología?", a: "Para nada. Tú aportas tu contenido y tu visión. Nosotras creamos toda la estructura experiencial con IA y te guiamos paso a paso." },
              { q: "¿Cómo sé si esto funcionará con mi comunidad?", a: "Si tu comunidad quiere avanzar, aprender o transformarse: esto funciona. La personalización ayuda exacto donde la mayoría se estanca." },
              { q: "¿Cuánto trabajo tengo que hacer yo?", a: "Muy poco. Revisar contenido, aprobar estructura y grabar (si hace falta) ciertas piezas. Nosotras hacemos el 90%." },
              { q: "¿Esto ayuda a que mi comunidad compre más?", a: "Sí. Cuando la experiencia mejora: más alumnos terminan, más consiguen resultados, más recomiendan, más vuelven a comprar. Es la forma más rentable de hacer crecer tu negocio." }
            ].map((item, idx) => (
              <Card key={idx} className="group border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-primary font-medium mb-2">{item.q}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center space-y-8 py-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold">
            ¿Listo para transformar tu comunidad?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a los creadores que ya están ofreciendo experiencias que nadie más puede igualar
          </p>
          <Link to="/contacto">
            <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-2xl text-lg px-8 py-6">
              <Rocket className="w-6 h-6 mr-2 group-hover:translate-y-[-4px] transition-transform" />
              Inicia tu experiencia Wunjo ahora
              <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

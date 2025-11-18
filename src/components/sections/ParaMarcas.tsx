// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sparkles, Users, TrendingUp, Heart, Award, Rocket, Target,
  Check, X, Eye, Brain, Zap, Star, ChevronRight,
  MessageSquare, BarChart3, UserCheck, Shield,
  Clock, CheckCircle2, Lightbulb, Network, ArrowUpCircle,
  BadgeCheck, Infinity, UserPlus, Trophy, AlertTriangle,
  Search, Layers
} from "lucide-react";

const ParaMarcas = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero", "problema", "desgaste", "formar", "wunjo-nace",
        "solucion", "beneficios", "logros"
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
    { id: "desgaste", label: "El Desgaste", icon: AlertTriangle },
    { id: "formar", label: "Formar Comunidad", icon: UserPlus },
    { id: "wunjo-nace", label: "Aquí nace Wunjo", icon: Lightbulb },
    { id: "solucion", label: "La Solución", icon: CheckCircle2 },
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

      <div className="max-w-5xl mx-auto space-y-24">
        {/* HERO */}
        <div id="hero" className="text-center space-y-8 scroll-mt-24">
          <div className="inline-block">
            <Badge className="px-6 py-2 text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Para Creadores e Influencers
            </Badge>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
            Tu página estrella
          </h2>
        </div>

        {/* EL PROBLEMA */}
        <div id="problema" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
              <Target className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold">El Problema</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Tú ya tienes lo más difícil
            </h3>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Una comunidad que te escucha, te respeta y quiere transformarse contigo.
            </p>
          </div>

          <Card className="relative overflow-hidden border-2 border-destructive/20">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-destructive/10" />
            <CardContent className="relative p-8 space-y-4">
              <p className="text-lg text-foreground font-medium text-center">
                Pero hay algo que todo creador acaba sintiendo, aunque no lo diga:
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {[
              { text: "Cada persona avanza distinto." },
              { text: "Unos progresan." },
              { text: "Otros se bloquean." },
              { text: "Otros desaparecen sin explicación." },
              { text: "Y tú no puedes acompañarlos uno a uno." }
            ].map((item, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 pt-6">
            <p className="text-xl text-foreground font-semibold">
              Entonces llega lo inevitable:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: AlertTriangle, text: "te desgastas" },
              { icon: MessageSquare, text: "respondes dudas sin fin" },
              { icon: Heart, text: "motivas sin ver resultados" },
              { icon: Layers, text: "creas contenido… pero no lo integran" },
              { icon: Search, text: "no sabes quién avanza y quién no" },
              { icon: Clock, text: "te preguntas si tu esfuerzo vale el tiempo invertido" }
            ].map((item, idx) => (
              <Card key={idx} className="group bg-destructive/5 border-destructive/20 hover:border-destructive/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-destructive/10 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/20 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardContent className="relative p-8 space-y-4 text-center">
              <p className="text-lg text-muted-foreground">
                No es tu culpa.
              </p>
              <p className="text-lg text-muted-foreground">
                No es tu método.
              </p>
              <p className="text-lg text-muted-foreground">
                No es tu contenido.
              </p>
              <p className="text-2xl text-primary font-bold pt-4">
                Es falta de personalización.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-destructive to-destructive/50" />
          <AlertTriangle className="w-6 h-6 text-destructive" />
          <div className="h-px flex-1 bg-gradient-to-r from-destructive/50 via-destructive to-transparent" />
        </div>

        {/* EL DESGASTE MENTAL DEL CREADOR */}
        <div id="desgaste" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold">El desgaste mental del creador</span>
            </div>
          </div>

          <Card className="relative overflow-hidden border-2 border-destructive/30">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-destructive/5" />
            <CardContent className="relative p-10 space-y-6">
              <p className="text-xl text-foreground font-medium text-center leading-relaxed">
                Lo que agota no es crear contenido.
              </p>
              <p className="text-2xl text-destructive font-bold text-center">
                Es intentar transformar a cientos de personas sin un sistema que sostenga la experiencia.
              </p>
              <div className="pt-6 space-y-4">
                <p className="text-lg text-muted-foreground text-center">
                  El creador termina preguntándose:
                </p>
                <Card className="bg-background/50 border-destructive/30">
                  <CardContent className="p-6">
                    <p className="text-xl text-foreground font-semibold text-center italic">
                      "¿Por qué hago tanto… si no veo los resultados que debería?"
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-xl text-primary font-bold text-center pt-6">
                Wunjo existe para cambiar eso.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <UserPlus className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* EL DOLOR OCULTO: QUIERES FORMAR A TU COMUNIDAD */}
        <div id="formar" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <UserPlus className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">El dolor oculto</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Quieres formar a tu comunidad… pero no tienes cómo hacerlo
            </h3>
          </div>

          <Card className="relative overflow-hidden border-2 border-accent/30">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5" />
            <CardContent className="relative p-8 space-y-6">
              <p className="text-lg text-foreground font-medium text-center">
                Muchos creadores quieren algo más grande:
              </p>

              <div className="space-y-3">
                {[
                  "crear implementadores que dominen su método",
                  "preparar asistentes, mentores o vendedores",
                  "formar profesionales que apoyen su marca",
                  "construir un equipo desde su propia comunidad",
                  "escalar su impacto sin perder calidad"
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
              Pero aquí llega el bloqueo:
            </p>
          </div>

          <div className="space-y-3">
            {[
              "No sabes quién tiene mentalidad",
              "No sabes quién avanza",
              "No sabes quién se queda atrás",
              "No puedes evaluar fortalezas y debilidades",
              "No puedes medir quién podría trabajar contigo"
            ].map((text, idx) => (
              <Card key={idx} className="group border-l-4 border-l-destructive hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                <CardContent className="p-5 flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-foreground font-medium">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/20 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardContent className="relative p-8 space-y-4 text-center">
              <p className="text-lg text-muted-foreground">
                No es falta de intención.
              </p>
              <p className="text-2xl text-primary font-bold">
                Es falta de estructura.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Sparkles className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* AQUÍ ES DONDE NACE WUNJO */}
        <div id="wunjo-nace" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Aquí es donde nace Wunjo</span>
            </div>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-8">
              <p className="text-xl text-foreground font-medium text-center leading-relaxed">
                Creamos experiencias personalizadas con IA que permiten que cada miembro de tu comunidad viva un camino propio:
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: BarChart3, text: "según su nivel" },
                  { icon: Clock, text: "según su ritmo" },
                  { icon: Brain, text: "según su mentalidad" },
                  { icon: Rocket, text: "según su motivación" },
                  { icon: Shield, text: "según sus bloqueos" },
                  { icon: Target, text: "según su propósito" },
                  { icon: Zap, text: "según su potencial" },
                  { icon: Trophy, text: "según su capacidad real de avanzar" }
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

              <div className="text-center pt-6 space-y-3">
                <p className="text-xl text-foreground font-semibold">
                  Así tú sabes EXACTAMENTE quién está listo para más…
                </p>
                <p className="text-2xl text-primary font-bold">
                  y quién podría convertirse en parte de tu equipo.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <CheckCircle2 className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* LA SOLUCIÓN */}
        <div id="solucion" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">La Solución</span>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Transformamos tu curso, mentoría o contenido en un acompañamiento vivo que se adapta automáticamente a cada persona.
            </h3>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            <CardContent className="relative p-8 space-y-6">
              <p className="text-lg text-foreground font-medium text-center">
                Tu comunidad:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, text: "avanza" },
                  { icon: Rocket, text: "se mantiene motivada" },
                  { icon: Target, text: "no se pierde" },
                  { icon: Brain, text: "integra lo aprendido" },
                  { icon: Trophy, text: "logra resultados reales" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-card/50 to-card hover:from-primary/5 hover:to-accent/5 hover:scale-105 transition-all duration-300 cursor-pointer group/item">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item.text}</p>
                    <Check className="w-4 h-4 ml-auto text-primary" />
                  </div>
                ))}
              </div>
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

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Más resultados para tu comunidad",
                desc: "La personalización hace que avancen de verdad."
              },
              {
                icon: Heart,
                title: "Más retención",
                desc: "El abandono cae drásticamente."
              },
              {
                icon: Rocket,
                title: "Más ventas",
                desc: "Más transformación = más testimonios = más conversión."
              },
              {
                icon: Users,
                title: "Más fidelidad",
                desc: "Sienten que les hablas a ellos."
              },
              {
                icon: Trophy,
                title: "Más autoridad",
                desc: "Tu marca se convierte en referente y en innovación."
              },
              {
                icon: Shield,
                title: "Más sostenibilidad",
                desc: "La experiencia acompaña por ti."
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

          <Card className="relative overflow-hidden border-2 border-primary/30 max-w-3xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-6 text-center">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-110 transition-transform">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-display text-3xl text-foreground">Más negocio</h4>
              <div className="space-y-3">
                <p className="text-lg text-muted-foreground">Tu ecosistema crece.</p>
                <p className="text-lg text-muted-foreground">Tu comunidad evoluciona.</p>
                <p className="text-2xl text-primary font-bold pt-4">Y tú puedes escalar sin desgaste.</p>
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
                      La IA adapta cada paso. Tú no tienes que multiplicarte.
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
                      El camino personalizado evita bloqueos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Más personas terminan y transforman */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="relative p-8 space-y-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <Sparkles className="w-6 h-6" />
                      3. Más personas terminan y transforman
                    </h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">Tu contenido deja de ser consumido.</p>
                      <p className="text-primary font-bold text-xl">Empieza a ser integrado.</p>
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
                      Se convierte en parte de tu ecosistema.
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
                      Identificas quién:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'destaca',
                        'tiene mentalidad',
                        'cumple estándares',
                        'puede trabajar contigo',
                        'puede escalar con tu método'
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
                  <Infinity className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground flex items-center justify-center gap-2">
                  <Sparkles className="w-8 h-8 text-primary" />
                  6. Todos ganan
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {[
                    'Tu comunidad avanza',
                    'Tu negocio crece',
                    'Tu impacto se expande'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center text-foreground font-medium">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{item}</span>
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
            ¿Listo para transformar tu comunidad?
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

// src/components/sections/NuestraEsencia.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Sparkles, Heart, Users, Zap, Eye, Target,
  Award, TrendingUp, Star, Lightbulb, Code, Globe
} from "lucide-react";

const Historia = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "intro", "beneficios", "diferencia", "runa"
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
    { id: "intro", label: "Quiénes somos", icon: Sparkles },
    { id: "beneficios", label: "Qué ganas", icon: Award },
    { id: "diferencia", label: "Por qué diferente", icon: Star },
    { id: "runa", label: "Nuestra guía", icon: Code },
  ];

  return (
    <section id="historia" className="relative py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
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
              Nuestra Esencia
            </Badge>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
            Tecnología con alma. Transformación con propósito.
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Wunjo Creations nace para unir dos mundos que rara vez se encuentran:
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {[
                'la tecnología y la emoción',
                'la estrategia y el alma',
                'los datos y la intuición',
                'la mente y la energía'
              ].map((text, idx) => (
                <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/60 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-5 flex items-center justify-center">
                    <p className="text-foreground font-medium">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6 pt-8 text-lg">
              <p className="text-foreground font-semibold">No somos una agencia.</p>
              <p className="text-primary font-bold text-2xl">Somos un espacio de creación consciente.</p>
            </div>

            <div className="space-y-4 pt-6">
              <p className="text-foreground">Creamos experiencias digitales que se sienten.</p>
              <p className="text-foreground">Que acompañan.</p>
              <p className="text-foreground">Que transforman.</p>
              <p className="text-primary font-semibold text-xl">Que despiertan.</p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-accent" />
          <Award className="w-6 h-6 text-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
        </div>

        {/* LO QUE GANAS COMO CREADOR */}
        <div id="beneficios" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Tus beneficios</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Lo que ganas como creador
            </h3>
            <p className="text-lg text-muted-foreground">
              La Esencia Wunjo te permite elevar tu marca y tu impacto:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, text: "más coherencia en tu mensaje" },
              { icon: Sparkles, text: "más magia en tu presencia digital" },
              { icon: Eye, text: "más claridad en tu propósito" },
              { icon: Heart, text: "más conexión con tu comunidad" },
              { icon: Award, text: "más excelencia en tus procesos" },
              { icon: Star, text: "más diferenciación en tu sector" }
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
                  Tu trabajo deja de ser solo contenido.
                </p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Se convierte en una experiencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-secondary" />
          <Star className="w-6 h-6 text-accent" />
          <div className="h-px flex-1 bg-gradient-to-r from-secondary via-primary to-transparent" />
        </div>

        {/* POR QUÉ WUNJO ES DIFERENTE */}
        <div id="diferencia" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Diferenciación</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Por qué Wunjo es diferente
            </h3>
          </div>

          <div className="space-y-6">
            {[
              { title: 'Porque no diseñamos "para llamar la atención".', desc: 'Diseñamos para despertar algo dentro de quien te escucha.' },
              { title: 'Porque no creamos "procesos automáticos".', desc: 'Creamos acompañamientos personalizados.' },
              { title: 'Porque no buscamos volumen.', desc: 'Buscamos impacto real.' },
              { title: 'Porque no solo pensamos en el negocio.', desc: 'Pensamos en las personas que están al otro lado.' },
              { title: 'Porque la tecnología es poderosa…', desc: 'pero solo cuando vibra con propósito.' }
            ].map((item, idx) => (
              <Card key={idx} className="group border-l-4 border-l-accent hover:shadow-xl hover:-translate-x-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 space-y-2">
                  <p className="text-foreground font-semibold text-lg">{item.title}</p>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <Code className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* NUESTRA GUÍA: LA RUNA WUNJO */}
        <div id="runa" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/30">
              <Code className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Nuestra energía</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              Nuestra guía: la runa Wunjo (ᚹ)
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La runa de la alegría profunda, la realización y la auténtica conexión.
            </p>
          </div>

          <Card className="group relative overflow-hidden border-2 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-6 text-center">
              <div className="text-8xl font-bold text-primary">ᚹ</div>
              <div className="space-y-4 text-lg text-foreground">
                <p>Es la energía que nos mueve.</p>
                <p>La energía que damos.</p>
                <p className="text-primary font-semibold text-xl">La energía que integramos en cada experiencia.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="text-center space-y-8 py-16">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 animate-pulse">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold">
            ¿Listo para crear con esencia y propósito?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a la transformación consciente del mundo digital
          </p>
          <Link to="/contacto">
            <Button size="lg" className="group bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-xl">
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Inicia tu experiencia Wunjo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Historia;

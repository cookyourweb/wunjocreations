// src/components/sections/NuestraEsencia.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import {
  Sparkles, Heart, Target,
  Award, Star, Eye
} from "lucide-react";

const Historia = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "ganas", "diferente", "energia"];
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
    { id: "hero", label: "Nuestra Esencia", icon: Sparkles },
    { id: "ganas", label: "Ganas", icon: Award },
    { id: "diferente", label: "Diferente", icon: Star },
    { id: "energia", label: "Energía", icon: Heart },
  ];

  return (
    <section id="historia" className="relative py-32 px-6 pb-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* HERO */}
        <div id="hero" className="text-center space-y-10 scroll-mt-32">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-[1.2]">
            Tecnología con alma.<br />
            Transformación con propósito.
          </h1>
        </div>

        {/* Menú de navegación sticky */}
        <nav className="sticky top-20 z-40 -mx-6 px-6 py-4 bg-background/95 backdrop-blur-lg border-b border-border/50">
          <div className="flex gap-1 lg:gap-2 overflow-x-auto lg:overflow-x-visible justify-center max-w-5xl mx-auto">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative flex items-center justify-center gap-2 px-2 lg:px-3 py-2 rounded-xl transition-all duration-300 flex-shrink-0 ${
                  activeSection === id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground scale-105"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
                title={label}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                <span className="hidden lg:inline text-xs font-medium whitespace-nowrap">{label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="text-center space-y-10 scroll-mt-24">

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Wunjo une:
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {[
                'tecnología + emoción',
                'estrategia + alma',
                'datos + intuición',
                'mente + energía'
              ].map((text, idx) => (
                <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/60 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-5 flex items-center justify-center">
                    <p className="text-foreground font-medium">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6 pt-8">
              <p className="text-foreground font-semibold text-lg">No somos una agencia.</p>
              <p className="text-2xl text-primary font-bold">Somos un espacio de creación consciente.</p>
            </div>

            <div className="space-y-4 pt-6">
              <p className="text-lg text-foreground">Creamos experiencias que:</p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-lg text-primary font-medium">
                <span>✨ acompañan</span>
                <span>✨ transforman</span>
                <span>✨ despiertan</span>
              </div>
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
        <div id="ganas" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Lo que ganas como creador</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Target, text: "✔ más coherencia" },
              { icon: Sparkles, text: "✔ más magia" },
              { icon: Eye, text: "✔ más claridad" },
              { icon: Heart, text: "✔ más conexión" },
              { icon: Award, text: "✔ más excelencia" },
              { icon: Star, text: "✔ más diferenciación" }
            ].map((item, idx) => (
              <Card key={idx} className="group bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/60 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
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
                  Tu trabajo deja de ser contenido.
                </p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Se convierte en experiencia.
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
        <div id="diferente" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Por qué Wunjo es diferente</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { text: 'No diseñamos para llamar la atención.' },
              { text: 'Diseñamos para despertar transformación.' },
              { text: 'No hacemos automatizaciones.' },
              { text: 'Creamos acompañamientos.' },
              { text: 'No pensamos en volumen.' },
              { text: 'Pensamos en impacto real.' }
            ].map((item, idx) => (
              <Card key={idx} className="group border-l-4 border-l-accent hover:shadow-lg hover:-translate-x-1 transition-all duration-300">
                <CardContent className="p-5">
                  <p className="text-foreground font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary to-primary" />
          <Sparkles className="w-6 h-6 text-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary via-accent to-transparent" />
        </div>

        {/* NUESTRA ENERGÍA */}
        <div id="energia" className="space-y-10 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-secondary font-semibold">Nuestra energía</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">
              La runa Wunjo (ᚹ)
            </h3>
            <p className="text-xl text-muted-foreground">
              La energía de la alegría profunda y la conexión auténtica.
            </p>
          </div>

          <Card className="group relative overflow-hidden border-2 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 animate-pulse" />
            <CardContent className="relative p-10 space-y-6 text-center">
              <div className="text-8xl font-bold text-primary">ᚹ</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Historia;

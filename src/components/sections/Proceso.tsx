// src/components/sections/Proceso.tsx
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { X, Check, Moon, Sun } from "lucide-react";

const Proceso = () => {
  const [activeSection, setActiveSection] = useState("antes");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["antes", "despues"];
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
    { id: "antes",   label: "Antes",   icon: Moon },
    { id: "despues", label: "Después", icon: Sun },
  ];

  return (
    <section className="relative pb-32 lg:pb-24 px-6 bg-gradient-to-b from-background via-[hsl(25,12%,10%)] to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[hsl(38,75%,55%)] opacity-[0.06] blur-[120px] rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-[hsl(340,45%,55%)] opacity-[0.05] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">

        {/* INTRO — diferente a ProcessSection */}
        <div className="text-center space-y-4 pt-16 max-w-3xl mx-auto">
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            El antes y el después
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Tu método ya es bueno.{" "}
            <span className="text-gradient-warm">El problema no es el contenido.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            El problema es que cada alumno es distinto — y ningún sistema genérico puede acompañarlos a todos. Hasta ahora.
          </p>
        </div>

        {/* Nav sticky */}
        <nav className="hidden lg:block sticky top-20 z-40 -mx-6 px-6 py-4 bg-background/95 backdrop-blur-lg border-b border-border/30">
          <div className="flex gap-2 justify-center max-w-5xl mx-auto">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                  activeSection === id
                    ? "bg-gradient-warm text-[hsl(25,15%,8%)] scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* ANTES DE WUNJO */}
        <div id="antes" className="space-y-8 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(340,45%,55%,0.1)] border border-[hsl(340,45%,55%,0.3)]">
              <Moon className="w-4 h-4 text-[hsl(340,45%,55%)]" />
              <span className="font-body text-sm font-semibold text-[hsl(340,45%,55%)]">Sin Wunjo</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              'Alumnos que desaparecen sin avisar',
              'Dudas que se repiten una y otra vez',
              'Motivación que se cae a mitad del programa',
              'Tú poniendo energía sin ver resultados proporcionales',
              'Sin datos reales de quién avanza y quién no',
              'Crecimiento que toca techo por falta de tiempo',
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl border-l-4 border-l-[hsl(340,45%,55%)] bg-[hsl(340,45%,55%,0.05)] hover:bg-[hsl(340,45%,55%,0.08)] transition-colors"
              >
                <X className="w-4 h-4 text-[hsl(340,45%,55%)] flex-shrink-0" />
                <p className="font-body text-foreground font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xl mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[hsl(38,75%,55%,0.4)]" />
          <Sun className="w-5 h-5 text-[hsl(38,75%,55%)] opacity-70" />
          <div className="h-px flex-1 bg-gradient-to-r from-[hsl(38,75%,55%,0.4)] to-transparent" />
        </div>

        {/* DESPUÉS DE WUNJO */}
        <div id="despues" className="space-y-8 max-w-4xl mx-auto scroll-mt-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(38,75%,55%,0.1)] border border-[hsl(38,75%,55%,0.3)]">
              <Sun className="w-4 h-4 text-[hsl(38,75%,55%)]" />
              <span className="font-body text-sm font-semibold text-[hsl(38,75%,55%)]">Con Wunjo</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Cada alumno recibe su propio camino',
              'La IA detecta bloqueos antes de que abandonen',
              'Motivación sostenida durante todo el programa',
              'Tú dedicas energía donde más impactas',
              'Visibilidad real de quién progresa y quién necesita apoyo',
              'Escalas sin multiplicar tus horas',
              'Más alumnos que terminan y recomiendan',
              'Una comunidad que genera negocio por sí sola',
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(25,12%,11%)] border border-[hsl(38,15%,18%)] hover:border-[hsl(38,75%,55%,0.3)] transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[hsl(38,75%,55%,0.1)] flex-shrink-0">
                  <Check className="w-4 h-4 text-[hsl(38,75%,55%)]" />
                </div>
                <p className="font-body font-medium text-foreground">{text}</p>
              </div>
            ))}
          </div>

          <Card className="relative overflow-hidden border border-[hsl(38,75%,55%,0.4)] bg-[hsl(25,12%,10%)] max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,75%,55%,0.08)] to-transparent pointer-events-none" />
            <CardContent className="relative p-8 text-center space-y-3">
              <p className="font-body text-lg text-muted-foreground">
                Tu contenido ya era bueno.
              </p>
              <p className="font-display text-3xl font-bold text-gradient-warm">
                Wunjo lo hace transformador.
              </p>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default Proceso;

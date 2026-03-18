// src/components/Hero.tsx
import heroBg from "@/assets/hero-bg.jpg";
import logoWunjo1 from "@/assets/logoWunjo1.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Glow central animado */}
      <div className="absolute inset-0 bg-glow animate-glow-pulse pointer-events-none" />

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-6 py-20 pt-32">

        {/* Badge supratítulo */}
        <p className="animate-fade-in text-xs md:text-sm tracking-[0.3em] uppercase font-body font-medium text-[hsl(38,75%,55%)]">
          Experiencias con IA para Creadores
        </p>

        {/* Titular principal */}
        <h1 className="animate-slide-up font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          <span className="text-foreground">Tu comunidad avanza, </span>
          <span className="text-gradient-warm italic">se transforma</span>
          <br />
          <span className="text-foreground">y se queda contigo</span>
        </h1>

        {/* Subtítulo */}
        <p className="animate-fade-in-delayed max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed">
          Convertimos tu curso, mentoría o contenido en una experiencia
          personalizada con IA — adaptada al ritmo, mentalidad y bloqueos
          de cada miembro.
        </p>

        {/* Prueba social rápida — TuVueltaAlSol */}
        <div className="animate-fade-in-delayed flex items-center justify-center gap-2 text-sm text-muted-foreground font-body">
          <span className="w-5 h-px bg-[hsl(38,75%,55%)]" />
          <span>
            Como{" "}
            <a
              href="https://tuvueltaalsol.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(38,75%,55%)] hover:text-[hsl(38,80%,70%)] transition-colors font-medium underline-offset-2 hover:underline"
            >
              TuVueltaAlSol
            </a>
            {" "}· 365 días de acompañamiento personalizado
          </span>
          <span className="w-5 h-px bg-[hsl(38,75%,55%)]" />
        </div>

        {/* CTAs */}
        <div className="animate-fade-in-delayed flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/contacto">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full bg-gradient-warm px-8 py-6 font-body font-semibold text-[hsl(25,15%,8%)] shadow-warm hover:opacity-90 hover:scale-105 transition-all duration-300 border-0"
            >
              👉 Inicia tu experiencia Wunjo
            </Button>
          </Link>
          <Link to="/para-creadores">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border border-[hsl(38,75%,55%,0.4)] px-8 py-6 font-body font-medium text-[hsl(38,75%,55%)] hover:border-[hsl(38,75%,55%)] hover:bg-[hsl(38,75%,55%,0.05)] transition-all duration-300 bg-transparent"
            >
              Descubre cómo
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;

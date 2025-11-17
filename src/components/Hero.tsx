// src/components/Hero.tsx
// src/components/Hero.tsx
import logoWunjo1 from "@/assets/logoWunjo1.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 blur-3xl scale-150 animate-pulse" />
          <img 
            src={logoWunjo1} 
            alt="Wunjo Creations Logo" 
            className="w-[1152px] h-auto mx-auto relative z-10 drop-shadow-[0_0_50px_hsl(var(--primary)/0.5)]"
          />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
          Transformamos la experiencia de tu comunidad.<br />
          Y liberamos la tuya.
        </h1>

        <a href="#inicio" className="block text-center no-underline">
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Acompañamiento personalizado con IA que guía a cada persona de tu comunidad<br />
            mientras tú recuperas tiempo, energía y foco creativo.
          </p>
        </a>

        <div className="pt-8">
          <Button size="lg" onClick={() => scrollToSection('colabora')}>
            Quiero una experiencia para mi comunidad
          </Button>
        </div>
        
        <div className="pt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

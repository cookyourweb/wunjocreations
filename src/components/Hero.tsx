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
        
        <h1 className="font-display text-4xl md:text-6xl font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-tight">
          La experiencia que hace que tu comunidad avance, se transforme… y se quede contigo.
        </h1>

        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Has construido algo valioso: una audiencia que te escucha, aprende de ti y quiere cambiar su vida con tu contenido.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Pero cada persona es distinta. Unos avanzan. Otros se bloquean. Otros se desmotivan. Y ahí es donde tu negocio pierde fuerza sin que te des cuenta.
          </p>

          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
            Con IA, convertimos tu curso, mentoría o contenido en una experiencia personalizada para cada miembro de tu comunidad: adaptada a su ritmo, su mentalidad, sus fortalezas y sus bloqueos.
          </p>

          <div className="space-y-3 pt-4">
            <p className="text-lg text-foreground font-light leading-relaxed">
              🌿 Así tu comunidad vive tu transformación como si fuera hecha para ellos.
            </p>
            <p className="text-lg text-foreground font-light leading-relaxed">
              ✨ Y tú conviertes más alumnos en casos de éxito, clientes recurrentes y embajadores de tu marca.
            </p>
          </div>

          <p className="text-xl text-foreground font-semibold pt-4">
            No es solo acompañamiento. Es estrategia para escalar tu impacto y tu negocio.
          </p>
        </div>

        <div className="pt-8">
          <Button size="lg" onClick={() => scrollToSection('colabora')}>
            👉 Inicia tu experiencia Wunjo
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

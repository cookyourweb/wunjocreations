// src/components/Hero.tsx
import logoWunjo1 from "@/assets/logoWunjo1.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="inline-block mb-12 relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-[100px] scale-150" />
          <img
            src={logoWunjo1}
            alt="Wunjo Creations Logo"
            className="w-[1152px] h-auto mx-auto relative z-10 drop-shadow-[0_0_80px_hsl(var(--primary)/0.3)]"
          />
        </div>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight leading-[1.2] animate-slide-up">
          La experiencia que hace que tu comunidad avance, se transforme… y se quede contigo.
        </h1>

        <div className="space-y-6 max-w-4xl mx-auto animate-fade-in-delayed">
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Has construido algo valioso: una audiencia que te escucha, aprende de ti y quiere cambiar su vida con tu contenido.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Pero cada persona es distinta. Unos avanzan. Otros se bloquean. Otros se desmotivan. Y ahí es donde tu negocio pierde fuerza sin que te des cuenta.
          </p>

          <div className="pt-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border border-primary/30">
              <span className="text-primary font-bold">🤖 Powered by IA</span>
            </div>
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              Con Inteligencia Artificial, convertimos tu curso, mentoría o contenido en una experiencia personalizada para cada miembro de tu comunidad: adaptada a su ritmo, su mentalidad, sus fortalezas y sus bloqueos.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
              🌿 Así tu comunidad vive tu transformación como si fuera creada para ellos.
            </p>
            <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
              ✨ Y tú conviertes más alumnos en casos de éxito, clientes recurrentes y embajadores de tu marca.
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground font-bold pt-6">
            No es solo acompañamiento. Es estrategia para escalar tu impacto y tu negocio.
          </p>
        </div>

        <div className="pt-12 animate-fade-in-delayed">
          <Link to="/contacto">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              👉 Inicia tu experiencia Wunjo
            </Button>
          </Link>
        </div>

        <div className="pt-12">
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

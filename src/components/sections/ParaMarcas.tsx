// src/components/sections/ParaMarcas.tsx
// src/components/sections/ParaMarcas.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ParaMarcas = () => {
  const features = [
    {
      title: "Diseño de experiencias",
      description: "Creamos la estructura emocional y simbólica."
    },
    {
      title: "Licencia y personalización",
      description: "Adaptamos la experiencia a tu marca."
    },
    {
      title: "Implementación guiada",
      description: "Te acompañamos paso a paso para ofrecerla."
    }
  ];

  return (
    <section id="para-marcas" className="py-32 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Experiencias digitales con alma.
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Wunjo Creations está pensada para coaches, creadoras e influencers<br />
              que ya tienen una comunidad, pero buscan coherencia, autenticidad y propósito.
            </p>
            
            <p className="text-foreground font-normal">
              Creamos espacios digitales que elevan tu mensaje y transforman cómo se siente tu marca.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-8 space-y-4">
              <div className="text-3xl">💫</div>
              <h3 className="font-display text-xl text-foreground">Webs con alma</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Diseño consciente, storytelling emocional y coherencia energética.
                Donde tu mensaje deja de ser información y se convierte en experiencia.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-8 space-y-4">
              <div className="text-3xl">🌙</div>
              <h3 className="font-display text-xl text-foreground">Apps experienciales</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transformamos tus programas, rituales o acompañamientos
                en vivencias digitales inmersivas y sostenibles.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur">
            <CardContent className="p-8 space-y-4">
              <div className="text-3xl">⚡</div>
              <h3 className="font-display text-xl text-foreground">Ecosistemas digitales</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Integramos tecnología, automatización y diseño
                para marcas que desean expandirse con propósito y claridad.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center py-8">
          <p className="text-foreground font-light italic text-lg">
            Tu energía merece un universo digital propio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

// src/components/sections/Manifiesto.tsx
// src/components/sections/Manifiesto.tsx
import { Card, CardContent } from "@/components/ui/card";

const Manifiesto = () => {
  const pillars = [
    {
      icon: "✨",
      title: "IA",
      description: "Personalización inteligente para cada usuario"
    },
    {
      icon: "🎨",
      title: "Diseño consciente",
      description: "Estética que transmite propósito y coherencia"
    },
    {
      icon: "🧠",
      title: "Psicología",
      description: "Acompañamiento basado en comportamiento humano"
    },
    {
      icon: "💚",
      title: "Acompañamiento real",
      description: "Guía emocional y práctica en cada paso"
    }
  ];

  return (
    <section id="manifiesto" className="py-32 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Qué es Wunjo Creations
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Wunjo Creations es un estudio que transforma el contenido, la energía y la metodología de coaches, creadoras e influencers en <span className="text-foreground font-medium">experiencias digitales personalizadas</span> para su comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{pillar.icon}</span>
                  <h3 className="font-display text-xl text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            El objetivo es convertir la presencia digital de una marca en un viaje emocional y transformador que realmente lleve a sus seguidores al resultado prometido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifiesto;

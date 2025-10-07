// src/components/sections/Testimonios.tsx
// src/components/sections/Testimonios.tsx
import { Card, CardContent } from "@/components/ui/card";

const Testimonios = () => {
  const testimonials = [
    {
      quote: "TuVueltaAlSol me ayudó a reconectar conmigo y dar sentido a mi camino. Fue más que una experiencia… fue un renacer.",
      author: "Ana M.",
      role: "participante"
    },
    {
      quote: "Wunjo Creations nos ayudó a transformar nuestro retiro en una experiencia profundamente significativa para todos los asistentes.",
      author: "Luz Interior",
      role: "centro de bienestar"
    }
  ];

  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight text-center">
            Disponible
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            <a href="https://tuvueltaalsol.es" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <h3 className="font-semibold text-2xl mb-2">TuVueltaAlSol</h3>
              <p className="text-muted-foreground font-light">
                Tu año extraordinario comienza aquí. Descubre cómo eres y qué eventos astrológicos están ocurriendo para potenciar tu vida y resolver desafíos. Una experiencia personalizada de motivación y autoconocimiento que te acompaña todo el año.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight text-center">
            Voces que ya vivieron la energía Wunjo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur">
                <CardContent className="p-8 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-foreground font-medium">— {testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonios;

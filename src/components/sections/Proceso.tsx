// src/components/sections/Proceso.tsx
// src/components/sections/Proceso.tsx
import { Button } from "@/components/ui/button";

const Proceso = () => {
  const steps = [
    {
      number: "1",
      title: "Explora las experiencias Wunjo",
      description: "Descubre nuestras herramientas y vivencias de transformación."
    },
    {
      number: "2",
      title: "Elige o co-crea tu experiencia",
      description: "Personalizamos el contenido, el simbolismo y los elementos visuales para alinearlos con tu propósito."
    },
    {
      number: "3",
      title: "Ofrece transformación real",
      description: "Lleva una experiencia con alma a tus clientes, equipo o comunidad."
    }
  ];

  return (
    <section id="proceso" className="py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight text-center">
          El proceso Wunjo: de inspiración a transformación
        </h2>
        
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-display text-xl">{step.number}</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" onClick={() => document.getElementById('colabora')?.scrollIntoView({behavior: 'smooth'})}>
            Quiero que me cuentes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Proceso;

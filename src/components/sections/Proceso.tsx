// src/components/sections/Proceso.tsx
// src/components/sections/Proceso.tsx
import { Button } from "@/components/ui/button";

const Proceso = () => {
  const steps = [
    {
      number: "1",
      title: "Descubrimiento",
      description: "Análisis profundo de tu marca, valores, promesa y comunidad. Entendemos qué necesita tu audiencia para transformarse."
    },
    {
      number: "2",
      title: "Diseño",
      description: "Convertimos tu enseñanza en una experiencia viva que combina acción y mentalidad. Diseñamos el viaje personalizado."
    },
    {
      number: "3",
      title: "Creación",
      description: "Implementación de IA, rutas personalizadas y ecosistema digital. Construimos el sistema que acompaña a cada persona."
    },
    {
      number: "4",
      title: "Activación",
      description: "Lanzamiento, seguimiento y medición de resultados. Tu comunidad empieza a transformarse mientras tú recuperas tu tiempo."
    }
  ];

  return (
    <section id="proceso" className="py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight text-center">
          Nuestro Proceso Wunjo
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          Tu proceso se divide en 4 fases para crear experiencias que realmente transforman:
        </p>

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
            Quiero crear una experiencia para mi comunidad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Proceso;

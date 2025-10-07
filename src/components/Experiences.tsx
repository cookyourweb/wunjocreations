// src/components/Experiences.tsx
// src/components/Experiences.tsx
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
           La Experiencia Wunjo — Nuestro viaje de creación consciente.
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Cada proyecto que nace en Wunjo es una experiencia viva.
Un proceso de transformación donde tu energía se convierte en presencia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          <ExperienceCard
            title="tuvueltaalsol"
            description="Tu año extraordinario comienza aquí. Descubre cómo eres y qué eventos astrológicos están ocurriendo para potenciar tu vida y resolver desafíos. Una experiencia personalizada de motivación y autoconocimiento que te acompaña todo el año."
            status="Disponible"
            link="https://tuvueltaalsol.com"
          />
          
          <div className="text-center py-12">
            <p className="text-muted-foreground font-light italic">
              Próximas experiencias en desarrollo...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

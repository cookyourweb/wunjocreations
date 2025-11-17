// src/components/Experiences.tsx
// src/components/Experiences.tsx
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Experiencias Wunjo
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
            Diseñamos un acompañamiento personalizado, automatizado y emocional<br />
            que guía a cada seguidor paso a paso hacia el objetivo del creador.
          </p>
          <div className="text-left max-w-2xl mx-auto mt-8 space-y-3 text-muted-foreground">
            <p>Incluye:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Análisis del alumno (fortalezas, debilidades, bloqueos, mentalidad)</li>
              <li>Ruta personalizada</li>
              <li>Mensajes de mindset</li>
              <li>Tareas y pasos concretos</li>
              <li>Seguimiento en tiempo real</li>
              <li>Detección automática de talento</li>
              <li>Motivación continua</li>
            </ul>
            <p className="pt-4 italic">Todo con IA + diseño consciente + psicología.</p>
          </div>
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

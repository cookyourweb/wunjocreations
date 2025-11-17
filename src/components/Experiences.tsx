// src/components/Experiences.tsx
// src/components/Experiences.tsx
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section id="experiences" className="py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Experiencias Wunjo
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Diseñamos un acompañamiento personalizado, automatizado y emocional<br />
            que guía a cada seguidor paso a paso hacia el objetivo del creador.
          </p>

          <div className="max-w-2xl mx-auto mt-8 space-y-4">
            <p className="text-foreground font-normal text-lg">Incluye:</p>
            <div className="space-y-3 text-muted-foreground font-light">
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Análisis del alumno (fortalezas, debilidades, bloqueos, mentalidad)</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Ruta personalizada</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Mensajes de mindset</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Tareas y pasos concretos</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Seguimiento en tiempo real</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Detección automática de talento</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary text-xl">•</span>
                <p>Motivación continua</p>
              </div>
            </div>
            <p className="pt-4 italic text-foreground font-light">Todo con IA + diseño consciente + psicología.</p>
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

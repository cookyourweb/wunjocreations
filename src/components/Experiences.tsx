// src/components/Experiences.tsx
// src/components/Experiences.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Experiences = () => {
  return (
    <section id="experiences" className="py-32 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Experiencias Wunjo
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Diseñamos un acompañamiento personalizado, automatizado y emocional que guía a cada seguidor paso a paso hacia el objetivo del creador.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-foreground font-normal text-lg">Qué incluye:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Análisis del alumno (fortalezas, debilidades, bloqueos, mentalidad)</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Ruta personalizada</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Mensajes de mindset</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Tareas y pasos concretos</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Seguimiento en tiempo real</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Detección automática de talento</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20 md:col-span-2">
                <CardContent className="p-6 flex items-center gap-3">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-muted-foreground text-sm">Motivación continua</p>
                </CardContent>
              </Card>
            </div>

            <p className="pt-4 italic text-foreground font-light">
              Todo con IA + diseño consciente + psicología.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur border-primary/30">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <h3 className="font-display text-3xl text-foreground">
                  Última Creación Disponible
                </h3>
                <h4 className="font-display text-2xl text-primary">
                  Tu Vuelta al Sol
                </h4>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Tu año extraordinario comienza aquí. Descubre cómo eres y qué eventos astrológicos están ocurriendo para potenciar tu vida y resolver desafíos. Una experiencia personalizada de motivación y autoconocimiento que te acompaña todo el año.
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open('https://tuvueltaalsol.com', '_blank')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Visitar TuVueltaAlSol.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center py-8">
          <p className="text-muted-foreground font-light italic">
            Próximas experiencias en desarrollo...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

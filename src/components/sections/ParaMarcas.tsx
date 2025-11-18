// src/components/sections/ParaMarcas.tsx
// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";

const ParaMarcas = () => {
  return (
    <section id="para-marcas" className="py-32 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Para Creadores e Influencers
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Eres coach, creadora de contenido o influencer. Has construido una comunidad que confía en ti. Tienes un método que funciona y quieres que realmente transformen su vida. Pero...
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur border-destructive/30">
            <CardContent className="p-8 space-y-4">
              <h3 className="font-display text-2xl text-foreground">El Desafío</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl mt-1">•</span>
                  <p>Tus alumnos se pierden y abandonan</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl mt-1">•</span>
                  <p>No avanzan ni aplican lo aprendido</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl mt-1">•</span>
                  <p>No cambian su mentalidad</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive text-xl mt-1">•</span>
                  <p>No llegan al resultado que prometes</p>
                </div>
              </div>
              <p className="text-foreground font-medium pt-4">
                Acompañar a cientos de alumnos personalmente es imposible.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardContent className="p-8 space-y-4">
              <h3 className="font-display text-2xl text-foreground">La Solución Wunjo</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p>Transformación real del contenido</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p>Más resultados → más testimonios → más ventas</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p>Menos abandono, más engagement</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <p>Acompañamiento automatizado que funciona solo</p>
                </div>
              </div>
              <p className="text-foreground font-medium pt-4">
                Convertimos tu promesa en un camino alcanzable.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            Nuestra solución elimina el desgaste del acompañamiento manual y multiplica tus resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

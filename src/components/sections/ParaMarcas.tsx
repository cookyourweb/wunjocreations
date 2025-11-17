// src/components/sections/ParaMarcas.tsx
// src/components/sections/ParaMarcas.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ParaMarcas = () => {
  return (
    <section id="para-marcas" className="py-32 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Para Marcas Conscientes
          </h2>
        </div>

        {/* El Problema */}
        <div className="space-y-6">
          <h3 className="font-display text-3xl text-foreground text-center">
            El problema que resolvemos
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed text-center max-w-3xl mx-auto">
            Los creadores e influencers enseñan contenido, pero sus comunidades:
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-muted-foreground">❌ Se pierden y abandonan</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-muted-foreground">❌ No avanzan ni aplican</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-muted-foreground">❌ No cambian la mentalidad</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <p className="text-muted-foreground">❌ No llegan al resultado final</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-foreground font-medium text-center pt-4">
            Además, acompañar a cientos de alumnos es imposible para un creador.<br />
            Tu solución elimina ese desgaste y aumenta resultados.
          </p>
        </div>

        {/* Qué Consiguen */}
        <div className="space-y-6">
          <h3 className="font-display text-3xl text-foreground text-center">
            Qué consiguen las marcas al trabajar contigo
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl">✓</div>
                <p className="text-foreground font-medium">Una experiencia que convierte su contenido en transformación real</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl">✓</div>
                <p className="text-foreground font-medium">Más resultados → más testimonios → más ventas</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl">✓</div>
                <p className="text-foreground font-medium">Menos abandono y más engagement</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl">✓</div>
                <p className="text-foreground font-medium">Alumnos que avanzan con claridad, mentalidad y foco</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl">✓</div>
                <p className="text-foreground font-medium">Un sistema de acompañamiento automatizado que funciona solo</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl">✓</div>
                <p className="text-foreground font-medium">Pipeline de profesionales listos para trabajar con ellos (si buscan formar talento)</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center py-8">
          <p className="text-foreground font-light italic text-xl">
            Convertimos su promesa en un camino alcanzable y personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

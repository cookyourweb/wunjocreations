// src/components/sections/ParaMarcas.tsx
// src/components/sections/ParaMarcas.tsx
const ParaMarcas = () => {
  return (
    <section id="para-marcas" className="py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Para Marcas Conscientes
          </h2>
        </div>

        {/* El Problema */}
        <div className="space-y-8">
          <h3 className="font-display text-3xl text-foreground text-center">
            El problema que resolvemos
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed text-center max-w-3xl mx-auto">
            Los creadores e influencers enseñan contenido, pero sus comunidades:
          </p>

          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="text-accent text-xl">•</span>
              <p>Se pierden y abandonan</p>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="text-accent text-xl">•</span>
              <p>No avanzan ni aplican</p>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="text-accent text-xl">•</span>
              <p>No cambian la mentalidad</p>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="text-accent text-xl">•</span>
              <p>No llegan al resultado final</p>
            </div>
          </div>

          <p className="text-lg text-foreground font-medium text-center pt-6 max-w-2xl mx-auto">
            Además, acompañar a cientos de alumnos es imposible para un creador.<br />
            Nuestra solución elimina ese desgaste y aumenta resultados.
          </p>
        </div>

        {/* Qué Consiguen */}
        <div className="space-y-8">
          <h3 className="font-display text-3xl text-foreground text-center">
            Qué consiguen las marcas al trabajar con Wunjo
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl mt-1">✓</span>
              <p className="text-foreground font-light text-lg">Una experiencia que convierte su contenido en transformación real</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl mt-1">✓</span>
              <p className="text-foreground font-light text-lg">Más resultados → más testimonios → más ventas</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl mt-1">✓</span>
              <p className="text-foreground font-light text-lg">Menos abandono y más engagement</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl mt-1">✓</span>
              <p className="text-foreground font-light text-lg">Alumnos que avanzan con claridad, mentalidad y foco</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl mt-1">✓</span>
              <p className="text-foreground font-light text-lg">Un sistema de acompañamiento automatizado que funciona solo</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl mt-1">✓</span>
              <p className="text-foreground font-light text-lg">Pipeline de profesionales listos para trabajar con ellos (si buscan formar talento)</p>
            </div>
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

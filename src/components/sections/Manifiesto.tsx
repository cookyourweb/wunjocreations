// src/components/sections/Manifiesto.tsx
// src/components/sections/Manifiesto.tsx
const Manifiesto = () => {
  return (
    <section id="manifiesto" className="py-32 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
          Qué es Wunjo Creations
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
          <p className="text-xl">
            Wunjo Creations es un estudio que transforma el contenido, la energía y la metodología<br />
            de coaches, creadoras e influencers en <span className="text-foreground font-medium">experiencias digitales personalizadas</span><br />
            para su comunidad.
          </p>

          <p className="text-foreground font-normal text-xl">
            Integrando:
          </p>

          <div className="flex justify-center gap-8 text-lg">
            <span className="text-foreground">✨ IA</span>
            <span className="text-foreground">🎨 Diseño consciente</span>
            <span className="text-foreground">🧠 Psicología</span>
            <span className="text-foreground">💚 Acompañamiento real</span>
          </div>

          <p className="text-xl text-foreground font-medium pt-6">
            El objetivo es convertir la presencia digital de una marca<br />
            en un viaje emocional y transformador que realmente lleve<br />
            a sus seguidores al resultado prometido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifiesto;

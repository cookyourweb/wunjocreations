// src/components/About.tsx
// src/components/About.tsx
const About = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
          Psicología + IA al servicio de tu comunidad
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
          <p>
            Wunjo Creations nació para ayudar a creadores a transformar sus comunidades
            en experiencias personalizadas que acompañan, retienen y escalan.
          </p>
          
          <p>
            Cada proyecto está diseñado con propósito: ayudarte a descubrir, 
            potenciar y celebrar tu mejor versión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

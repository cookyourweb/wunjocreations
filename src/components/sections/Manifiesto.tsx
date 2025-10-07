// src/components/sections/Manifiesto.tsx
// src/components/sections/Manifiesto.tsx
const Manifiesto = () => {
  return (
    <section id="manifiesto" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
          Nuestro propósito
        </h2>
        
        <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed italic">
          <p>
            Creemos que la felicidad no se persigue,
            <br />
            se crea, se vive, se comparte.
          </p>
          
          <p>
            Creemos en experiencias que transforman,
            <br />
            no por lo que enseñan, sino por lo que despiertan.
          </p>
          
          <p>
            Creemos que cada persona, cada marca,
            <br />
            tiene dentro la chispa de la runa Wunjo.
          </p>
          
          <p className="text-foreground font-normal text-2xl">
            Nuestra misión es ayudar a encenderla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifiesto;

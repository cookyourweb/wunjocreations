// src/components/sections/ParaMarcas.tsx
// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ParaMarcas = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="para-marcas" className="py-32 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Título */}
        <div className="text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Para Creadores que quieren elevar su comunidad, su impacto y su negocio
          </h2>
        </div>

        {/* El Problema */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground font-light leading-relaxed text-center">
            Tú ya tienes lo más difícil: una comunidad que te escucha, te admira y quiere transformarse contigo. Pero hay algo que ningún creador ve… hasta que lo siente:
          </p>

          <div className="space-y-3 text-lg text-foreground">
            <p>👉 Cada persona avanza de forma diferente.</p>
            <p>👉 Muchos se bloquean, se desmotivan o se pierden.</p>
            <p>👉 Y tú no puedes acompañarlos uno a uno.</p>
          </div>

          <p className="text-lg text-muted-foreground font-light leading-relaxed text-center pt-4">
            Cuando esto ocurre, tu contenido es increíble… pero los resultados se diluyen, tu comunidad se dispersa y la experiencia pierde fuerza.
          </p>

          <p className="text-xl text-primary font-semibold text-center pt-6">
            Aquí es donde nace Wunjo.
          </p>
        </div>

        {/* La Solución */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <h3 className="font-display text-3xl text-foreground text-center">
            Creamos experiencias personalizadas con IA para que tu comunidad avance, se transforme… y se quede contigo.
          </h3>

          <p className="text-lg text-muted-foreground font-light leading-relaxed text-center">
            Analizamos tu curso, tu mentoría o tu contenido y lo convertimos en un acompañamiento vivo que adapta cada paso a cada persona:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {['su nivel', 'su ritmo', 'su mentalidad', 'sus fortalezas', 'sus bloqueos', 'su motivación', 'su propósito'].map((item, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <span className="text-primary text-xl">•</span>
                  <p className="text-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-lg text-foreground font-medium text-center pt-4">
            La experiencia se ajusta automáticamente para que nadie se quede atrás, y los resultados se multiplican.
          </p>
        </div>

        {/* Beneficios para Creador */}
        <div className="space-y-8">
          <h3 className="font-display text-3xl text-foreground text-center">
            💫 ¿Qué ganas como creador?
          </h3>
          <p className="text-xl text-muted-foreground text-center">Mucho más de lo que imaginas.</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display text-xl text-primary">✓ Más resultados para tu comunidad</h4>
                <p className="text-muted-foreground text-sm">Porque cada persona recibe lo que necesita para avanzar de verdad.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display text-xl text-primary">✓ Más retención</h4>
                <p className="text-muted-foreground text-sm">Los alumnos dejan de abandonar porque se sienten guiados y acompañados. Tu comunidad se mantiene viva.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display text-xl text-primary">✓ Más ventas</h4>
                <p className="text-muted-foreground text-sm">Más transformación = más testimonios = más conversión.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display text-xl text-primary">✓ Más fidelidad</h4>
                <p className="text-muted-foreground text-sm">Cuando un alumno siente que "tu contenido fue creado para él", se queda contigo… y vuelve.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display text-xl text-primary">✓ Más autoridad</h4>
                <p className="text-muted-foreground text-sm">Tu marca se percibe como innovadora, avanzada, con estándares altos.</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-display text-xl text-primary">✓ Más sostenibilidad</h4>
                <p className="text-muted-foreground text-sm">La experiencia funciona sola. No tienes que estar encima de cada alumno.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur border-primary/30 max-w-3xl mx-auto">
            <CardContent className="p-8 space-y-4">
              <h4 className="font-display text-2xl text-foreground text-center">✓ Más negocio</h4>
              <p className="text-muted-foreground text-center">Una comunidad que termina, progresa y se transforma genera:</p>
              <div className="text-foreground space-y-2">
                <p>• más recomendaciones</p>
                <p>• más ventas recurrentes</p>
                <p>• más comunidad activa</p>
                <p>• más ingresos totales</p>
                <p className="font-semibold pt-2">• un negocio estable y escalable</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beneficios para la Comunidad */}
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <h3 className="font-display text-3xl text-foreground">
            🧠 ¿Y tu comunidad qué gana?
          </h3>
          <p className="text-2xl text-primary font-semibold">Todo.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {['Un camino claro', 'Una guía personalizada', 'Acompañamiento emocional', 'Mentalidad y motivación', 'Progreso real', 'Transformación profunda'].map((item, idx) => (
              <div key={idx} className="text-foreground font-light">
                ✓ {item}
              </div>
            ))}
          </div>

          <p className="text-xl text-foreground font-medium pt-6">
            Tus seguidores no solo "ven tu contenido". Lo viven.
          </p>
        </div>

        {/* IA */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h3 className="font-display text-3xl text-foreground text-center">
            🤖 La magia: IA al servicio de lo humano
          </h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed text-center">
            La IA no sustituye tu conocimiento. Lo amplifica.
          </p>
          <p className="text-lg text-foreground leading-relaxed text-center">
            Analiza a cada persona para que reciba un mensaje, una tarea o un impulso emocional justo en el momento en que lo necesita.
          </p>
        </div>

        {/* Talento */}
        <Card className="bg-card/50 backdrop-blur border-accent/30 max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-6">
            <h3 className="font-display text-2xl text-foreground text-center">
              🔍 Y si tu objetivo es formar talento… aún mejor
            </h3>
            <p className="text-muted-foreground text-center">Wunjo detecta automáticamente:</p>
            <div className="grid md:grid-cols-2 gap-3">
              {['quién tiene potencial', 'quién implementa bien', 'quién destaca', 'quién tiene mentalidad', 'quién cumple tu visión', 'quién podría trabajar contigo'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground font-medium text-center pt-4">
              Transformas a tu comunidad en un ecosistema vivo de talento, alineado con tu misión.
            </p>
          </CardContent>
        </Card>

        {/* Cierre */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <h3 className="font-display text-3xl text-foreground">
            ✨ Esto no es más contenido. Es excelencia digital para tu marca.
          </h3>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p>Tú enseñas.</p>
            <p>Nosotras creamos la experiencia que hace que tu comunidad:</p>
            <p className="text-xl text-foreground font-medium">avance, se transforme, y vuelva.</p>
          </div>

          <div className="space-y-3 text-lg text-foreground font-light pt-6">
            <p>La comunidad gana.</p>
            <p>Tu negocio crece.</p>
            <p>Tu marca evoluciona.</p>
          </div>

          <div className="pt-8">
            <Button size="lg" onClick={() => scrollToSection('colabora')}>
              👉 Inicia tu experiencia Wunjo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

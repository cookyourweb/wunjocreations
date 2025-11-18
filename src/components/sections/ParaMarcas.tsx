// src/components/sections/ParaMarcas.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ParaMarcas = () => {
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
            <Link to="/contacto">
              <Button size="lg">
                👉 Inicia tu experiencia Wunjo
              </Button>
            </Link>
          </div>
        </div>

        {/* Separador visual */}
        <div className="py-16">
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto opacity-40" />
        </div>

        {/* Lo que nadie te cuenta cuando tienes una comunidad */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
              🌑 Lo que nadie te cuenta cuando tienes una comunidad
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Construir una comunidad es un logro enorme.
            </p>
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Pero mantenerla viva, comprometida y avanzando… es otro juego completamente distinto.
            </p>
          </div>

          {/* Las verdades */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground text-center">
              La mayoría de los creadores se dan cuenta tarde de estas verdades:
            </p>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-destructive/30">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg text-foreground font-medium">❌ No todo el mundo avanza con el mismo ritmo.</h4>
                  <p className="text-muted-foreground text-sm">Algunas personas necesitan pasos más simples, otras más retos, otras más apoyo emocional.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-destructive/30">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg text-foreground font-medium">❌ Muchos se bloquean… y jamás te lo dicen.</h4>
                  <p className="text-muted-foreground text-sm">Y tú ni siquiera lo sabes.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-destructive/30">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg text-foreground font-medium">❌ La mayoría abandona por falta de claridad, no por falta de valor.</h4>
                  <p className="text-muted-foreground text-sm">No es tu contenido. Es su camino.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-destructive/30">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg text-foreground font-medium">❌ La experiencia que viven tus seguidores determina si vuelven a comprarte o no.</h4>
                  <p className="text-muted-foreground text-sm">Tu negocio depende de esto más de lo que imaginas.</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-destructive/30">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg text-foreground font-medium">❌ Y tú, por más que quieras, no puedes acompañarlos uno a uno.</h4>
                  <p className="text-muted-foreground text-sm">No existen suficientes horas en el día.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* La solución */}
          <Card className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur border-primary/40">
            <CardContent className="p-8 space-y-6">
              <h3 className="font-display text-2xl text-foreground text-center">
                💡 Por eso las marcas que crecen no solo enseñan: crean experiencias.
              </h3>
              <p className="text-muted-foreground text-center">Experiencias que contienen:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {['personalización', 'seguimiento', 'mentalidad', 'estrategia', 'rituales', 'claridad', 'motivación', 'transformación real'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <div className="text-center pt-4 space-y-3">
                <p className="text-lg text-foreground">Cuando tu comunidad vive todo esto…</p>
                <p className="text-xl text-primary font-semibold">tu contenido deja de ser "información" y se convierte en impacto.</p>
              </div>
            </CardContent>
          </Card>

          {/* Enseñar vs Transformar */}
          <div className="space-y-8">
            <h3 className="font-display text-3xl text-foreground text-center">
              🌈 La diferencia entre enseñar y transformar
            </h3>

            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground">Enseñar es lo que haces ahora.</p>
              <p className="text-xl text-primary font-semibold">Transformar es lo que podrías hacer a partir de hoy.</p>

              <p className="text-lg text-foreground pt-4">La transformación ocurre cuando cada persona recibe exactamente:</p>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
                <div className="text-foreground">👉 lo que necesita</div>
                <div className="text-foreground">👉 en el momento que lo necesita</div>
                <div className="text-foreground">👉 con el enfoque que necesita</div>
                <div className="text-foreground">👉 al ritmo que puede integrar</div>
              </div>

              <p className="text-lg text-muted-foreground pt-6">Eso es lo que crea:</p>

              <div className="space-y-2 text-foreground">
                <p>✔ alumnos que terminan</p>
                <p>✔ alumnos que logran resultados</p>
                <p>✔ alumnos que recomiendan</p>
                <p>✔ alumnos que vuelven</p>
                <p>✔ alumnos que te posicionan como referente</p>
                <p className="font-semibold">✔ alumnos que hacen crecer tu negocio</p>
              </div>
            </div>
          </div>

          {/* Excelencia de marca */}
          <div className="space-y-8 text-center">
            <h3 className="font-display text-3xl text-foreground">
              🔥 La excelencia de tu marca empieza cuando dejas de dar el mismo camino a todos.
            </h3>

            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">Lo que ofrecemos en Wunjo no es una web.</p>
              <p className="text-muted-foreground">No es una app.</p>
              <p className="text-muted-foreground">No es un curso.</p>

              <p className="text-xl text-foreground font-semibold pt-4">
                Es una experiencia estratégica que hace que cada miembro de tu comunidad viva una transformación propia.
              </p>

              <p className="text-lg text-primary font-medium pt-6">
                Algo que ningún creador está ofreciendo… y que convierte tu contenido en tu mayor ventaja competitiva.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-xl text-foreground font-medium pb-6">
                ✨ ¿Listo para llevar tu comunidad a su siguiente nivel?
              </p>
              <Link to="/contacto">
                <Button size="lg">
                  👉 Inicia tu experiencia Wunjo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaMarcas;

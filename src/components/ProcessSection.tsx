// src/components/ProcessSection.tsx
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu curso, mentoría o comunidad para identificar puntos de fricción y oportunidades de personalización.",
  },
  {
    number: "02",
    title: "Diseño de Experiencia",
    description:
      "Creamos un sistema de IA que adapta el contenido, la motivación y el acompañamiento a cada perfil de alumno.",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Integramos la experiencia personalizada en tu plataforma actual sin que tengas que cambiar de herramientas.",
  },
  {
    number: "04",
    title: "Optimización",
    description:
      "Medimos resultados, ajustamos la IA y escalamos lo que funciona para maximizar retención y conversión.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-earth" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Proceso
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
            Cómo <span className="text-gradient-warm">funciona</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Línea vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:left-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 flex items-start gap-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Círculo número */}
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-background font-display text-lg font-bold text-primary md:absolute md:left-1/2 md:-translate-x-1/2">
                {step.number}
              </div>

              {/* Contenido */}
              <div
                className={`flex-1 rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm ${
                  i % 2 === 0
                    ? "md:mr-[calc(50%+2rem)] md:text-right"
                    : "md:ml-[calc(50%+2rem)]"
                }`}
              >
                <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

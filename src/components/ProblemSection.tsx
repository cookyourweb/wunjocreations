// src/components/ProblemSection.tsx
import { motion } from "framer-motion";
import { Sparkles, Users, Brain, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Users,
    problem: "Cada persona es distinta",
    solution: "Experiencias adaptadas al ritmo y mentalidad de cada miembro",
  },
  {
    icon: Brain,
    problem: "Algunos se bloquean o desmotivan",
    solution: "IA que detecta bloqueos y ofrece el empujón perfecto",
  },
  {
    icon: TrendingUp,
    problem: "Tu negocio pierde fuerza sin que lo notes",
    solution: "Más alumnos completan, repiten y recomiendan",
  },
  {
    icon: Sparkles,
    problem: "Tu contenido merece más impacto",
    solution: "Cada persona siente que la experiencia fue creada para ella",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            El problema
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
            Has construido algo{" "}
            <span className="text-gradient-warm">valioso</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Una audiencia que te escucha, aprende de ti y quiere cambiar su
            vida. Pero no todos avanzan igual.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-warm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-2 font-body text-sm font-medium uppercase tracking-wider text-secondary">
                {item.problem}
              </p>
              <p className="font-body text-lg text-foreground">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

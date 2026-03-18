// src/components/Experiences.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Sparkles, Heart, ArrowRight } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";

const solutionFeatures = [
  "su nivel",
  "su ritmo",
  "su mentalidad",
  "sus bloqueos",
  "su motivación",
  "sus fortalezas",
];

const results = [
  "entienden mejor",
  "se sienten guiados",
  "superan bloqueos",
  "mantienen la motivación",
  "integran lo aprendido",
  "consiguen transformación real",
];

const Experiences = () => {
  return (
    <div>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-glow opacity-20" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary"
          >
            Experiencias con IA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 max-w-4xl font-display text-3xl font-bold text-foreground md:text-5xl"
          >
            Diseñamos experiencias que{" "}
            <span className="text-gradient-warm">transforman</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-2xl font-body text-lg text-muted-foreground md:text-xl"
          >
            Convertimos tu método en un sistema de acompañamiento inteligente —
            adaptado al ritmo, mentalidad y bloqueos de cada persona.
          </motion.p>
        </div>
      </section>

      {/* La Solución Wunjo */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-muted/20" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                La Solución
              </p>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Convertimos tu contenido en una experiencia{" "}
                <span className="text-gradient-warm">personalizada con IA</span>
              </h2>
              <p className="mb-8 font-body text-muted-foreground leading-relaxed">
                Tu contenido se convierte en un proceso emocional y consciente,
                adaptado a cada persona.
              </p>
              <div className="flex flex-wrap gap-3">
                {solutionFeatures.map((f, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-body text-sm text-primary"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <p className="mb-4 font-display text-lg font-bold text-foreground">
                  Resultados para tu comunidad
                </p>
                <ul className="space-y-3">
                  {results.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-body text-foreground/90"
                    >
                      <Sparkles className="h-4 w-4 flex-shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-primary/5 p-4">
                  <p className="font-body text-sm font-medium italic text-primary">
                    No solo consumen tu contenido: lo viven.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TuVueltaAlSol */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Experiencia disponible
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Descubre nuestras{" "}
              <span className="text-gradient-warm">experiencias</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/50 bg-card transition-all hover:border-primary/40 hover:shadow-warm"
          >
            {/* Banner */}
            <div className="relative flex items-center justify-center bg-gradient-warm px-8 py-16">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative text-center">
                <Sun className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
                <h3 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                  TuVueltaAlSol
                </h3>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="mb-4 font-display text-xl font-bold text-foreground md:text-2xl">
                365 días de claridad, motivación y propósito personal
              </p>
              <p className="mb-6 font-body text-muted-foreground leading-relaxed">
                Un viaje de transformación personal guiado por IA que se adapta a
                tu estado emocional, tus metas y tu ritmo de vida. Cada día
                recibes contenido, reflexiones y ejercicios diseñados
                exclusivamente para ti.
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Sun,      label: "365 días",      desc: "Un año de acompañamiento" },
                  { icon: Heart,    label: "Personalizado", desc: "Adaptado a tu perfil" },
                  { icon: Sparkles, label: "Con IA",        desc: "Contenido inteligente" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border/50 bg-background p-4 text-center"
                  >
                    <item.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="font-display text-sm font-bold text-foreground">{item.label}</p>
                    <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground shadow-warm transition-all hover:scale-105"
              >
                Descúbrela
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <TestimonialsSection />

    </div>
  );
};

export default Experiences;

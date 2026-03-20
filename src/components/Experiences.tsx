// src/components/Experiences.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Sparkles, Heart, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-experiencias.jpg";
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
      <section className="relative pt-32 pb-8">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="absolute inset-0 bg-glow opacity-20 pointer-events-none" />
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

      {/* La Solución Wunjo — layout horizontal editorial */}
      <section className="relative py-16 border-t border-border/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Izquierda: texto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
                La Solución
              </p>
              <h2 className="mb-5 font-display text-3xl font-bold text-foreground md:text-4xl leading-tight">
                Tu contenido,{" "}
                <span className="text-gradient-warm">adaptado a cada persona</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Tu contenido se convierte en un proceso emocional y consciente,
                adaptado al nivel, ritmo y momento de cada alumno.
              </p>
              <p className="font-display text-base font-semibold italic text-primary border-l-2 border-primary/40 pl-4">
                No solo consumen tu contenido: lo viven.
              </p>
            </motion.div>

            {/* Derecha: features + resultados */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5"
            >
              <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/8 rounded-full blur-2xl pointer-events-none" />
                <p className="mb-3 font-display text-sm font-bold text-foreground uppercase tracking-wide">
                  Se adapta según
                </p>
                <div className="flex flex-wrap gap-2">
                  {solutionFeatures.map((f, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-body text-sm text-primary"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-5">
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-secondary/8 rounded-full blur-2xl pointer-events-none" />
                <p className="mb-3 font-display text-sm font-bold text-foreground uppercase tracking-wide">
                  Resultados reales
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {results.map((r, i) => (
                    <li key={i} className="flex items-center gap-1.5 font-body text-sm text-foreground/80">
                      <Sparkles className="h-3 w-3 flex-shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TuVueltaAlSol — sección destacada con fondo atmosférico */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/10 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="container relative z-10 mx-auto px-6">
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
            className="group mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/30 bg-card transition-all hover:border-primary/60 hover:shadow-warm"
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

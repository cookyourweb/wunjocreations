// src/components/sections/NuestraEsencia.tsx
import { motion } from "framer-motion";
import { Target, Eye, Award, Star, X, Check } from "lucide-react";

const diferencias = [
  {
    no: "Automatizaciones frías que disparan mensajes",
    si: "Acompañamiento con psicología real detrás",
  },
  {
    no: "Volumen por encima del impacto",
    si: "Impacto real, persona a persona",
  },
  {
    no: "Contenido para llamar la atención",
    si: "Experiencias que generan transformación",
  },
];

const ganas = [
  {
    icon: Target,
    title: "Más coherencia",
    desc: "Tu contenido, tu método y la experiencia del alumno alineados.",
  },
  {
    icon: Eye,
    title: "Más claridad",
    desc: "Datos reales sobre quién avanza, quién se estanca y qué funciona.",
  },
  {
    icon: Award,
    title: "Más autoridad",
    desc: "Una marca que se percibe innovadora y con estándares altos.",
  },
  {
    icon: Star,
    title: "Más diferenciación",
    desc: "Lo que ofreces no se puede copiar: es tu método, amplificado por IA.",
  },
];

const NuestraEsencia = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-muted/10 to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Nuestra esencia
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Tecnología con alma.{" "}
            <span className="text-gradient-warm">Transformación con propósito.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No somos una agencia. Somos un equipo especializado que une psicología,
            IA y estrategia para crear experiencias que transforman comunidades de verdad.
          </p>
        </motion.div>

        {/* POR QUÉ SOMOS DIFERENTES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
            Por qué <span className="text-gradient-warm">Wunjo es diferente</span>
          </h3>

          <div className="space-y-3">
            {diferencias.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="grid md:grid-cols-2 gap-px rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-3 px-5 py-4 bg-muted/30 border border-border/40">
                  <X className="w-4 h-4 text-muted-foreground shrink-0" />
                  <p className="font-body text-sm text-muted-foreground line-through decoration-muted-foreground/40">
                    {item.no}
                  </p>
                </div>
                <div className="flex items-center gap-3 px-5 py-4 bg-primary/5 border border-primary/20">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <p className="font-body text-sm text-foreground font-medium">
                    {item.si}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LO QUE GANAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
            Lo que ganas como creador
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {ganas.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 h-fit shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center space-y-2">
            <p className="font-body text-lg text-muted-foreground">
              Tu trabajo deja de ser contenido.
            </p>
            <p className="font-display text-2xl font-bold text-gradient-warm">
              Se convierte en experiencia.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NuestraEsencia;

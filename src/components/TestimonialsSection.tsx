// src/components/TestimonialsSection.tsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura M.",
    role: "Creadora de contenido de bienestar",
    text: "Desde que implementamos la experiencia Wunjo, mis alumnos completan el 85% del curso. Antes era un 30%. La diferencia es brutal.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "Mentor de negocios digitales",
    text: "Mis clientes ahora sienten que el programa fue hecho para ellos. La retención se triplicó y las recomendaciones se dispararon.",
    stars: 5,
  },
  {
    name: "Ana P.",
    role: "Coach de desarrollo personal",
    text: "Wunjo me ayudó a escalar mi mentoría sin perder la cercanía. La IA detecta cuándo alguien se bloquea antes de que yo lo vea.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="relative py-24 md:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Testimonios
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
            Lo que dicen nuestros{" "}
            <span className="text-gradient-warm">clientes</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-warm"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 font-body leading-relaxed text-foreground/90 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

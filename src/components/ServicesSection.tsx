// src/components/ServicesSection.tsx
import { motion } from "framer-motion";
import { Leaf, Zap, Heart } from "lucide-react";
import heroBg from "@/assets/hero-servicios.jpg";

const services = [
  {
    icon: Leaf,
    title: "Experiencias Personalizadas",
    description:
      "Transformamos tu curso o mentoría en un viaje único para cada miembro, adaptado con IA a su perfil, ritmo y objetivos.",
    highlight: "Retención x3",
  },
  {
    icon: Zap,
    title: "Automatización Inteligente",
    description:
      "Sistemas que detectan bloqueos, motivan en el momento justo y escalan tu acompañamiento sin multiplicar tu tiempo.",
    highlight: "Escala sin límites",
  },
  {
    icon: Heart,
    title: "Comunidad que Convierte",
    description:
      "Convierte más alumnos en casos de éxito, clientes recurrentes y embajadores de tu marca personal.",
    highlight: "Más conversiones",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Servicios
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
            Estrategia para escalar tu{" "}
            <span className="text-gradient-warm">impacto</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            No es solo acompañamiento. Es un sistema diseñado para que tu
            comunidad crezca y tu negocio también.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-warm"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-warm shadow-warm">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-body text-xs font-semibold text-primary">
                  {service.highlight}
                </span>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

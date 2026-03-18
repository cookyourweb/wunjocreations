// src/components/CTASection.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            ¿Lista para transformar tu comunidad?
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-5xl">
            Tu comunidad merece una{" "}
            <span className="text-gradient-warm">experiencia única</span>
          </h2>
          <p className="mb-10 font-body text-lg text-muted-foreground leading-relaxed">
            Agenda una llamada gratuita y descubre cómo la IA puede
            personalizar tu curso o mentoría para que cada miembro sienta que
            fue creada para él.
          </p>

          <Link
            to="/contacto"
            className="inline-block rounded-full bg-gradient-warm px-8 py-4 font-body text-base font-semibold text-[hsl(25,15%,8%)] shadow-warm hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            👉 Inicia tu experiencia Wunjo
          </Link>

          <p className="mt-6 font-body text-sm text-muted-foreground">
            Sin compromiso · 100% personalizado · Resultados desde el día 1
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

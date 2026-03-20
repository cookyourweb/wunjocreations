// src/components/sections/QuienSomos.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const QuienSomos = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-muted/10 to-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Quién está detrás de Wunjo
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Tech Lead e Ingeniería IA con{" "}
            <span className="text-gradient-warm">20 años de experiencia</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-primary/30 bg-card/60 overflow-hidden"
        >
          <div className="grid md:grid-cols-[320px_1fr]">

            {/* Imagen rectangular cuerpo completo */}
            <div className="relative h-80 md:h-auto min-h-[420px] overflow-hidden">
              <img
                src="/images/photo_2026-03-19 22.33.05.jpeg"
                alt="Verónica Serna — Fundadora de Wunjo Creations"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
            </div>

            {/* Texto */}
            <div className="p-8 md:p-10 space-y-5 flex flex-col justify-center">
              <div>
                <p className="font-display text-xl font-bold text-foreground">Verónica Serna</p>
                <p className="font-body text-sm text-primary mt-1">Tech Lead · AI Engineer · Fundadora de Wunjo Creations</p>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed">
                He trabajado en empresas como IBM, Indra, El Mundo y Cap Gemini, entre otras.
                A lo largo de estos 20 años siempre he buscado la forma de mantenerme actualizada,
                porque la tecnología no espera y la única manera de estar en el lugar donde ocurre
                el cambio es seguir aprendiendo.
              </p>

              <p className="font-body text-muted-foreground leading-relaxed">
                En los últimos años participé en varios programas como alumna y vi el mismo patrón:
                la gente se perdía en el contenido sin que nadie lo detectara. Dejaban de participar.
                En silencio. Y el mentor, poniendo todo su esfuerzo, sintiéndose frustrado porque
                ese contenido increíble no llegaba.
              </p>

              <div className="rounded-xl bg-primary/5 border border-primary/15 p-5">
                <p className="font-body text-sm text-foreground leading-relaxed">
                  Con la IA generativa vi la oportunidad de resolver esto: cada alumno recibe
                  lo que necesita, cuando lo necesita. Y el mentor puede seguir contando con
                  su comunidad mucho más allá del curso.
                </p>
                <p className="font-display text-base font-bold text-gradient-warm mt-3">
                  Porque el objetivo no es que terminen. Es que quieran seguir contigo.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-5 pt-1 text-sm font-body text-muted-foreground">
                <a
                  href="https://www.linkedin.com/in/wunjocreations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[hsl(38,75%,55%)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <span className="text-border">·</span>
                <Link to="/contacto" className="hover:text-[hsl(38,75%,55%)] transition-colors">
                  Contacta directamente →
                </Link>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default QuienSomos;

// src/components/sections/ParaMarcas.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain, Rocket, TrendingUp, Shield, Users, BarChart3, Zap, ChevronRight
} from "lucide-react";

const ParaMarcas = () => {
  return (
    <section id="para-marcas" className="relative py-24 px-6 bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 pt-8"
        >
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Para creadores de cursos y mentorías
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.2]">
            Tus alumnos se estancan.<br />
            <span className="text-gradient-warm">Tu comunidad abandona.</span><br />
            Tú te agotas acompañando.
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            No es tu método. Es que intentas transformar a cientos de personas distintas con un camino único.
          </p>
        </motion.div>

        {/* EL PROBLEMA */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, text: "Cada alumno avanza a ritmos distintos y no puedes seguirlos a todos" },
            { icon: Zap, text: "Los que se bloquean desaparecen en silencio, sin avisar" },
            { icon: Shield, text: "Respondes las mismas dudas una y otra vez, sin fin" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[hsl(340,45%,55%)]/20 bg-[hsl(340,45%,55%)]/5 p-6 space-y-3"
            >
              <item.icon className="w-6 h-6 text-[hsl(340,45%,55%)]" />
              <p className="font-body text-foreground font-medium leading-snug">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground font-body -mt-8">
          Y tú no puedes acompañarlos a todos uno a uno{" "}
          <span className="text-foreground font-medium">sin agotarte.</span>
        </p>

        {/* SEPARADOR */}
        <div className="flex items-center gap-4 max-w-sm mx-auto">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* LA SOLUCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12 space-y-6 text-center max-w-3xl mx-auto"
        >
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary">La solución</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Psicología + Inteligencia Artificial
          </h3>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Analizamos tu método, tu promesa y el perfil real de cada alumno.
            La IA adapta el contenido, la motivación y el acompañamiento de forma automática,
            en tiempo real — para cada persona.
          </p>
          <p className="font-body text-xl text-foreground font-semibold">
            Tú escalas. Tus alumnos avanzan. Tú recuperas tu energía.
          </p>
        </motion.div>

        {/* CÓMO FUNCIONA */}
        <div className="space-y-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
            Cómo <span className="text-gradient-warm">funciona</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: Brain,
                title: "Diagnóstico",
                desc: "Entendemos a tu comunidad: quién es, qué le bloquea, qué le mueve y a qué ritmo aprende.",
              },
              {
                num: "02",
                icon: Zap,
                title: "Personalización",
                desc: "La IA adapta en tiempo real el contenido, la motivación y el acompañamiento de cada persona.",
              },
              {
                num: "03",
                icon: TrendingUp,
                title: "Escalabilidad",
                desc: "Acompañas a cientos sin multiplicar tu tiempo. Más retención, más resultados, menos desgaste.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-primary/30">{step.num}</span>
                  <div className="p-2 rounded-lg bg-primary/10">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h4 className="font-display text-xl font-bold text-foreground">{step.title}</h4>
                <p className="font-body text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* QUÉ GANAS */}
        <div className="space-y-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
            Qué ganas
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, title: "Retención x3", desc: "Menos abandono. Más alumnos que terminan y se transforman de verdad." },
              { icon: Rocket, title: "Más ventas", desc: "Los casos de éxito reales generan testimonios que convierten." },
              { icon: Shield, title: "Menos desgaste", desc: "La IA acompaña. Tú te focalizas donde más impactas." },
              { icon: BarChart3, title: "Visibilidad total", desc: "Sabes quién avanza, quién se estanca y quién tiene potencial para más." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 h-fit shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{item.title}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CASO REAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card/80 p-8 md:p-10 space-y-4 text-center"
        >
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">Caso real</p>
          <h4 className="font-display text-2xl font-bold text-foreground">TuVueltaAlSol.es</h4>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            365 días de acompañamiento astrológico completamente personalizado con IA —
            cada persona recibe su propia experiencia, a su ritmo, con su lenguaje.
          </p>
          <a
            href="https://tuvueltaalsol.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-sm text-primary hover:text-[hsl(38,80%,70%)] transition-colors underline-offset-4 hover:underline"
          >
            Ver tuvueltaalsol.es →
          </a>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contacto">
            <Button
              size="lg"
              className="rounded-full bg-gradient-warm text-[hsl(25,15%,8%)] font-body font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-warm text-base px-8 py-6 border-0"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Diseña tu experiencia personalizada
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ParaMarcas;

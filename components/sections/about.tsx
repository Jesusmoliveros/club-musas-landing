"use client";

import { Compass, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Leaf,
    label: "Qué es",
    text: "Cada mes exploramos una misma chispa —una pregunta, una idea o un tema— a través de reflexiones, escritura intuitiva, recomendaciones y conversaciones con una comunidad que también disfruta aprender, crear y observar con más atención.",
  },
  {
    icon: Users,
    label: "Para quién",
    text: "Para ti si disfrutas aprender, hacer preguntas y encontrar inspiración en libros, conversaciones, arte, naturaleza y experiencias cotidianas. No necesitas ser artista ni dedicarte a una profesión creativa, solo tener curiosidad.",
  },
  {
    icon: Compass,
    label: "Intención",
    text: "Crear un espacio al que puedas regresar cuando necesites recordar qué te inspira, qué quieres crear y cómo quieres vivir.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="club" className="relative overflow-hidden px-6 py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 size-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          <Leaf className="size-4" />
          Sobre el club
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-balance font-heading text-4xl font-medium tracking-tight md:text-5xl"
        >
          El Club de Inspiración
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Nace del deseo de cultivar una mirada más curiosa hacia la vida. Es
          un espacio digital para acercarnos al arte, las ideas, las
          conversaciones y las experiencias que expanden nuestra forma de ver
          el mundo.
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-primary/10"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="size-5" />
              </div>

              <h3 className="mt-6 font-heading text-xl font-medium">
                {pillar.label}
              </h3>

              <p className="mt-2 leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

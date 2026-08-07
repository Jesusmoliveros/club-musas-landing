"use client";

import { Compass, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Leaf,
    label: "Qué es",
    text: "Aquí explicaremos qué es el club y la experiencia que ofrece.",
  },
  {
    icon: Users,
    label: "Para quién",
    text: "Aquí explicaremos a quién está dirigido el club.",
  },
  {
    icon: Compass,
    label: "Propósito",
    text: "Aquí explicaremos cuál es su propósito y hacia dónde va.",
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
        className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
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
          Un espacio pensado para tu bienestar
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Aquí explicaremos qué es el club, a quién está dirigido y cuál es su
          propósito.
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
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-accent/40"
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

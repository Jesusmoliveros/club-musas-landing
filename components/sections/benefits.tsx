"use client";

import { CalendarHeart, Mail, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Mail,
    title: "Newsletter semanal",
    text: "Cada domingo recibirás un correo con una idea, una pregunta o un tema para explorar el mes desde la escritura, la observación y la curiosidad.",
  },
  {
    icon: Users,
    title: "Grupo privado",
    text: "Un espacio privado en Instagram para compartir experiencias, ideas, fotografías, recomendaciones y todo lo que vayamos descubriendo en el camino con la comunidad.",
  },
  {
    icon: CalendarHeart,
    title: "Encuentro mensual en línea",
    text: "Nos encontraremos una vez al mes (o más, las que el espacio pida) para compartir aquello que nos ha inspirado: conversaciones, hallazgos, dudas, libros, películas o cualquier cosa que haya despertado algo en nosotros.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Benefits() {
  return (
    <section id="beneficios" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          <Sparkles className="size-4" />
          ¿Qué incluye cada edición?
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-balance font-heading text-4xl font-medium tracking-tight md:text-5xl"
        >
          Un club digital y asincrónico
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Creado para acompañarte desde donde estés y a tu ritmo.
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
              variants={fadeUp}
              className="rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-accent/40"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon className="size-5" />
              </div>

              <h3 className="mt-6 font-heading text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          className="mx-auto mt-16 max-w-2xl text-balance text-center font-heading text-xl leading-relaxed text-foreground/90 md:text-2xl"
        >
          &ldquo;Mi deseo es que este espacio te recuerde que la inspiración
          está mucho más cerca de lo que creemos. Que poco a poco cultives una
          forma de mirar el mundo con más presencia, curiosidad y
          creatividad.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

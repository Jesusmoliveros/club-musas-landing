"use client";

import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const agreements = [
  {
    title: "Cultivamos la curiosidad antes que la certeza",
    text: "Venimos a explorar ideas, hacer preguntas y descubrir nuevas perspectivas, no a tener todas las respuestas.",
  },
  {
    title: "Compartimos con intención",
    text: "Buscamos que cada recomendación, reflexión o conversación contribuya al espíritu del club. La calidad de este espacio depende de lo que cada persona aporta.",
  },
  {
    title: "Escuchamos con respeto y cuidamos la confianza",
    text: "Cada experiencia es distinta. Escuchamos con apertura, sin juzgar ni intentar convencer a los demás. Lo que se comparte dentro del club permanece aquí, salvo que quien lo compartió decida hacerlo público.",
  },
  {
    title: "Participa a tu manera",
    text: "No hay presión para completar todas las actividades ni para compartir siempre. Este es un espacio para acompañarte, no para exigirte. Mi invitación es a que te abras a estar en comunidad y compartas más de ti, cuando lo sientas.",
  },
  {
    title: "No olvides jugar",
    text: "Permítete experimentar, cambiar de opinión, hacer preguntas y sorprenderte. La inspiración también aparece cuando dejamos espacio para lo inesperado.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorks() {
  return (
    <section id="acuerdos" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground"
        >
          <HeartHandshake className="size-4" />
          Acuerdos del Club
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Este es un espacio que construimos entre todos. Estos acuerdos nos
          ayudan a cuidar la experiencia y la calidad de las conversaciones.
        </motion.p>

        <div className="mt-12 space-y-6">
          {agreements.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 * index }}
              variants={fadeUp}
              className="flex gap-5 rounded-3xl border border-border bg-card p-6 md:p-8"
            >
              <span className="font-heading text-2xl font-medium text-primary/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-lg font-medium">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

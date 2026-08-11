"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cómo funciona el Club?",
    answer:
      "Cada mes recibes un tema para explorar. Durante el mes recibirás un newsletter semanal, acceso a la comunidad privada y un encuentro en línea al finalizar.",
  },
  {
    question: "¿Es una membresía?",
    answer:
      "No. Cada edición es independiente. No existen membresías ni renovaciones automáticas: tú decides en qué ediciones participar y cuándo volver al Club.",
  },
  {
    question: "¿Debo asistir en un horario específico?",
    answer:
      "El contenido es principalmente asíncrono para que lo disfrutes a tu ritmo. Solo el encuentro mensual tiene una fecha programada que coordinaremos una vez que hayamos iniciado el mes.",
  },
  {
    question: "¿Qué pasa si no puedo asistir al encuentro en vivo?",
    answer:
      "No pasa nada. El corazón del Club es la experiencia que vivirás durante el mes. El encuentro es una invitación para compartir, pero no es un requisito para formar parte del espacio. Procuraremos elegir un horario en el que pueda asistir la mayoría, o en el mejor de los casos, todos los participantes.",
  },
  {
    question: "¿Necesito experiencia en escritura, creatividad o arte?",
    answer:
      "No necesariamente. El club está diseñado para cualquier persona con curiosidad por explorar nuevas ideas y formas de mirar el mundo.",
  },
  {
    question: "¿Puedo unirme si no he participado en ediciones anteriores?",
    answer:
      "Sí. Cada edición es independiente, así que puedes unirte en cualquier momento sin haber estado en el Club antes.",
  },
  {
    question: "¿Qué sucede después de inscribirme?",
    answer:
      "Una vez confirmado tu pago, recibirás un correo de bienvenida con toda la información para comenzar. Unos días antes del inicio te añadiré al grupo privado de Instagram.",
  },
  {
    question: "¿Hay cupo limitado?",
    answer:
      "Sí. Cada edición tiene un número limitado de lugares para favorecer un espacio cercano y una conversación más enriquecedora.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground"
        >
          <HelpCircle className="size-4" />
          Preguntas frecuentes
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          variants={fadeUp}
          className="mt-6 text-balance font-heading text-4xl font-medium tracking-tight md:text-5xl"
        >
          ¿Tienes dudas?
        </motion.h2>

        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="px-6 md:px-8">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-heading text-lg font-medium">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

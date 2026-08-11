import Link from "next/link";
import { AtSign, Mail, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const channels = [
  {
    icon: AtSign,
    label: "@musas__________",
    href: "https://www.instagram.com/musas__________?igsh=bDRhaXNvMHM1Znht&utm_source=qr",
  },
  {
    icon: Mail,
    label: "joss.musas@gmail.com",
    href: "mailto:joss.musas@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "+52 222 446 0178",
    href: "https://wa.me/522224460178",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-heading text-4xl font-medium tracking-tight md:text-5xl">
          ¿Tienes dudas o quieres unirte?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Si quieres formar parte del Club o tienes alguna otra pregunta,
          escríbeme por Instagram o envíame un correo y con gusto te
          compartiré toda la información.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {channels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 rounded-full px-5"
              )}
            >
              <channel.icon className="size-4" />
              {channel.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://forms.gle/A4FRhsDe6USGZLKeA"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 rounded-full px-8"
          )}
        >
          Formulario de inscripción
        </Link>
      </div>
    </section>
  );
}

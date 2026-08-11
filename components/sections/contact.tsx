import Link from "next/link";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const channels = [
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@musas__________",
    href: "https://www.instagram.com/musas__________?igsh=bDRhaXNvMHM1Znht&utm_source=qr",
  },
  {
    icon: FaEnvelope,
    label: "Correo",
    value: "joss.musas@gmail.com",
    href: "mailto:joss.musas@gmail.com",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+52 222 446 0178",
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

        <div className="mt-10 flex items-center justify-center gap-5">
          {channels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${channel.label}: ${channel.value}`}
              title={`${channel.label}: ${channel.value}`}
              className="flex size-14 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
            >
              <channel.icon className="size-6" />
            </Link>
          ))}
        </div>

        <Link
          href="https://forms.gle/A4FRhsDe6USGZLKeA"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 rounded-full px-8"
          )}
        >
          Formulario de inscripción
        </Link>
      </div>
    </section>
  );
}

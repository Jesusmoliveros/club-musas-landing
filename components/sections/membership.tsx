import Link from "next/link";
import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const points = [
  "Cada edición es independiente. No hay membresías ni renovaciones automáticas: tú eliges cuándo unirte y en qué ediciones participar.",
  "Cupo limitado, para favorecer un espacio cercano y una conversación más enriquecedora.",
  "Una vez confirmado tu comprobante de pago, te añadiré al grupo privado de Instagram.",
];

export function Membership() {
  return (
    <section id="membresia" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl rounded-4xl border border-border bg-card p-10 text-center md:p-16">
        <h2 className="font-heading text-3xl font-medium tracking-tight md:text-4xl">
          Únete al Club
        </h2>

        <p className="mt-6 flex items-end justify-center gap-1">
          <span className="font-heading text-5xl font-medium tracking-tight md:text-6xl">
            $350
          </span>
          <span className="pb-1.5 text-muted-foreground">MXN / edición</span>
        </p>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Para inscribirte, completa el formulario de inscripción y realiza el
          pago correspondiente.
        </p>

        <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Check className="mt-0.5 size-5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>

        <Link
          href="https://forms.gle/A4FRhsDe6USGZLKeA"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 rounded-full px-8"
          )}
        >
          Inscribirme ahora
        </Link>
      </div>
    </section>
  );
}

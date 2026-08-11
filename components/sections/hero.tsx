import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24"
    >
      {/* Coloca la imagen definitiva de la clienta en public/hero-bg.jpg (o cambia el src) cuando la envíe. */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Velo concentrado solo cerca del texto (izquierda); el resto de la foto queda libre */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-background from-5% via-background/75 via-35% to-transparent to-75%"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent to-30%"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Club de Inspiración
        </p>

        <h1 className="max-w-3xl text-balance font-heading text-4xl font-medium tracking-tight md:text-6xl">
          Un espacio para cultivar una mirada más curiosa, creativa e
          intencional hacia la vida.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Un club digital y asincrónico para acercarnos al arte, las ideas,
          las conversaciones y las experiencias que expanden nuestra forma de
          ver el mundo.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#membresia"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}
          >
            Únete al Club
          </Link>
          <Link
            href="#club"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6"
            )}
          >
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
}

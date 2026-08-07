  import Image from "next/image";

  export function Hero() {
    return (
      <section
        id="inicio"
        className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-24"
      >
        {/* Coloca la imagen del cliente en public/hero-bg.jpg (o cambia el src). */}
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
            Club digital
          </p>

          <h1 className="max-w-3xl font-heading text-4xl font-medium tracking-tight md:text-6xl">
            Un espacio para conectar, aprender y crecer.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Próximamente colocaremos aquí la descripción principal proporcionada
            por la cliente.
          </p>
        </div>
      </section>
    );
  }
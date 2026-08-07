"use client";

import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#club", label: "El club" },
  { href: "#cursos", label: "Cursos" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-5">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-heading text-lg font-medium tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Leaf className="size-4" />
          </span>
          MUSAS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#membresia"
          className={cn(
            buttonVariants({ size: "sm" }),
            "hidden rounded-full px-4 md:inline-flex"
          )}
        >
          Únete
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-border/60 bg-background/95 p-4 shadow-sm backdrop-blur-md md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#membresia"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "sm" }), "mt-1 justify-center rounded-xl")}
            >
              Únete
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

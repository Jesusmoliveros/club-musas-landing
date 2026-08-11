import Link from "next/link";
import { AtSign, Leaf, Mail, MessageCircle } from "lucide-react";

const socials = [
  {
    icon: AtSign,
    label: "Instagram",
    href: "https://www.instagram.com/musas__________?igsh=bDRhaXNvMHM1Znht&utm_source=qr",
  },
  {
    icon: Mail,
    label: "Correo",
    href: "mailto:joss.musas@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/522224460178",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 font-heading text-lg font-medium tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Leaf className="size-4" />
          </span>
          MUSAS
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <social.icon className="size-4" />
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Musas — Club de Inspiración.
        </p>
      </div>
    </footer>
  );
}

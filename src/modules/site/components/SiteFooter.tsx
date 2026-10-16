import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { CONTACT_EMAIL, NAVIGATION_LINKS, SERVICE_AREA, SITE_TAGLINE } from "../utils/siteConfig";

export function SiteFooter() {
  return (
    <footer className="bg-night text-night-ink-dim">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <BrandLogo tone="dark" />
          <p className="max-w-sm text-night-ink-dim">
            {SITE_TAGLINE}. Te guiamos desde la primera idea hasta que tu espacio funciona solo.
          </p>
        </div>

        <nav aria-label="Secciones" className="flex flex-col gap-2.5">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-night-ink">Explora</span>
          {NAVIGATION_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm no-underline hover:text-night-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 text-sm">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-night-ink">Contacto</span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="no-underline hover:text-night-ink">
            {CONTACT_EMAIL}
          </a>
          <span>Atendemos en {SERVICE_AREA}</span>
          <Link href="/agendar" className="no-underline hover:text-night-ink">
            Agendar una asesoría
          </Link>
        </div>
      </div>
      <div className="border-t border-night-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs">
          <span>© {new Date().getFullYear()} Hogaria. Todos los derechos reservados.</span>
          <Link href="/creditos" className="no-underline hover:text-night-ink">
            Créditos de imágenes
          </Link>
        </div>
      </div>
    </footer>
  );
}

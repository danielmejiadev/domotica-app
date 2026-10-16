import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BrandLogo } from "./BrandLogo";
import { NAVIGATION_LINKS, SCHEDULE_PATH } from "../utils/siteConfig";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
        <Link href="/" aria-label="Ir al inicio">
          <BrandLogo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-dim no-underline transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href={SCHEDULE_PATH} variant="primary">
              Agendar asesoría
            </ButtonLink>
          </div>

          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-pill bg-surface-2 text-ink [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menú</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="h-5 w-5">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav
              aria-label="Menú móvil"
              className="absolute right-0 top-12 flex w-64 flex-col gap-1 rounded-lg bg-surface p-3 shadow-lift"
            >
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-ink no-underline hover:bg-surface-2"
                >
                  {link.label}
                </Link>
              ))}
              <ButtonLink href={SCHEDULE_PATH} variant="accent" className="mt-2">
                Agendar asesoría
              </ButtonLink>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

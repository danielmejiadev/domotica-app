import clsx from "clsx";
import { BRAND_NAME } from "../utils/siteConfig";

export function BrandLogo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-ink shadow-glow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
          <path d="M3 11 12 3l9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      </span>
      <span
        className={clsx(
          "font-heading text-xl font-semibold tracking-tight",
          tone === "dark" ? "text-night-ink" : "text-ink"
        )}
      >
        {BRAND_NAME}
      </span>
    </span>
  );
}

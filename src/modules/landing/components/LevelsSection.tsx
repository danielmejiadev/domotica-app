import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { SCHEDULE_PATH } from "@/modules/site/utils/siteConfig";
import { LEVELS } from "../utils/landingContent";

export function LevelsSection() {
  return (
    <section className="bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Empieza donde quieras"
          title="Desde lo más simple hasta la inteligencia completa."
          description="No hay paquetes cerrados ni precios de catálogo: cada proyecto se arma a tu medida y se adapta a tu presupuesto."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {LEVELS.map((level, index) => (
            <Reveal key={level.name} delayMs={index * 100}>
              <article className="relative flex h-full flex-col gap-5 rounded-xl bg-surface p-8 shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-night font-heading text-lg font-semibold text-accent">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl">{level.name}</h3>
                  <p className="font-medium text-ink">{level.tagline}</p>
                </div>
                <ul className="flex flex-1 flex-col gap-3">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-ink-dim">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="border-t border-line pt-4 text-sm text-ink-faint">{level.idealFor}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl bg-night p-8 md:flex-row md:items-center">
          <div className="flex max-w-xl flex-col gap-2">
            <h3 className="text-2xl text-night-ink">¿No sabes en cuál nivel estás?</h3>
            <p className="text-night-ink-dim">
              Los niveles se mezclan y se ajustan. Cuéntanos qué necesitas y armamos la combinación que cabe en tu
              presupuesto.
            </p>
          </div>
          <ButtonLink href={`${SCHEDULE_PATH}#formulario`} variant="accent" size="lg">
            Hablemos de tu proyecto
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

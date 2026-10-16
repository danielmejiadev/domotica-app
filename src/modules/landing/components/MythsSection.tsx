import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MYTHS } from "../utils/landingContent";

export function MythsSection() {
  return (
    <section className="bg-surface-2">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Mitos vs. realidad"
          title="Lo que mucha gente cree sobre la domótica (y no es cierto)."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {MYTHS.map((item, index) => (
            <Reveal key={item.myth} delayMs={(index % 2) * 90}>
              <article className="flex h-full flex-col gap-3 rounded-lg bg-surface p-7 shadow-soft">
                <p className="font-heading text-lg font-semibold text-ink-dim line-through decoration-accent decoration-2">
                  {item.myth}
                </p>
                <p className="text-ink">
                  <span className="mr-2 font-semibold text-accent-ink">En realidad:</span>
                  {item.reality}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

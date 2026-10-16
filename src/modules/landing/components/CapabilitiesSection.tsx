import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CAPABILITIES } from "../utils/landingContent";

export function CapabilitiesSection() {
  return (
    <section id="que-automatizamos" className="scroll-mt-20 bg-night">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          tone="dark"
          eyebrow="Qué podemos automatizar"
          title="Casi todo lo que se enciende, se abre, se cierra o se mide."
          description="Escoge solo lo que te sirve hoy. El sistema puede crecer contigo."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => (
            <Reveal key={capability.title} delayMs={(index % 3) * 80}>
              <article className="group flex h-full flex-col gap-4 rounded-lg border border-night-line bg-night-2 p-6 transition-colors hover:border-accent/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                  <Icon name={capability.icon} />
                </span>
                <h3 className="text-xl text-night-ink">{capability.title}</h3>
                <p className="text-night-ink-dim">{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

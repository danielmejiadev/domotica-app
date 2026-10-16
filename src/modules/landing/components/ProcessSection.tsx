import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "../utils/landingContent";

export function ProcessSection() {
  return (
    <section id="como-trabajamos" className="scroll-mt-20 bg-night">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          tone="dark"
          eyebrow="Cómo trabajamos"
          title="Te acompañamos de la idea a que todo funcione."
          description="Tú no tienes que saber de tecnología. Nosotros te guiamos en cada paso."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.title} delayMs={index * 90}>
              <li className="flex h-full flex-col gap-4 rounded-lg border border-night-line bg-night-2 p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent text-ink shadow-glow">
                    <Icon name={step.icon} />
                  </span>
                  <span className="font-heading text-4xl font-semibold text-night-line">0{index + 1}</span>
                </div>
                <h3 className="text-xl text-night-ink">{step.title}</h3>
                <p className="text-night-ink-dim">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

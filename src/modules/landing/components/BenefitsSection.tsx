import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "../utils/landingContent";

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Una oportunidad"
        title="La domótica apenas está llegando a Colombia, y puede cambiar tu día a día."
        description="En otros países ya es lo normal. Aquí muchas personas ni saben que existe o creen que es inalcanzable. Hoy es más simple y accesible de lo que imaginas."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit, index) => (
          <Reveal key={benefit.title} delayMs={index * 90}>
            <article className="flex h-full flex-col gap-4 rounded-lg bg-surface p-6 shadow-soft transition-shadow hover:shadow-lift">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent-ink">
                <Icon name={benefit.icon} />
              </span>
              <h3 className="text-xl">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

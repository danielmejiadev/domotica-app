import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "../utils/landingContent";

export function FaqSection() {
  return (
    <section id="preguntas" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20 md:py-28">
      <SectionHeading align="center" eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas antes de empezar." />
      <div className="mt-12">
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}

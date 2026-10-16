import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DAY_TIMELINE } from "../utils/landingContent";

export function DayTimelineSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Imagina tu día"
            title="Así se vive un día en un espacio inteligente."
            description="Sin tocar nada. Todo pasa porque tú lo definiste una vez."
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
            <Image
              src="/images/escenas-led.jpg"
              alt="Habitación con iluminación LED de colores"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="relative flex flex-col gap-6 before:absolute before:bottom-4 before:left-[1.4rem] before:top-4 before:w-px before:bg-line-strong">
          {DAY_TIMELINE.map((moment, index) => (
            <Reveal key={moment.time} delayMs={index * 70}>
              <li className="relative flex gap-5">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-night text-accent shadow-soft">
                  <Icon name={moment.icon} className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1 pt-0.5">
                  <span className="text-sm font-semibold text-accent-ink">{moment.time}</span>
                  <h3 className="text-xl">{moment.title}</h3>
                  <p>{moment.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

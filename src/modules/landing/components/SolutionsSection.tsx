import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOLUTIONS } from "@/modules/solutions/utils/solutions";

export function SolutionsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Para cada espacio"
        title="Soluciones pensadas para donde vives y trabajas."
        description="Cada proyecto es distinto. Entra a tu caso y mira ejemplos de qué se puede hacer."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {SOLUTIONS.map((solution, index) => (
          <Reveal key={solution.slug} delayMs={index * 100}>
            <Link
              href={`/soluciones/${solution.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface no-underline shadow-soft transition-shadow hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex items-center gap-2 text-sm font-semibold text-accent-ink">
                  <Icon name={solution.icon} className="h-5 w-5" />
                  {solution.name}
                </span>
                <h3 className="text-xl">{solution.headline}</h3>
                <p className="flex-1">{solution.summary}</p>
                <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                  Ver ejemplos
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

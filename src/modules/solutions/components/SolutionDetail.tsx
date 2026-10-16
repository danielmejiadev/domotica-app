import Image from "next/image";
import Link from "next/link";
import { ButtonExternalLink, ButtonLink } from "@/components/ui/Button";
import { Icon, WhatsappIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "@/modules/leads/components/ContactSection";
import { SCHEDULE_PATH } from "@/modules/site/utils/siteConfig";
import { buildWhatsappUrl } from "@/modules/site/utils/whatsapp";
import { SOLUTIONS, type Solution } from "../utils/solutions";

export function SolutionDetail({ solution }: { solution: Solution }) {
  const otherSolutions = SOLUTIONS.filter((candidate) => candidate.slug !== solution.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-night">
        <Image src={solution.image} alt={solution.imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/90 to-night/40" />
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-24 md:py-32">
          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <Icon name={solution.icon} className="h-5 w-5" />
            {solution.name}
          </span>
          <h1 className="max-w-3xl text-4xl leading-tight font-bold text-night-ink md:text-6xl">{solution.headline}</h1>
          <p className="max-w-2xl text-lg text-night-ink-dim md:text-xl">{solution.intro}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonExternalLink href={buildWhatsappUrl(`Hola, quiero automatizar mi espacio (${solution.name.toLowerCase()}). ¿Podemos hablar?`)} variant="whatsapp" size="lg">
              <WhatsappIcon className="h-5 w-5" /> Agendar por WhatsApp
            </ButtonExternalLink>
            <ButtonLink href={`${SCHEDULE_PATH}#formulario`} variant="outline-light" size="lg">
              Dejar mis datos
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading eyebrow="Lo que puedes lograr" title="Beneficios que se notan desde el primer día." />
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {solution.benefits.map((benefit, index) => (
            <Reveal key={benefit} delayMs={(index % 2) * 80}>
              <li className="flex items-start gap-4 rounded-lg bg-surface p-5 shadow-soft">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-accent/15 text-accent-ink">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-ink">{benefit}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-night">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            tone="dark"
            eyebrow="Hasta dónde puedes llegar"
            title="Desde lo más simple hasta lo más completo."
            description="Ejemplos de cómo podría verse tu proyecto. El tuyo lo diseñamos a la medida y a tu presupuesto."
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {solution.examples.map((example, index) => (
              <Reveal key={example.level} delayMs={index * 90}>
                <li className="flex h-full flex-col gap-3 rounded-lg border border-night-line bg-night-2 p-7">
                  <span className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                    {index + 1}. {example.level}
                  </span>
                  <p className="text-night-ink-dim">{example.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-lg text-night-ink">{solution.closing}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-6 text-2xl">También te puede interesar</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {otherSolutions.map((other) => (
            <Link
              key={other.slug}
              href={`/soluciones/${other.slug}`}
              className="group flex items-center justify-between gap-4 rounded-lg bg-surface p-5 no-underline shadow-soft transition-shadow hover:shadow-lift"
            >
              <span className="flex items-center gap-3 font-heading text-lg font-semibold text-ink">
                <Icon name={other.icon} className="h-6 w-6 text-accent-ink" />
                {other.name}
              </span>
              <Icon name="arrow" className="h-5 w-5 text-ink-dim transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}

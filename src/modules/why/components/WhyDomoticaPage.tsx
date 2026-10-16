import Image from "next/image";
import { ButtonExternalLink, ButtonLink } from "@/components/ui/Button";
import { Icon, WhatsappIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "@/modules/leads/components/ContactSection";
import { buildWhatsappUrl } from "@/modules/site/utils/whatsapp";
import { COLOMBIA_REASONS, CONTROL_WAYS, HOW_IT_WORKS, TECHNOLOGIES } from "../utils/whyContent";

export function WhyDomoticaPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-night">
        <Image src="/images/panel-pared.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/90 to-night/40" />
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-24 md:py-32">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">¿Por qué domótica?</span>
          <h1 className="max-w-3xl text-4xl leading-tight font-bold text-night-ink md:text-6xl">
            La tecnología que ya usan en otros países, explicada simple.
          </h1>
          <p className="max-w-2xl text-lg text-night-ink-dim md:text-xl">
            Domótica es hacer que tu espacio sienta, decida y actúe por ti. No es ciencia ficción ni algo solo para
            ricos: es comodidad, ahorro y tranquilidad.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonExternalLink href={buildWhatsappUrl()} variant="whatsapp" size="lg">
              <WhatsappIcon className="h-5 w-5" /> Hablar con un asesor
            </ButtonExternalLink>
            <ButtonLink href="/#guia" variant="outline-light" size="lg">
              Descubre por dónde empezar
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tres piezas que trabajan juntas."
          description="Sin importar el tamaño del proyecto, todo sistema de domótica se basa en lo mismo."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 90}>
              <article className="flex h-full flex-col gap-4 rounded-lg bg-surface p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent-ink">
                  <Icon name={item.icon} />
                </span>
                <h3 className="text-xl">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-night">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            tone="dark"
            eyebrow="Cómo lo controlas"
            title="Tú decides cómo interactuar con tu espacio."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTROL_WAYS.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 80}>
                <article className="flex h-full flex-col gap-4 rounded-lg border border-night-line bg-night-2 p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent">
                    <Icon name={item.icon} />
                  </span>
                  <h3 className="text-xl text-night-ink">{item.title}</h3>
                  <p className="text-night-ink-dim">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Por qué tiene sentido en Colombia"
          title="Un mercado que apenas empieza, con razones de sobra para aprovecharlo."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COLOMBIA_REASONS.map((reason, index) => (
            <Reveal key={reason.title} delayMs={(index % 3) * 80}>
              <article className="flex h-full flex-col gap-3 rounded-lg bg-surface p-6 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent/15 text-accent-ink">
                  <Icon name={reason.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-lg">{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
            <Image
              src="/images/termostato.jpg"
              alt="Persona sosteniendo un termostato inteligente"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Tecnologías"
              title="Elegimos la que mejor encaja contigo."
              description="No se trata de usar lo más caro, sino lo adecuado para tu caso."
            />
            <ul className="flex flex-col gap-4">
              {TECHNOLOGIES.map((technology) => (
                <li key={technology.name} className="rounded-lg bg-surface p-5 shadow-soft">
                  <h3 className="text-lg">{technology.name}</h3>
                  <p className="mt-1">{technology.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

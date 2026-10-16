import Image from "next/image";
import clsx from "clsx";
import { ButtonExternalLink, ButtonLink } from "@/components/ui/Button";
import { Icon, WhatsappIcon } from "@/components/ui/Icon";
import { buildWhatsappUrl } from "@/modules/site/utils/whatsapp";
import { SCHEDULE_PATH } from "@/modules/site/utils/siteConfig";
import { HeroControlCard } from "./HeroControlCard";
import styles from "./HeroSection.module.css";

const HIGHLIGHTS = ["Desde un par de luces hasta todo el inmueble", "Nos adaptamos a tu presupuesto", "Instalación de alta calidad"];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Image
        src="/images/hero-sala.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-transparent to-transparent" />
      <div
        aria-hidden="true"
        className={clsx("absolute -right-24 top-10 -z-10 h-96 w-96 rounded-pill bg-accent/25 blur-3xl", styles.glow)}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 md:pt-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Icon name="spark" className="h-4 w-4" />
            Domótica a la medida en Colombia
          </span>
          <h1 className="text-4xl leading-tight font-bold text-night-ink md:text-6xl">
            Tu casa, tu negocio, tu oficina.{" "}
            <span className="bg-gradient-to-r from-accent to-[#ffd98a] bg-clip-text text-transparent">
              Que piensen por ti.
            </span>
          </h1>
          <p className="max-w-xl text-lg text-night-ink-dim md:text-xl">
            Automatizamos luces, aires, puertas, cortinas, cámaras y sensores. Te guiamos para elegir lo que de
            verdad necesitas, según tu presupuesto, y lo instalamos con alta calidad.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonExternalLink href={buildWhatsappUrl()} variant="whatsapp" size="lg">
              <WhatsappIcon className="h-5 w-5" /> Agendar por WhatsApp
            </ButtonExternalLink>
            <ButtonLink href={`${SCHEDULE_PATH}#formulario`} variant="outline-light" size="lg">
              Dejar mis datos
            </ButtonLink>
          </div>

          <ul className="flex flex-col gap-2.5 text-sm text-night-ink-dim sm:flex-row sm:flex-wrap sm:gap-x-6">
            {HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <HeroControlCard />
      </div>
    </section>
  );
}

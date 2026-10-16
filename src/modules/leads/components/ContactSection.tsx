import { ButtonExternalLink } from "@/components/ui/Button";
import { Icon, WhatsappIcon, type IconName } from "@/components/ui/Icon";
import { buildWhatsappUrl } from "@/modules/site/utils/whatsapp";
import { LeadForm } from "./LeadForm";

const PROMISES: { icon: IconName; text: string }[] = [
  { icon: "chat", text: "Hablamos primero: entendemos tu espacio y lo que quieres lograr." },
  { icon: "coin", text: "Nos adaptamos a tu presupuesto. Se puede empezar pequeño y crecer después." },
  { icon: "shield", text: "Sin compromiso: la asesoría inicial no te obliga a nada." },
];

export function ContactSection() {
  return (
    <section id="agendar" className="scroll-mt-20 bg-night">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div className="flex flex-col gap-7">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Agenda tu asesoría</span>
          <h2 className="text-3xl leading-tight font-semibold text-night-ink md:text-5xl">
            Cuéntanos qué necesitas. Nosotros nos adaptamos a tu presupuesto.
          </h2>
          <p className="text-lg text-night-ink-dim">
            Escríbenos por WhatsApp o déjanos tus datos. En una conversación definimos qué automatizar primero y
            cómo hacerlo bien.
          </p>
          <ul className="flex flex-col gap-4">
            {PROMISES.map((promise) => (
              <li key={promise.text} className="flex items-start gap-3 text-night-ink-dim">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-pill bg-accent/15 text-accent">
                  <Icon name={promise.icon} className="h-4 w-4" />
                </span>
                {promise.text}
              </li>
            ))}
          </ul>
          <div>
            <ButtonExternalLink href={buildWhatsappUrl()} variant="whatsapp" size="lg">
              <WhatsappIcon className="h-5 w-5" /> Agendar por WhatsApp
            </ButtonExternalLink>
          </div>
        </div>

        <div id="formulario" className="scroll-mt-24">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

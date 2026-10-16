"use client";

import { useState, type ReactNode } from "react";
import clsx from "clsx";
import { Button, ButtonExternalLink, ButtonLink } from "@/components/ui/Button";
import { Icon, WhatsappIcon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SCHEDULE_PATH } from "@/modules/site/utils/siteConfig";
import { buildWhatsappUrl } from "@/modules/site/utils/whatsapp";
import {
  GUIDE_PRIORITIES,
  GUIDE_SCOPES,
  GUIDE_SPACES,
  getRecommendation,
  isGuideComplete,
  togglePriority,
  type GuideAnswers,
} from "../utils/recommendation";

const INITIAL_ANSWERS: GuideAnswers = { space: null, priorities: [], scope: null };

export function NeedsGuideSection() {
  const [answers, setAnswers] = useState<GuideAnswers>(INITIAL_ANSWERS);
  const recommendation = isGuideComplete(answers) ? getRecommendation(answers) : null;

  return (
    <section id="guia" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Guía rápida"
        title="Descubre por dónde empezar en 3 pasos."
        description="Respóndenos tres preguntas y te mostramos qué nivel se ajusta a lo que buscas. Después afinamos todo según tu presupuesto."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-9 rounded-xl bg-surface p-7 shadow-soft md:p-9">
          <GuideStep number={1} title="¿Qué quieres automatizar?">
            {GUIDE_SPACES.map((space) => (
              <ChoiceChip
                key={space.value}
                selected={answers.space === space.value}
                onClick={() => setAnswers({ ...answers, space: space.value })}
              >
                {space.label}
              </ChoiceChip>
            ))}
          </GuideStep>

          <GuideStep number={2} title="¿Qué te importa más? (puedes elegir varias)">
            {GUIDE_PRIORITIES.map((priority) => (
              <ChoiceChip
                key={priority.value}
                selected={answers.priorities.includes(priority.value)}
                onClick={() =>
                  setAnswers({ ...answers, priorities: togglePriority(answers.priorities, priority.value) })
                }
              >
                {priority.label}
              </ChoiceChip>
            ))}
          </GuideStep>

          <GuideStep number={3} title="¿Qué tanto quieres automatizar?">
            {GUIDE_SCOPES.map((scope) => (
              <ChoiceChip
                key={scope.value}
                selected={answers.scope === scope.value}
                onClick={() => setAnswers({ ...answers, scope: scope.value })}
              >
                <span className="flex flex-col items-start text-left">
                  <span>{scope.label}</span>
                  <span className="text-xs font-normal opacity-70">{scope.description}</span>
                </span>
              </ChoiceChip>
            ))}
          </GuideStep>
        </div>

        <aside
          aria-live="polite"
          className="flex flex-col justify-between gap-6 rounded-xl bg-night p-7 text-night-ink-dim md:p-9"
        >
          {recommendation ? (
            <>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Te recomendamos</span>
                <h3 className="text-3xl text-night-ink">{recommendation.level.name}</h3>
                <p className="text-night-ink-dim">{recommendation.level.tagline}</p>
                <p className="text-sm text-night-ink-dim">
                  Pensado para lo que te importa: <strong className="text-night-ink">{recommendation.prioritiesLabel}</strong>.
                </p>
                <ul className="flex flex-col gap-2.5">
                  {recommendation.level.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonExternalLink href={buildWhatsappUrl(recommendation.whatsappMessage)} variant="whatsapp">
                  <WhatsappIcon /> Hablar por WhatsApp
                </ButtonExternalLink>
                <ButtonLink href={`${SCHEDULE_PATH}#formulario`} variant="outline-light">
                  Dejar mis datos
                </ButtonLink>
                <Button variant="ghost" className="text-night-ink-dim hover:bg-white/10 hover:text-night-ink" onClick={() => setAnswers(INITIAL_ANSWERS)}>
                  Empezar de nuevo
                </Button>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-start justify-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent">
                <Icon name="compass" />
              </span>
              <h3 className="text-2xl text-night-ink">Tu recomendación aparecerá aquí</h3>
              <p className="text-night-ink-dim">
                Responde las tres preguntas y te decimos con qué nivel te conviene empezar. Es orientativo y sin compromiso.
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

function GuideStep({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="flex flex-col gap-4">
      <legend className="mb-4 flex items-center gap-3 font-heading text-lg font-semibold text-ink">
        <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-night text-sm text-accent">{number}</span>
        {title}
      </legend>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </fieldset>
  );
}

function ChoiceChip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={clsx(
        "cursor-pointer rounded-pill border px-4 py-2.5 text-sm font-medium transition-colors",
        selected
          ? "border-accent bg-accent text-ink shadow-glow"
          : "border-line bg-surface text-ink-dim hover:border-line-strong hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}

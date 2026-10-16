import type { LevelItem } from "@/modules/landing/utils/landingContent";
import { LEVELS } from "@/modules/landing/utils/landingContent";

export const GUIDE_SPACES = [
  { value: "casa", label: "Mi casa" },
  { value: "apartamento", label: "Mi apartamento" },
  { value: "negocio", label: "Mi negocio" },
  { value: "oficina", label: "Mi oficina" },
] as const;

export const GUIDE_PRIORITIES = [
  { value: "luces", label: "Luces" },
  { value: "aire", label: "Aires acondicionados" },
  { value: "seguridad", label: "Seguridad y cámaras" },
  { value: "accesos", label: "Puertas y cerraduras" },
  { value: "cortinas", label: "Cortinas y persianas" },
  { value: "energia", label: "Ahorro de energía" },
  { value: "sensores", label: "Sensores y alertas" },
  { value: "audio", label: "Audio y entretenimiento" },
] as const;

export const GUIDE_SCOPES = [
  { value: "poco", label: "Un par de cosas para empezar", description: "Lo más simple, sin complicarme." },
  { value: "varias", label: "Varias zonas o funciones", description: "Que se sienta realmente inteligente." },
  { value: "todo", label: "Lo más completo posible", description: "Todo coordinado y a la medida." },
] as const;

export type GuideSpace = (typeof GUIDE_SPACES)[number]["value"];
export type GuidePriority = (typeof GUIDE_PRIORITIES)[number]["value"];
export type GuideScope = (typeof GUIDE_SCOPES)[number]["value"];

export interface GuideAnswers {
  space: GuideSpace | null;
  priorities: GuidePriority[];
  scope: GuideScope | null;
}

export interface Recommendation {
  level: LevelItem;
  prioritiesLabel: string;
  whatsappMessage: string;
}

const SCOPE_TO_LEVEL_INDEX: Record<GuideScope, number> = { poco: 0, varias: 1, todo: 2 };

// Many priorities push the suggestion one level up, so a short "just lights" scope with six wishes isn't undersold.
const PRIORITIES_THAT_RAISE_LEVEL = 5;

export function isGuideComplete(answers: GuideAnswers): answers is GuideAnswers & { space: GuideSpace; scope: GuideScope } {
  return answers.space !== null && answers.scope !== null && answers.priorities.length > 0;
}

export function getRecommendation(answers: GuideAnswers & { space: GuideSpace; scope: GuideScope }): Recommendation {
  const baseIndex = SCOPE_TO_LEVEL_INDEX[answers.scope];
  const raisedIndex = answers.priorities.length >= PRIORITIES_THAT_RAISE_LEVEL ? baseIndex + 1 : baseIndex;
  const level = LEVELS[Math.min(raisedIndex, LEVELS.length - 1)];

  const prioritiesLabel = answers.priorities
    .map((priority) => GUIDE_PRIORITIES.find((option) => option.value === priority)?.label.toLowerCase())
    .join(", ");
  const spaceLabel = GUIDE_SPACES.find((option) => option.value === answers.space)?.label.toLowerCase();

  return {
    level,
    prioritiesLabel,
    whatsappMessage: `Hola, usé la guía de Hogaria. Quiero automatizar ${spaceLabel}: ${prioritiesLabel}. Me recomendaron el nivel "${level.name}". ¿Podemos hablar para ajustarlo a mi presupuesto?`,
  };
}

export function togglePriority(priorities: GuidePriority[], priority: GuidePriority): GuidePriority[] {
  return priorities.includes(priority)
    ? priorities.filter((current) => current !== priority)
    : [...priorities, priority];
}

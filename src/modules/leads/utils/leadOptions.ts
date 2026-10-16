export const SPACE_TYPES = ["casa", "apartamento", "negocio", "oficina", "otro"] as const;
export const BUDGET_HINTS = ["conversar", "pequeno", "mediano", "grande"] as const;
export const LEAD_STATUSES = ["nuevo", "contactado", "descartado"] as const;

export type SpaceType = (typeof SPACE_TYPES)[number];
export type BudgetHint = (typeof BUDGET_HINTS)[number];
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const SPACE_TYPE_OPTIONS: { value: SpaceType; label: string }[] = [
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "negocio", label: "Negocio o local" },
  { value: "oficina", label: "Oficina" },
  { value: "otro", label: "Otro" },
];

export const BUDGET_HINT_OPTIONS: { value: BudgetHint; label: string }[] = [
  { value: "conversar", label: "Prefiero conversarlo contigo" },
  { value: "pequeno", label: "Quiero empezar con algo pequeño" },
  { value: "mediano", label: "Un proyecto mediano" },
  { value: "grande", label: "Un proyecto completo" },
];

export const LEAD_STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "nuevo", label: "Nuevo" },
  { value: "contactado", label: "Contactado" },
  { value: "descartado", label: "Descartado" },
];

export function getOptionLabel(options: { value: string; label: string }[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

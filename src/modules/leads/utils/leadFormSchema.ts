// Single source of truth for the scheduling form: LeadForm uses it via
// zodResolver(), and POST /api/v1/leads reuses it via safeParse(). Value
// constraints mirror the CHECKs on public.leads in
// supabase/migrations/0001_create_leads_schema.sql.
import { z } from "zod";
import { BUDGET_HINTS, LEAD_STATUSES, SPACE_TYPES } from "./leadOptions";

export const PHONE_PATTERN = /^[0-9+()\s-]{7,20}$/;

export const leadFormSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre.").max(120, "El nombre es muy largo."),
  phone: z
    .string()
    .trim()
    .regex(PHONE_PATTERN, "Escribe un celular válido, ej. 300 123 4567."),
  email: z.union([z.literal(""), z.email("Escribe un correo válido.").max(254)]),
  city: z.string().trim().max(80, "La ciudad es muy larga."),
  spaceType: z.enum(SPACE_TYPES, { error: "Selecciona el tipo de espacio." }),
  budgetHint: z.enum(BUDGET_HINTS, { error: "Selecciona una opción." }),
  message: z.string().trim().max(2000, "El mensaje es muy largo."),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const leadStatusSchema = z.object({
  status: z.enum(LEAD_STATUSES, { error: "Estado inválido." }),
});

export type LeadStatusValues = z.infer<typeof leadStatusSchema>;

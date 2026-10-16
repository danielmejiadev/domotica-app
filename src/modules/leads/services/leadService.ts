import { createServerSupabaseClient } from "@/lib/supabaseClient";
import type { Tables, TablesInsert } from "@/lib/database.types";
import type { LeadFormValues, LeadStatusValues } from "../utils/leadFormSchema";

export type Lead = Tables<"leads">;

export async function createLead(values: LeadFormValues): Promise<void> {
  const supabase = await createServerSupabaseClient();
  const row: TablesInsert<"leads"> = {
    name: values.name,
    phone: values.phone,
    email: values.email || null,
    city: values.city || null,
    space_type: values.spaceType,
    budget_hint: values.budgetHint,
    message: values.message || null,
  };

  // No .select(): anon has no SELECT policy on leads, so asking for the row back would fail.
  const { error } = await supabase.from("leads").insert(row);

  if (error) {
    throw new Error(`No se pudo guardar la solicitud: ${error.message}`, { cause: error });
  }
}

export async function listLeads(): Promise<Lead[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });

  if (error) {
    throw new Error(`No se pudieron cargar las solicitudes: ${error.message}`, { cause: error });
  }

  return data;
}

export async function updateLeadStatus(leadId: number, { status }: LeadStatusValues): Promise<Lead> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("leads").update({ status }).eq("id", leadId).select().single();

  if (error) {
    throw new Error(`No se pudo actualizar la solicitud: ${error.message}`, { cause: error });
  }

  return data;
}

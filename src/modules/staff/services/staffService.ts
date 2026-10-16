import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabaseClient";
import type { Tables } from "@/lib/database.types";

export type StaffMember = Tables<"staff_members">;

/** `cache()` dedupes the lookup across the admin layout and its page within one request. */
export const getStaffMembership = cache(async (userId: string): Promise<StaffMember | null> => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("staff_members")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw new Error(`No se pudo verificar el acceso: ${error.message}`, { cause: error });
  }

  return data;
});

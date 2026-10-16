"use client";

import { useMutation } from "@tanstack/react-query";
import { ApiError, fetchJson } from "@/lib/apiClient";
import type { LeadFormValues } from "../utils/leadFormSchema";

export function useCreateLead() {
  return useMutation<{ ok: true }, ApiError, LeadFormValues>({
    mutationFn: (values: LeadFormValues) =>
      fetchJson<{ ok: true }>("/api/v1/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }),
  });
}

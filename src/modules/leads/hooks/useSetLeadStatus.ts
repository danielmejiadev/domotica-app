"use client";

import { useMutation } from "@tanstack/react-query";
import { ApiError, fetchJson } from "@/lib/apiClient";
import type { Lead } from "../services/leadService";
import type { LeadStatus } from "../utils/leadOptions";

interface SetLeadStatusVariables {
  leadId: number;
  status: LeadStatus;
}

export function useSetLeadStatus() {
  return useMutation<Lead, ApiError, SetLeadStatusVariables>({
    mutationFn: ({ leadId, status }: SetLeadStatusVariables) =>
      fetchJson<Lead>(`/api/v1/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      }),
  });
}

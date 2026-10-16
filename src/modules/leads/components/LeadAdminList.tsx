"use client";

import { useRouter } from "next/navigation";
import { Badge, type BadgeTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { useSetLeadStatus } from "../hooks/useSetLeadStatus";
import type { Lead } from "../services/leadService";
import { buildLeadWhatsappUrl, formatLeadDate } from "../utils/leadFormatters";
import {
  BUDGET_HINT_OPTIONS,
  LEAD_STATUS_OPTIONS,
  SPACE_TYPE_OPTIONS,
  getOptionLabel,
  type LeadStatus,
} from "../utils/leadOptions";

const STATUS_TONES: Record<string, BadgeTone> = {
  nuevo: "warning",
  contactado: "success",
  descartado: "neutral",
};

export function LeadAdminList({ initialLeads }: { initialLeads: Lead[] }) {
  const router = useRouter();
  const toastManager = useToast();
  const setStatusMutation = useSetLeadStatus();

  function handleStatusChange(leadId: number, status: LeadStatus) {
    setStatusMutation.mutate(
      { leadId, status },
      {
        onSuccess: () => router.refresh(),
        onError: (error) => toastManager.add({ title: "No se pudo actualizar", description: error.message }),
      }
    );
  }

  if (initialLeads.length === 0) {
    return <EmptyState message="Todavía no hay solicitudes. Cuando alguien llene el formulario, aparecerá aquí." />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Solicitudes ({initialLeads.length})</h1>
      {initialLeads.map((lead) => (
        <Card key={lead.id} className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="text-lg">{lead.name}</h2>
                <Badge tone={STATUS_TONES[lead.status] ?? "neutral"}>
                  {getOptionLabel(LEAD_STATUS_OPTIONS, lead.status)}
                </Badge>
              </div>
              <p className="text-sm">{formatLeadDate(lead.created_at)}</p>
            </div>
            <div className="w-44">
              <Select
                value={lead.status}
                onValueChange={(status) => handleStatusChange(lead.id, status as LeadStatus)}
                options={LEAD_STATUS_OPTIONS}
              />
            </div>
          </div>

          <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-ink-faint">Celular</dt>
              <dd className="flex items-center gap-3 text-ink">
                <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                <a href={buildLeadWhatsappUrl(lead.phone)} target="_blank" rel="noopener noreferrer" className="text-whatsapp-strong">
                  WhatsApp
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-ink-faint">Correo</dt>
              <dd className="text-ink">{lead.email ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Espacio</dt>
              <dd className="text-ink">{getOptionLabel(SPACE_TYPE_OPTIONS, lead.space_type)}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Presupuesto</dt>
              <dd className="text-ink">{getOptionLabel(BUDGET_HINT_OPTIONS, lead.budget_hint)}</dd>
            </div>
            <div>
              <dt className="text-ink-faint">Ciudad</dt>
              <dd className="text-ink">{lead.city ?? "—"}</dd>
            </div>
          </dl>

          {lead.message ? <p className="rounded-md bg-surface-2 p-3 text-sm text-ink">{lead.message}</p> : null}
        </Card>
      ))}
    </div>
  );
}

import { listLeads } from "../services/leadService";
import { LeadAdminList } from "./LeadAdminList";

export async function AdminLeadsPage() {
  const leads = await listLeads();

  return <LeadAdminList initialLeads={leads} />;
}

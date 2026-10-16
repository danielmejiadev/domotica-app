import { type NextRequest, NextResponse } from "next/server";
import { authGuardErrorResponse, requireStaff } from "@/lib/api/v1/requireStaff";
import { fieldErrorsResponse } from "@/lib/api/v1/fieldErrorsResponse";
import { updateLeadStatus } from "@/modules/leads/services/leadService";
import { leadStatusSchema } from "@/modules/leads/utils/leadFormSchema";

export async function PATCH(request: NextRequest, context: RouteContext<"/api/v1/leads/[id]">) {
  try {
    await requireStaff();
    const { id } = await context.params;
    const leadId = Number(id);

    if (!Number.isInteger(leadId)) {
      return NextResponse.json({ error: "Id inválido." }, { status: 400 });
    }

    const parsed = leadStatusSchema.safeParse(await request.json().catch(() => null));

    if (!parsed.success) {
      return fieldErrorsResponse(parsed.error);
    }

    return NextResponse.json(await updateLeadStatus(leadId, parsed.data));
  } catch (error) {
    return (
      authGuardErrorResponse(error) ??
      NextResponse.json({ error: (error as Error).message }, { status: 500 })
    );
  }
}

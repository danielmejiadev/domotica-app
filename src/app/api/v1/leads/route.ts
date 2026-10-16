import { type NextRequest, NextResponse } from "next/server";
import { fieldErrorsResponse } from "@/lib/api/v1/fieldErrorsResponse";
import { createLead } from "@/modules/leads/services/leadService";
import { leadFormSchema } from "@/modules/leads/utils/leadFormSchema";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = leadFormSchema.safeParse(body);

  if (!parsed.success) {
    return fieldErrorsResponse(parsed.error);
  }

  try {
    await createLead(parsed.data);
  } catch {
    return NextResponse.json(
      { error: "No pudimos guardar tus datos. Escríbenos por WhatsApp y te atendemos enseguida." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}

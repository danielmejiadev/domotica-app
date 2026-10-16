import type { ReactNode } from "react";
import { notFound, redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabaseClient";
import { getStaffMembership } from "@/modules/staff/services/staffService";
import { LogoutButton } from "@/modules/auth/components/LogoutButton";
import { BrandLogo } from "@/modules/site/components/BrandLogo";

// Gates everything under /admin except /admin/login (deliberately outside this "(protected)" route group). No proxy.ts here: it forces the
// nodejs runtime and breaks on Cloudflare Workers (cloudflare/workers-sdk#13755, an open unresolved bug). This is UX convenience only;
// RLS on each table is the real security.
export default async function ProtectedAdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/admin/login");
  }

  const staffMember = await getStaffMembership(data.claims.sub);

  if (!staffMember) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <header className="flex items-center justify-between border-b border-line bg-surface px-6 py-4">
        <span className="flex items-center gap-3">
          <BrandLogo />
          <span className="text-sm text-ink-dim">Panel</span>
        </span>
        <LogoutButton />
      </header>
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-8">{children}</main>
    </div>
  );
}

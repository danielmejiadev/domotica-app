import type { ReactNode } from "react";
import { SiteHeader } from "@/modules/site/components/SiteHeader";
import { SiteFooter } from "@/modules/site/components/SiteFooter";
import { WhatsappFloatingButton } from "@/modules/site/components/WhatsappFloatingButton";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsappFloatingButton />
    </div>
  );
}

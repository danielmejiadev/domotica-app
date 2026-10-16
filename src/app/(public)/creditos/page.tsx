import type { Metadata } from "next";
import { CreditsPage } from "@/modules/site/components/CreditsPage";

export const metadata: Metadata = { title: "Créditos de imágenes" };

export default function Page() {
  return <CreditsPage />;
}

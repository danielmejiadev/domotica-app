import type { Metadata } from "next";
import { WhyDomoticaPage } from "@/modules/why/components/WhyDomoticaPage";

export const metadata: Metadata = {
  title: "¿Por qué domótica?",
  description: "Qué es la domótica, cómo funciona y por qué tiene sentido para tu casa, negocio u oficina en Colombia.",
};

export default function Page() {
  return <WhyDomoticaPage />;
}

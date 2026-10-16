import type { Metadata } from "next";
import { SchedulePage } from "@/modules/leads/components/SchedulePage";

export const metadata: Metadata = {
  title: "Agendar asesoría",
  description: "Escríbenos por WhatsApp o déjanos tus datos y te ayudamos a elegir la mejor opción según tu presupuesto.",
};

export default function Page() {
  return <SchedulePage />;
}

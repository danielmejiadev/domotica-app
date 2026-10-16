import { WhatsappIcon } from "@/components/ui/Icon";
import { buildWhatsappUrl } from "../utils/whatsapp";

export function WhatsappFloatingButton() {
  return (
    <a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-pill bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 hover:bg-whatsapp-strong"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}

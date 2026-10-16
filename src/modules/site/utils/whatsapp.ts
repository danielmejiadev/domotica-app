import { WHATSAPP_NUMBER } from "./siteConfig";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, me interesa automatizar mi espacio con domótica. ¿Podemos hablar para ver qué necesito y mi presupuesto?";

export function buildWhatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

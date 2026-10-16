export const BRAND_NAME = "Hogaria";
export const SITE_TAGLINE = "Domótica a la medida en Colombia";
export const SITE_DESCRIPTION =
  "Te guiamos, te ayudamos a elegir según tu presupuesto e implementamos domótica de alta calidad para tu casa, negocio u oficina: luces, aires, puertas, sensores y más.";

// Placeholders until the real contact data is defined.
export const WHATSAPP_NUMBER = "573000000000";
export const CONTACT_EMAIL = "hola@hogaria.co";
export const SERVICE_AREA = "Colombia";

export interface NavigationLink {
  label: string;
  href: string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  { label: "¿Por qué domótica?", href: "/por-que-domotica" },
  { label: "Casas", href: "/soluciones/casas" },
  { label: "Negocios", href: "/soluciones/negocios" },
  { label: "Oficinas", href: "/soluciones/oficinas" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Preguntas", href: "/#preguntas" },
];

export const SCHEDULE_PATH = "/agendar";

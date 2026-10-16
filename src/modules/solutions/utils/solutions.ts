import type { IconName } from "@/components/ui/Icon";

export type SolutionSlug = "casas" | "negocios" | "oficinas";

export interface SolutionExample {
  level: string;
  description: string;
}

export interface Solution {
  slug: SolutionSlug;
  icon: IconName;
  name: string;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  intro: string;
  benefits: string[];
  examples: SolutionExample[];
  closing: string;
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "casas",
    icon: "home",
    name: "Casas y apartamentos",
    headline: "Una casa que se adapta a tu forma de vivir.",
    summary: "Desde controlar un par de luces hasta una casa que se acomoda sola a cada momento del día.",
    image: "/images/casa-timbre.jpg",
    imageAlt: "Timbre con cámara y cerradura en la puerta de entrada de una casa",
    intro:
      "Tu casa debería trabajar para ti, no al revés. Automatizamos desde lo más sencillo hasta la vivienda completa, siempre empezando por lo que más te importa.",
    benefits: [
      "Luces y aires desde el celular, con horarios y escenas",
      "Cortinas que se abren y cierran solas",
      "Cerraduras, sensores y cámaras para dormir tranquilo",
      "Alertas de fugas de agua, humo o gas",
      "Funciona también en apartamentos y arriendos, sin obra",
    ],
    examples: [
      { level: "Para empezar", description: "Luces inteligentes en la sala y la habitación, y el aire controlado desde el celular." },
      { level: "Hogar conectado", description: "Escenas de “llegué”, “me voy” y “buenas noches”, cortinas motorizadas y cerradura inteligente." },
      { level: "Casa completa", description: "Iluminación, clima, accesos, seguridad, audio y energía coordinados en un solo sistema." },
    ],
    closing: "Cuéntanos cómo es tu casa y cuánto quieres invertir. Armamos la mejor opción para ti.",
  },
  {
    slug: "negocios",
    icon: "store",
    name: "Negocios y locales",
    headline: "Menos gastos, más control, mejor experiencia para tus clientes.",
    summary: "Restaurantes, tiendas, consultorios, hoteles y hospedajes que se administran de forma más inteligente.",
    image: "/images/negocio-asistentes.jpg",
    imageAlt: "Asistentes de voz y pantalla inteligente sobre una mesa",
    intro:
      "En un negocio cada detalle cuenta: el ambiente, el consumo de energía y la seguridad. La domótica te ayuda a cuidar los tres sin depender de que alguien se acuerde de apagar o cerrar.",
    benefits: [
      "Ambientes de luz y música distintos para el día y la noche",
      "Aires y luces que se apagan solos al cerrar",
      "Control de accesos y claves temporales para empleados o huéspedes",
      "Alertas de sensores y cámaras en tu celular",
      "Ideal para restaurantes, tiendas, consultorios, hoteles y hospedajes tipo Airbnb",
    ],
    examples: [
      { level: "Para empezar", description: "Programar luces de fachada y avisos, y apagar el aire automáticamente al cerrar." },
      { level: "Negocio conectado", description: "Escenas de ambiente por horario, control de accesos y sensores de apertura." },
      { level: "Operación completa", description: "Varias sedes o habitaciones controladas desde un solo lugar, con reportes de consumo." },
    ],
    closing: "Dinos qué tipo de negocio tienes y qué te gustaría controlar mejor. Te proponemos lo que tiene sentido para tu operación.",
  },
  {
    slug: "oficinas",
    icon: "building",
    name: "Oficinas",
    headline: "Espacios de trabajo cómodos y eficientes.",
    summary: "Salas de reuniones, consultorios y oficinas que se ajustan solos y cuidan tu energía.",
    image: "/images/oficina-panel.png",
    imageAlt: "Panel de control de domótica con luces, persianas, clima y consumo de energía",
    intro:
      "Una oficina cómoda se nota en el ánimo y en la productividad. Automatizamos clima, luz y accesos para que el espacio esté listo cuando tu equipo llega y se apague cuando se va.",
    benefits: [
      "Clima y luz que se ajustan según la hora y la ocupación",
      "Salas de reuniones listas con una sola escena",
      "Control de accesos para equipo, visitantes y proveedores",
      "Menos consumo de energía en horas sin uso",
      "Sensores y cámaras para proteger equipos y archivos",
    ],
    examples: [
      { level: "Para empezar", description: "Aires y luces con horario de apertura y cierre." },
      { level: "Oficina conectada", description: "Escenas para reuniones y presentaciones, y accesos con clave o tarjeta." },
      { level: "Edificio inteligente", description: "Varias áreas y pisos coordinados, con monitoreo de energía y alertas." },
    ],
    closing: "Cuéntanos cuántas personas trabajan en tu oficina y qué te gustaría mejorar. Nos adaptamos a tu presupuesto.",
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}

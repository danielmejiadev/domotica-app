import type { IconName } from "@/components/ui/Icon";

export interface WhyItem {
  icon: IconName;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: WhyItem[] = [
  {
    icon: "sensor",
    title: "Sensores: sienten",
    description: "Detectan movimiento, temperatura, apertura de puertas, humo, gas o agua. Son los “ojos y oídos” de tu espacio.",
  },
  {
    icon: "wifi",
    title: "El cerebro: decide",
    description: "Un controlador recibe lo que sienten los sensores y aplica las reglas que tú definiste: “si pasa esto, haz aquello”.",
  },
  {
    icon: "bolt",
    title: "Actuadores: hacen",
    description: "Encienden luces, ajustan el aire, abren cortinas o cierran cerraduras. Son las “manos” del sistema.",
  },
];

export const CONTROL_WAYS: WhyItem[] = [
  { icon: "phone", title: "Desde el celular", description: "Una app para controlar todo, estés en casa o de viaje." },
  { icon: "speaker", title: "Con tu voz", description: "Pídele a un asistente de voz que encienda, apague o cambie la escena." },
  { icon: "clock", title: "De forma automática", description: "Horarios, presencia, clima o la hora del día disparan acciones sin que hagas nada." },
  { icon: "bulb", title: "Con el interruptor de siempre", description: "Nada se vuelve inútil: el interruptor sigue funcionando como siempre." },
];

export const COLOMBIA_REASONS: WhyItem[] = [
  {
    icon: "snowflake",
    title: "Climas muy distintos",
    description: "Del calor de la costa al frío de las ciudades de altura, controlar bien el clima cambia el confort y el consumo.",
  },
  {
    icon: "bolt",
    title: "La energía cuenta",
    description: "Saber cuánto gastas y evitar dejar luces o aires encendidos sin necesidad se nota en la factura.",
  },
  {
    icon: "shield",
    title: "Tranquilidad en tu entorno",
    description: "Cerraduras, sensores y cámaras que te avisan en el celular suman una capa de seguridad a tu rutina.",
  },
  {
    icon: "building",
    title: "Apartamentos y arriendos turísticos",
    description: "Claves temporales para huéspedes y control remoto hacen más fácil administrar un hospedaje.",
  },
  {
    icon: "home",
    title: "Construcciones y remodelaciones",
    description: "Dejar la casa preparada desde la obra sale más fácil y limpio que añadirlo después.",
  },
  {
    icon: "spark",
    title: "Un mercado que apenas empieza",
    description: "Muy pocas personas lo conocen, así que quien se anticipa disfruta antes de una vivienda o negocio más moderno.",
  },
];

export const TECHNOLOGIES = [
  { name: "Inalámbrica (Wi‑Fi, Zigbee, Matter)", description: "Rápida de instalar y sin obra. Ideal para casas, apartamentos y arriendos." },
  { name: "Cableada", description: "La más robusta y estable. Recomendada para construcciones nuevas, remodelaciones y proyectos grandes." },
  { name: "Híbrida", description: "Lo mejor de ambas: cable donde importa y conexión inalámbrica donde es más práctico." },
];

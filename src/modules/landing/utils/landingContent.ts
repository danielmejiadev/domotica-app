import type { IconName } from "@/components/ui/Icon";

export interface BenefitItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface MythItem {
  myth: string;
  reality: string;
}

export interface CapabilityItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface LevelItem {
  name: string;
  tagline: string;
  idealFor: string;
  features: string[];
}

export interface ProcessStep {
  icon: IconName;
  title: string;
  description: string;
}

export interface TimelineMoment {
  time: string;
  title: string;
  description: string;
  icon: IconName;
}

export const BENEFITS: BenefitItem[] = [
  {
    icon: "heart",
    title: "Comodidad real",
    description:
      "Luces, aires y cortinas responden a una escena, a tu voz o a tu celular. Llegas y todo ya está como te gusta.",
  },
  {
    icon: "bolt",
    title: "Gasta solo lo necesario",
    description:
      "Apagar lo que nadie usa y programar el aire a la hora justa evita consumo de energía que ni notabas que perdías.",
  },
  {
    icon: "shield",
    title: "Seguridad que te avisa",
    description:
      "Cerraduras, cámaras y sensores te cuentan qué pasa en tu espacio, estés en la sala o al otro lado del país.",
  },
  {
    icon: "droplet",
    title: "Tranquilidad ante imprevistos",
    description:
      "Una fuga de agua, humo o una puerta abierta te llegan como alerta al instante, no cuando ya es tarde.",
  },
];

export const MYTHS: MythItem[] = [
  {
    myth: "“Eso es solo para mansiones y millonarios.”",
    reality:
      "Se puede empezar con un par de luces o un aire acondicionado y crecer cuando quieras. Armamos el proyecto según tu presupuesto.",
  },
  {
    myth: "“Tendría que romper paredes y hacer obra.”",
    reality:
      "Gran parte de las soluciones son inalámbricas y se instalan sin obra. Si estás construyendo o remodelando, dejarlo preparado sale aún mejor.",
  },
  {
    myth: "“Si se cae el internet, no sirve nada.”",
    reality:
      "Diseñamos para que lo básico siga funcionando: los interruptores siguen sirviendo y las automatizaciones importantes no dependen de la nube.",
  },
  {
    myth: "“Es complicado, mi familia no lo va a usar.”",
    reality:
      "Se maneja con una app simple, con la voz o con el interruptor de toda la vida. Te enseñamos a usarlo y lo dejamos fácil para todos.",
  },
  {
    myth: "“Me van a vender aparatos que no necesito.”",
    reality:
      "Primero te escuchamos y te guiamos a elegir lo que de verdad te sirve. Priorizamos qué hacer primero y qué puede esperar.",
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    icon: "bulb",
    title: "Iluminación",
    description: "Enciende, regula e intercambia escenas de luz: cine, cena, descanso o llegada.",
  },
  {
    icon: "snowflake",
    title: "Aires y clima",
    description: "Controla aires acondicionados y ventiladores desde el celular, con horarios y apagado automático.",
  },
  {
    icon: "blinds",
    title: "Cortinas y persianas",
    description: "Se abren con el amanecer y se cierran con el calor de la tarde, sin levantarte.",
  },
  {
    icon: "door",
    title: "Puertas y accesos",
    description: "Cerraduras inteligentes, claves temporales para visitas y apertura desde donde estés.",
  },
  {
    icon: "camera",
    title: "Cámaras y seguridad",
    description: "Mira tu espacio en vivo, recibe avisos de movimiento y revisa lo que pasó.",
  },
  {
    icon: "sensor",
    title: "Sensores",
    description: "Movimiento, apertura de puertas, humo, gas y fugas de agua: tu espacio siente y te avisa.",
  },
  {
    icon: "bolt",
    title: "Energía",
    description: "Mide el consumo, detecta lo que gasta de más y aprovecha mejor la energía solar si la tienes.",
  },
  {
    icon: "speaker",
    title: "Audio y entretenimiento",
    description: "Música por zonas, sala de cine y control de todo con una sola app o con tu voz.",
  },
  {
    icon: "sprout",
    title: "Riego y exteriores",
    description: "Jardín que se riega solo, luces de fachada y control de portones o garaje.",
  },
];

export const LEVELS: LevelItem[] = [
  {
    name: "Primer paso",
    tagline: "Prueba la domótica sin complicarte.",
    idealFor: "Quieres empezar con lo más simple.",
    features: [
      "Luces inteligentes en las zonas que más usas",
      "Control del aire acondicionado desde el celular",
      "Horarios y escenas básicas",
      "Una app sencilla para toda la familia",
    ],
  },
  {
    name: "Espacio conectado",
    tagline: "Varias zonas trabajando juntas.",
    idealFor: "Quieres que tu espacio se sienta realmente inteligente.",
    features: [
      "Escenas de iluminación por ambiente",
      "Cortinas o persianas motorizadas",
      "Cerradura inteligente y sensores de movimiento y apertura",
      "Control por voz y rutinas de entrada y salida",
    ],
  },
  {
    name: "Inteligencia completa",
    tagline: "Todo coordinado, diseñado a tu medida.",
    idealFor: "Casas, oficinas y negocios que quieren el sistema más completo.",
    features: [
      "Aires, luces, cortinas, accesos, cámaras y sensores en un solo sistema",
      "Automatizaciones por presencia, hora y clima",
      "Monitoreo de energía y alertas de seguridad",
      "Diseño e integración a medida, con cableado cuando haga falta",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: "chat",
    title: "Conversamos",
    description:
      "Nos cuentas cómo vives o trabajas, qué te molesta y cuánto quieres invertir. Sin tecnicismos y sin compromiso.",
  },
  {
    icon: "compass",
    title: "Te guiamos a elegir",
    description:
      "Te explicamos las opciones en palabras claras y armamos una propuesta por prioridades: qué hacer primero y qué dejar para después.",
  },
  {
    icon: "wrench",
    title: "Implementamos con calidad",
    description:
      "Instalamos, configuramos y probamos todo con orden y buenos acabados, para que funcione desde el primer día.",
  },
  {
    icon: "heart",
    title: "Te acompañamos",
    description:
      "Te enseñamos a usarlo, resolvemos dudas y, cuando quieras, hacemos crecer el sistema con nuevas automatizaciones.",
  },
];

export const DAY_TIMELINE: TimelineMoment[] = [
  {
    time: "6:30",
    title: "Amanece",
    description: "Las cortinas se abren poco a poco y las luces suben con un tono cálido.",
    icon: "sun",
  },
  {
    time: "8:00",
    title: "Sales de casa",
    description: "Un toque apaga las luces, baja el aire y asegura la puerta.",
    icon: "door",
  },
  {
    time: "13:00",
    title: "Mientras no estás",
    description: "Sensores y cámaras vigilan. Si algo se mueve, te llega un aviso.",
    icon: "shield",
  },
  {
    time: "18:30",
    title: "Llegas",
    description: "La puerta te abre, las luces te reciben y el aire ya está en su punto.",
    icon: "home",
  },
  {
    time: "22:00",
    title: "Buenas noches",
    description: "Una sola orden apaga todo, revisa que esté cerrado y deja el aire en modo descanso.",
    icon: "moon",
  },
];

export const FAQ_ITEMS = [
  {
    value: "obra",
    title: "¿Tengo que hacer obra o romper paredes?",
    content:
      "Normalmente no. Muchas soluciones son inalámbricas y se instalan en los interruptores y tomas que ya tienes. Si estás construyendo o remodelando, es el momento ideal para dejar cableado y que el sistema quede aún más robusto.",
  },
  {
    value: "internet",
    title: "¿Funciona si se va el internet o la luz?",
    content:
      "Diseñamos para que lo esencial no dependa de internet: los interruptores siguen funcionando de forma manual y las automatizaciones importantes corren de forma local. Si hay un corte de energía, el sistema se reinicia solo cuando vuelve.",
  },
  {
    value: "presupuesto",
    title: "¿Cuánto cuesta?",
    content:
      "Depende de qué quieras automatizar y de qué tan completo lo quieras, por eso no manejamos paquetes cerrados. Cuéntanos qué necesitas y cuánto quieres invertir, y armamos la opción que mejor se adapte a tu presupuesto. Se puede empezar pequeño y crecer.",
  },
  {
    value: "arriendo",
    title: "¿Sirve si vivo en arriendo o en apartamento?",
    content:
      "Sí. Hay soluciones que no requieren obra y que puedes llevarte contigo si te mudas: luces, enchufes, control de aires, sensores y cerraduras que no dañan la puerta.",
  },
  {
    value: "familia",
    title: "¿Será difícil de usar para mi familia o mis empleados?",
    content:
      "No. Todo se puede manejar con una app sencilla, con la voz o con el interruptor de siempre. Al terminar te enseñamos a usarlo y lo dejamos simple para cualquier persona.",
  },
  {
    value: "marcas",
    title: "¿Con qué marcas y tecnología trabajan?",
    content:
      "Elegimos la tecnología según tu caso, no al revés: soluciones reconocidas, con buen soporte y que se pueden ampliar después sin quedar amarrado a un solo proveedor.",
  },
  {
    value: "ciudades",
    title: "¿Atienden en toda Colombia?",
    content:
      "Atendemos proyectos en Colombia. Escríbenos con tu ciudad y coordinamos la asesoría y la instalación según dónde estés.",
  },
];

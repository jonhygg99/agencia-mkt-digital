import {
  URL_AGENCIA_SEO,
  URL_CONSULTORIA_SEO,
} from "@/app/utils/constants/navigation-links";
import { getSchemaService } from "@/app/utils/schema/utils";
import { Question } from "@/app/utils/interface/question";
import TypingAnimation from "@/app/ui/elements/typing-animation";
import { ReasonItem } from "@/app/utils/interface/reason";
import AttractionIcon from "@/app/ui/icons/bubble/attraction";
import RoiIcon from "@/app/ui/icons/bubble/roi";
import TrustIcon from "@/app/ui/icons/bubble/trust";
import UserExperienceIcon from "@/app/ui/icons/bubble/user-experience";
import { PriceCard } from "@/app/utils/interface/pricing";
import { TimelineSteps } from "@/app/utils/interface/timeline";
import { FaqItem } from "@/app/utils/interface/faq";
import { BreadCrumb, ServiceDetailsSchema } from "@/app/utils/interface/schema";
import {
  CATEGORY_SEO,
  SERVICE_CONSULTORIA_SEO_RATING_COUNT,
  SERVICE_CONSULTORIA_SEO_RATING_VALUE,
  SERVICE_DESCRIPTION_CONSULTORIA_SEO,
  SERVICE_EXPECTED_DURATION_CONSULTORIA_SEO,
  SERVICE_ID_CONSULTORIA_SEO,
  SERVICE_NAME_CONSULTORIA_SEO,
  SERVICE_OUTPUT_CONSULTORIA_SEO,
  SERVICE_TYPE_CONSULTORIA_SEO,
} from "@/app/utils/constants/schema";
import { IMAGE_SCHEMA_CONSULTORIA_SEO } from "@/app/utils/constants/image";
import { PageServiceData } from "@/app/utils/interface/page";

const SERVICE = "Consultoría SEO";

const TITLE_HERO = (
  <p>
    Nuestra <span className="custom-title">Consultoría SEO</span> está diseñada
    para adaptarse a tus necesidades y ayudarte a{" "}
    <TypingAnimation
      texts={[
        "optimizar tu estrategia digital",
        "mejorar tu posicionamiento en buscadores",
        "impulsar el crecimiento de tu negocio",
      ]}
      className="custom-title"
    />
  </p>
);

/*
 *
 *  Question Section
 *
 */

const QUESTION_SERVICE: Question = {
  question: "¿Por qué invertir en Consultoría SEO?",
  boldAnswer:
    "Porque te proporciona estrategias personalizadas para tu negocio.",
  answer:
    "Es fundamental para optimizar tu presencia en línea y alcanzar tus objetivos.",
  boldConclusion: "Aprovecha la experiencia",
  conclusion: " y no dejes que la competencia te supere.",
};

/*
 *
 *  Reasons of ${SERVICE} Section
 *
 */

const TITLE_REASONS = (
  <p>
    Razones Clave por las que la{" "}
    <span className="custom-title">{SERVICE} es Esencial</span> para Tu Marca
  </p>
);

const REASON_ITEMS_SERVICE: ReasonItem[] = [
  {
    icon: AttractionIcon,
    title: "Estrategias Personalizadas",
    description:
      "Enfoque adaptado a las necesidades específicas de tu negocio, lo que te permite implementar estrategias que realmente funcionen para tu mercado y audiencia.",
  },
  {
    icon: TrustIcon,
    title: "Análisis Profundo del Sitio",
    description:
      "Un consultor SEO realiza un análisis exhaustivo de tu sitio web, identificando problemas técnicos, de contenido y de usabilidad que puedan estar afectando a tu rendimiento.",
  },
  {
    icon: UserExperienceIcon,
    title: "Mejora de la Visibilidad",
    description:
      "Se centra en optimizar tu sitio para que aparezca en las primeras posiciones de los resultados de búsqueda, aumentando así tu visibilidad y atrayendo más tráfico orgánico.",
  },
  {
    icon: RoiIcon,
    title: "Adaptación al Algoritmo",
    description:
      "Los motores de búsqueda actualizan constantemente sus algoritmos. Te ayudamos a mantenerte al día con estos cambios y a ajustar tu estrategia para seguir siendo competitivo.",
  },
];

/*
 *
 *  Parallax Image Section
 *
 */

const IMAGE_PARALLAX_URL = "../parallax-image/posicionamiento-seo.webp";

const TITLE_PARALLAX =
  "APROVECHA EL POTENCIAL DE TU SITIO CON UNA CONSULTORÍA SEO";

const TEXT_PARALLAX =
  "Descubrir áreas de mejora te permitirá sobresalir en un entorno digital saturado.";

/*
 *
 *  Pricing Section
 *
 */

const TITLE_PRICING = (
  <h2 className="title-pricing">
    Precios Competitivos para una{" "}
    <span className="custom-title">{SERVICE}</span>
  </h2>
);

export const PRICE_CARD_SERVICE: PriceCard[] = [
  {
    title: "Consultoría SEO",
    price: "120",
    description:
      "Optimiza tu estrategia digital y descubre oportunidades para mejorar tu rendimiento en línea.",
    features: [
      {
        text: "Análisis exhaustivo de tu sitio web",
        included: true,
      },
      {
        text: "Identificación de oportunidades de mejora",
        included: true,
      },
      {
        text: "Recomendaciones personalizadas para tu negocio",
        included: true,
      },
      {
        text: "Asesoramiento sobre mejores prácticas SEO",
        included: true,
      },
      {
        text: "Informe detallado con acciones a seguir",
        included: true,
      },
    ],
  },
];

/*
 *
 *  Timeline Section
 *
 */

const DESCRIPTION_TIMELINE =
  "Nuestro proceso de consultoría SEO está diseñado para ofrecerte una visión clara y detallada de la salud\
 de tu sitio web. A través de un enfoque metódico y estratégico, identificamos áreas de mejora y te proporcionamos\
 recomendaciones prácticas para optimizar tu presencia digital. Cada etapa de nuestra consultoría está enfocada en\
 maximizar tu visibilidad en línea y potenciar el rendimiento de tu negocio.";

const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Inicial",
    description:
      "Realizamos una reunión para entender tus objetivos y necesidades. Evaluamos la situación actual de tu sitio\
 web y analizamos a tus competidores, estableciendo las bases para una consultoría efectiva.",
  },
  {
    title: "Análisis Técnico del Sitio",
    description:
      "Llevamos a cabo un análisis técnico para identificar errores y problemas de usabilidad. Esto incluye la revisión\
 de la velocidad de carga, la estructura de URL y la optimización de imágenes.",
  },
  {
    title: "Evaluación de Contenido",
    description:
      "Revisamos el contenido existente en tu sitio web para determinar su relevancia y efectividad. Identificamos\
 oportunidades para mejorar la calidad y la optimización de palabras clave.",
  },
  {
    title: "Análisis de Backlinks",
    description:
      "Examinamos el perfil de enlaces de tu sitio para evaluar la calidad y cantidad de backlinks. Proporcionamos\
 recomendaciones para mejorar tu autoridad en línea.",
  },
  {
    title: "Recomendaciones Personalizadas",
    description:
      "Elaboramos un informe detallado con hallazgos y recomendaciones específicas para optimizar tu sitio. Esto\
 incluye sugerencias para SEO On-Page y mejoras técnicas.",
  },
  {
    title: "Implementación de Estrategias",
    description:
      "Te ayudamos a implementar las recomendaciones y estrategias sugeridas, asegurando que se realicen de manera\
 efectiva para maximizar los resultados.",
  },
  {
    title: "Monitoreo y Seguimiento",
    description:
      "Realizamos un seguimiento continuo del rendimiento de tu sitio web, analizando métricas clave y ajustando la\
 estrategia según sea necesario. Proporcionamos informes periódicos para mantenerte informado.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Qué es una consultoría SEO?",
    answer:
      "Una consultoría SEO es un servicio que proporciona un análisis detallado y recomendaciones personalizadas para\
 optimizar tu sitio web y mejorar su rendimiento en los motores de búsqueda.",
  },
  {
    question: "¿Cuánto tiempo tomará ver resultados?",
    answer:
      "Los resultados pueden variar según la situación actual de tu sitio web y la competencia en tu sector. Generalmente,\
 puedes comenzar a ver mejoras en el tráfico y la visibilidad en un plazo de 3 a 6 meses.",
  },
  {
    question: "¿Qué incluye el servicio de consultoría SEO?",
    answer:
      "El servicio incluye un análisis técnico del sitio, evaluación de contenido, análisis de backlinks, recomendaciones\
 personalizadas y seguimiento continuo del rendimiento.",
  },
  {
    question:
      "¿Necesito hacer cambios en mi sitio web después de la consultoría?",
    answer:
      "Sí, es recomendable implementar las recomendaciones proporcionadas durante la consultoría para maximizar los beneficios\
 y mejorar tu posicionamiento en los motores de búsqueda.",
  },
  {
    question: "¿Ofrecen seguimiento después de la consultoría?",
    answer:
      "Sí, ofrecemos seguimiento continuo y análisis de métricas clave para ajustar la estrategia según sea necesario y asegurar\
 que se logren los objetivos establecidos.",
  },
];

/*
 *
 *  Banner Section
 *
 */

const TITLE_BANNER = "DESCUBRE OPORTUNIDADES";

const TEXT_BANNER =
  "La consultoría SEO te ayuda a identificar áreas de mejora y a maximizar tu rendimiento en línea. Contáctanos para una consulta\
 gratuita y descubre cómo podemos impulsar tu negocio. ¡El futuro es tuyo!";

const breadcrumb: BreadCrumb[] = [
  {
    "@type": "ListItem",
    position: 2,
    name: "Agencia SEO",
    item: URL_AGENCIA_SEO,
  },
  {
    "@type": "ListItem",
    position: 3,
    name: SERVICE,
    item: URL_CONSULTORIA_SEO,
  },
];

export const serviceSchema = getSchemaService({
  id: SERVICE_ID_CONSULTORIA_SEO,
  services: PRICE_CARD_SERVICE,
  serviceType: SERVICE_TYPE_CONSULTORIA_SEO,
  serviceOutput: SERVICE_OUTPUT_CONSULTORIA_SEO,
  expectedDuration: SERVICE_EXPECTED_DURATION_CONSULTORIA_SEO,
  category: CATEGORY_SEO,
  name: SERVICE_NAME_CONSULTORIA_SEO,
  description: SERVICE_DESCRIPTION_CONSULTORIA_SEO,
  url: URL_CONSULTORIA_SEO,
  image: IMAGE_SCHEMA_CONSULTORIA_SEO,
  ratingValue: SERVICE_CONSULTORIA_SEO_RATING_VALUE,
  reviewCount: SERVICE_CONSULTORIA_SEO_RATING_COUNT,
});

const SCHEMA: ServiceDetailsSchema = {
  serviceSchema: serviceSchema,
  breadcrumb: breadcrumb,
  faq: FAQ_ITEMS_SERVICE,
};

/*
 *
 *  DATA Section
 *
 */

export const DATA: PageServiceData = {
  SCHEMA: SCHEMA,
  TITLE_HERO: TITLE_HERO,
  QUESTION_SERVICE: QUESTION_SERVICE,
  TITLE_REASONS: TITLE_REASONS,
  REASON_ITEMS_SERVICE: REASON_ITEMS_SERVICE,
  IMAGE_PARALLAX_URL: IMAGE_PARALLAX_URL,
  TITLE_PARALLAX: TITLE_PARALLAX,
  TEXT_PARALLAX: TEXT_PARALLAX,
  TITLE_PRICING: TITLE_PRICING,
  PRICE_CARD_SERVICE: PRICE_CARD_SERVICE,
  SERVICE: SERVICE,
  DESCRIPTION_TIMELINE: DESCRIPTION_TIMELINE,
  TIMELINE_STEPS_SERVICE: TIMELINE_STEPS_SERVICE,
  FAQ_ITEMS_SERVICE: FAQ_ITEMS_SERVICE,
  TITLE_BANNER: TITLE_BANNER,
  TEXT_BANNER: TEXT_BANNER,
};

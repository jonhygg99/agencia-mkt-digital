import {
  URL_AGENCIA_SEO,
  URL_AUDITORIA_SEO,
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
  SERVICE_AUDITORIA_SEO_RATING_COUNT,
  SERVICE_AUDITORIA_SEO_RATING_VALUE,
  SERVICE_DESCRIPTION_AUDITORIA_SEO,
  SERVICE_EXPECTED_DURATION_AUDITORIA_SEO,
  SERVICE_ID_AUDITORIA_SEO,
  SERVICE_NAME_AUDITORIA_SEO,
  SERVICE_OUTPUT_AUDITORIA_SEO,
  SERVICE_TYPE_AUDITORIA_SEO,
} from "@/app/utils/constants/schema";
import { IMAGE_SCHEMA_AUDITORIA_SEO } from "@/app/utils/constants/image";
import { PageServiceData } from "@/app/utils/interface/page";

const SERVICE = "Auditoría SEO";
const KEYWORD_PRINCIPAL = SERVICE;

const TITLE_HERO = (
  <p>
    Nuestra <span className="custom-title">{SERVICE}</span> está diseñada para
    adaptarse a tus necesidades específicas y ayudarte a{" "}
    <TypingAnimation
      texts={[
        "descubrir oportunidades personalizadas",
        "mejorar tu rendimiento en línea",
        "alcanzar tus objetivos de negocio",
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
  question: "¿Por qué invertir en Auditoría SEO?",
  boldAnswer:
    "Porque te ayuda a identificar debilidades frente a tus competidores.",
  answer:
    "Es la clave para mantenerte relevante y visible en un entorno digital saturado.",
  boldConclusion: "Mantente actualizado",
  conclusion: ", y no te quedes atrás.",
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
    title: "Identificación de Oportunidades",
    description:
      "Una auditoría SEO te ayuda a descubrir áreas de mejora en tu sitio web, lo que se traduce en un mejor rendimiento y tráfico.",
  },
  {
    icon: TrustIcon,
    title: "Autoridad y Credibilidad",
    description:
      "Los sitios web que realizan auditorías son percibidos como más confiables.\
 Una auditoría regular asegura que tu sitio esté optimizado y cumpla con las mejores prácticas.",
  },
  {
    icon: UserExperienceIcon,
    title: "Mejora de la Experiencia del Usuario",
    description:
      "Una auditoría SEO identifica problemas técnicos que pueden afectar la experiencia del usuario, mejorando así la tasa de conversión.",
  },
  {
    icon: RoiIcon,
    title: "ROI Elevado",
    description:
      "Una auditoría SEO es una inversión que puede resultar en un excelente retorno al optimizar tu sitio para atraer más tráfico orgánico.",
  },
];

/*
 *
 *  Parallax Image Section
 *
 */

const IMAGE_PARALLAX_URL = "../parallax-image/posicionamiento-seo.webp";

const TITLE_PARALLAX = "DESCUBRE OPORTUNIDADES OCULTAS CON UNA AUDITORÍA SEO";

const TEXT_PARALLAX =
  "Identificar áreas de mejora es clave para destacar en un mar de competidores.";

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
    title: "Auditoría SEO",
    price: "950",
    description:
      "Evalúa tu sitio web y descubre oportunidades para mejorar tu visibilidad en línea.",
    features: [
      {
        text: "Identificación de errores técnicos y de usabilidad",
        included: true,
      },
      {
        text: "Optimización de la velocidad de carga del sitio",
        included: true,
      },
      { text: "Revisión de la estructura de URL", included: true },
      { text: "Análisis de la competencia en el sector", included: true },
      {
        text: "Evaluación de la estrategia de contenido actual",
        included: true,
      },
      { text: "Revisión de la optimización de palabras clave", included: true },
      { text: "Análisis de backlinks y perfil de enlaces", included: true },
      {
        text: "Recomendaciones para la optimización de SEO On-Page",
        included: true,
      },
      {
        text: "Revisión de la configuración de Google Analytics y Search Console",
        included: true,
      },
      { text: "Análisis de la experiencia del usuario (UX)", included: true },
      {
        text: "Informe detallado con hallazgos y recomendaciones",
        included: true,
      },
      {
        text: "Monitoreo de métricas clave y rendimiento del sitio",
        included: true,
      },
      {
        text: "Llamada de seguimiento para discutir resultados y próximos pasos",
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
  "Nuestro proceso de auditoría SEO está diseñado para ofrecerte una visión clara y detallada de la\
 salud de tu sitio web. A través de un enfoque metódico y estratégico, identificamos áreas de mejora\
 y te proporcionamos recomendaciones prácticas para optimizar tu presencia digital. Cada etapa de\
 nuestra auditoría está enfocada en maximizar tu visibilidad en línea y potenciar el rendimiento de tu negocio.";

const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Inicial",
    description:
      "Realizamos una reunión para entender tus objetivos y necesidades. Evaluamos la situación actual de\
   Wtu sitio web y analizamos a tus competidores, estableciendo las bases para una auditoría efectiva.",
  },
  {
    title: "Análisis Técnico del Sitio",
    description:
      "Llevamos a cabo una auditoría técnica para identificar errores y problemas de usabilidad. Esto incluye\
 la revisión de la velocidad de carga, la estructura de URL y la optimización de imágenes.",
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
      "Elaboramos un informe detallado con hallazgos y recomendaciones específicas para optimizar tu sitio. Esto incluye\
 sugerencias para SEO On-Page y mejoras técnicas.",
  },
  {
    title: "Monitoreo y Seguimiento",
    description:
      "Realizamos un seguimiento continuo del rendimiento de tu sitio web, analizando métricas clave y ajustando la estrategia\
 según sea necesario. Proporcionamos informes periódicos para mantenerte informado.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Qué es una auditoría SEO?",
    answer:
      "Una auditoría SEO es un análisis exhaustivo de tu sitio web que **identifica áreas de mejora** en términos de optimización\
 para motores de búsqueda. Esto incluye la evaluación de aspectos técnicos, contenido, enlaces y más, con el objetivo de\
 maximizar tu visibilidad en línea.",
  },
  {
    question: "¿Por qué es importante realizar una auditoría SEO?",
    answer:
      "Realizar una auditoría SEO es crucial para entender la salud de tu sitio web. Te permite **identificar problemas** que\
 pueden estar afectando tu rendimiento en línea y proporciona recomendaciones para mejorar tu posicionamiento en los motores de búsqueda.",
  },
  {
    question: "¿Con qué frecuencia debo realizar una auditoría SEO?",
    answer:
      "Se recomienda realizar una auditoría SEO al menos una vez al año, o **cada vez que realices cambios significativos en tu\
 sitio web**. Esto asegura que tu estrategia de SEO se mantenga actualizada y efectiva frente a las constantes actualizaciones de\
 los algoritmos de búsqueda.",
  },
  {
    question: "¿Qué aspectos se analizan en una auditoría SEO?",
    answer:
      "En una auditoría SEO se analizan varios aspectos, incluyendo la estructura técnica del sitio, la optimización de contenido,\
 el perfil de enlaces, la velocidad de carga, la experiencia del usuario y la configuración de herramientas analíticas como Google\
 Analytics y Search Console.",
  },
  {
    question: "¿Recibiré un informe después de la auditoría SEO?",
    answer:
      "**Sí, al finalizar la auditoría SEO**, recibirás un informe detallado que incluye hallazgos, análisis y recomendaciones específicas\
 para mejorar tu sitio web. Este informe te servirá como guía para implementar las mejoras necesarias.",
  },
];

/*
 *
 *  Banner Section
 *
 */

const TITLE_BANNER = "DESCUBRE TU POTENCIAL OCULTO";

const TEXT_BANNER =
  "Una auditoría SEO es el primer paso para desbloquear el verdadero potencial de tu sitio web.\
 Contáctanos para una consulta gratuita y descubre cómo nuestras soluciones pueden transformar tu negocio.\
 ¡No esperes más, el futuro es tuyo!";

/*
 *
 *  Schema Section
 *
 */

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
    item: URL_AUDITORIA_SEO,
  },
];

export const serviceSchema = getSchemaService({
  id: SERVICE_ID_AUDITORIA_SEO,
  services: PRICE_CARD_SERVICE,
  serviceType: SERVICE_TYPE_AUDITORIA_SEO,
  serviceOutput: SERVICE_OUTPUT_AUDITORIA_SEO,
  expectedDuration: SERVICE_EXPECTED_DURATION_AUDITORIA_SEO,
  category: CATEGORY_SEO,
  name: SERVICE_NAME_AUDITORIA_SEO,
  description: SERVICE_DESCRIPTION_AUDITORIA_SEO,
  url: URL_AUDITORIA_SEO,
  image: IMAGE_SCHEMA_AUDITORIA_SEO,
  ratingValue: SERVICE_AUDITORIA_SEO_RATING_VALUE,
  reviewCount: SERVICE_AUDITORIA_SEO_RATING_COUNT,
});

const SCHEMA: ServiceDetailsSchema = {
  serviceSchema: serviceSchema,
  breadcrumb: breadcrumb,
  faq: FAQ_ITEMS_SERVICE,
  keyword: KEYWORD_PRINCIPAL,
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

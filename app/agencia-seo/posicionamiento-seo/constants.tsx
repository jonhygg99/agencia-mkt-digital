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
  SERVICE_DESCRIPTION_POSICIONAMIENTO_SEO,
  SERVICE_EXPECTED_DURATION_POSICIONAMIENTO_SEO,
  SERVICE_ID_POSICIONAMIENTO_SEO,
  SERVICE_OUTPUT_POSICIONAMIENTO_SEO,
  SERVICE_POSICIONAMIENTO_SEO_RATING_COUNT,
  SERVICE_POSICIONAMIENTO_SEO_RATING_VALUE,
  SERVICE_TYPE_POSICIONAMIENTO_SEO,
} from "@/app/utils/constants/schema";
import {
  URL_AGENCIA_SEO,
  URL_POSICIONAMIENTO_SEO,
} from "@/app/utils/constants/navigation-links";
import { getSchemaService } from "@/app/utils/schema/utils";
import { IMAGE_SCHEMA_POSICIONAMIENTO_SEO } from "@/app/utils/constants/image";
import { PageServiceData } from "@/app/utils/interface/page-data";

const KEYWORD_PRINCIPAL = "Posicionamiento Web Profesional con SEO";
const SERVICE = "Posicionamiento SEO";

const TITLE_HERO = (
  <p>
    La estrategia de <span className="custom-title">{SERVICE}</span> está diseño
    para conquistar las primeras posiciones y{" "}
    <TypingAnimation
      texts={[
        "atraer tráfico de calidad",
        "incrementar tu retorno de inversión",
        "fortalecer tu marca en el entorno digital",
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
  question: "¿Por qué invertir en Posicionamiento SEO?",
  boldAnswer:
    "Porque el tráfico orgánico no solo es gratuito, sino también sostenible.",
  answer: "A largo plazo, es la mejor inversión para tu presencia digital.",
  boldConclusion: "Supera a la competencia",
  conclusion: ", y destaca en tu sector.",
};

/*
 *
 *  Reasons of ${SERVICE} Section
 *
 */

const TITLE_REASONS = (
  <p>
    Razones Clave por las que el{" "}
    <span className="custom-title">{SERVICE} es Esencial</span> para Tu Marca
  </p>
);

const REASON_ITEMS_SERVICE: ReasonItem[] = [
  {
    icon: AttractionIcon,
    title: "Tráfico Orgánico",
    description:
      "El SEO mejora tu visibilidad en los resultados naturales, es decir, no pagas por estar ahí, lo que se\
 traduce en tráfico orgánico gratuito que visitará tu sitio web regularmente.",
  },
  {
    icon: TrustIcon,
    title: "Autoridad y Credibilidad",
    description:
      'Los sitios web que aparecen en las primeras posiciones de Google son percibidos como más confiables.\
 Como dice el dicho, "si Google confía en ti, tus clientes también lo harán".',
  },
  {
    icon: UserExperienceIcon,
    title: "Mayor Tasa de Conversisón",
    description:
      "El SEO atrae tráfico altamente cualificado a tu web. Los usuarios que llegan a través de búsquedas\
 orgánicas tienen una intención específica, lo que aumenta las probabilidades de conversión.",
  },
  {
    icon: RoiIcon,
    title: "ROI Elevado",
    description:
      "El SEO es una inversión a largo plazo con un excelente retorno. Una vez posicionado, tu sitio web continuará\
 generando tráfico orgánico sin necesidad de pagar por cada clic como en la publicidad.",
  },
];

/*
 *
 *  Parallax Image Section
 *
 */

const IMAGE_PARALLAX_URL = "/parallax-image/posicionamiento-seo.webp";

const TITLE_PARALLAX = "LA VISIBILIDAD ES LA CLAVE DEL ÉXITO DIGITAL";

const TEXT_PARALLAX =
  "No se trata solo de estar en línea, se trata de ser encontrado.";

/*
 *
 *  Pricing Section
 *
 */

const TITLE_PRICING = (
  <h2 className="title-pricing">
    Precios Competitivos para un <span className="custom-title">{SERVICE}</span>
  </h2>
);

export const PRICE_CARD_SERVICE: PriceCard[] = [
  {
    title: "Posicionamiento SEO Esencial",
    price: "150",
    description:
      "Optimización SEO para sitios web pequeños o de reciente creación",
    features: [
      { text: "Optimización hasta 100 URL", included: true },
      {
        text: "Resolución de Errores y Optimización SEO Técnico",
        included: true,
      },
      { text: "Optimización SEO On-Page", included: true },
      { text: "Construcción de Enlaces (SEO Off-Page)", included: false },
      { text: "Optimización de Imágenes", included: true },
      {
        text: "Configuración de herramientas analíticas (Google Analytics y Search Console)",
        included: true,
      },
      { text: "Optimización de la Estructura web", included: true },
      { text: "Estrategia de Enlazado interno", included: true },
      { text: "Investigación de Palabras Claves", included: true },
      {
        text: "2 Propuestas, redacción y publicación de contenidos con IA",
        included: true,
      },
      { text: "Optimización de Meta etiquetas", included: true },
      { text: "Optimización de Datos estructurados", included: true },
      { text: "Monitoreo y Reportes", included: true },
      { text: "Llamada seguimiento trimestral de 30min", included: true },
      { text: "Chat directo con la Agencia", included: true },
    ],
  },
  {
    title: "Posicionamiento SEO Avanzado",
    price: "450",
    description:
      "Estrategia SEO completa para sitios web establecidos buscando mejorar su posicionamiento",
    features: [
      { text: "Optimización de +100 URL", included: true },
      {
        text: "Resolución de Errores y Optimización SEO Técnico",
        included: true,
      },
      { text: "Optimización SEO On-Page", included: true },
      { text: "Construcción de Enlaces (SEO Off-Page)", included: true },
      { text: "Optimización de Imágenes", included: true },
      {
        text: "Configuración de herramientas analíticas (Google Analytics y Search Console)",
        included: true,
      },
      { text: "Optimización de la Estructura web", included: true },
      { text: "Estrategia de Enlazado interno", included: true },
      { text: "Investigación de Palabras Claves", included: true },
      {
        text: "4 Propuestas, redacción y publicación de contenidos con IA",
        included: true,
      },
      { text: "Optimización de Meta etiquetas", included: true },
      { text: "Optimización de Datos estructurados", included: true },
      { text: "Monitoreo y Reportes", included: true },
      { text: "Llamada seguimiento trimestral de 30min", included: true },
      { text: "Chat directo con la Agencia", included: true },
    ],
  },
  {
    title: "Posicionamiento SEO Premium",
    price: "850",
    description:
      "Estrategia SEO avanzada para sitios corporativos o e-commerce con alta competencia",
    features: [
      { text: "Optimización de +100 URL", included: true },
      {
        text: "Resolución de Errores y Optimización SEO Técnico",
        included: true,
      },
      { text: "Optimización SEO On-Page", included: true },
      { text: "Construcción de Enlaces (SEO Off-Page)", included: true },
      { text: "Optimización de Imágenes", included: true },
      {
        text: "Configuración de herramientas analíticas (Google Analytics y Search Console)",
        included: true,
      },
      { text: "Optimización de la Estructura web", included: true },
      { text: "Estrategia de Enlazado interno", included: true },
      { text: "Investigación de Palabras Claves", included: true },
      {
        text: "6 Propuestas, redacción y publicación de contenidos con IA",
        included: true,
      },
      { text: "Optimización de Meta etiquetas", included: true },
      { text: "Optimización de Datos estructurados", included: true },
      { text: "Monitoreo y Reportes", included: true },
      { text: "Llamada seguimiento trimestral de 30min", included: true },
      { text: "Chat directo con la Agencia", included: true },
    ],
  },
];

/*
 *
 *  Timeline Section
 *
 */

const DESCRIPTION_TIMELINE =
  "Transformamos tu visión en una presencia digital poderosa a través de un proceso\
 meticuloso y estratégico. Nuestro enfoque único combina diseño web cautivador con\
 optimización SEO avanzada, garantizando no solo una web visualmente impactante, sino\
 también una herramienta efectiva para atraer y convertir clientes. Cada paso de nuestro\
 proceso está diseño para maximizar tu visibilidad online y potenciar el crecimiento de tu negocio.";

const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Inicial",
    description:
      "Realizamos una reunión para comprender tus objetivos y necesidades específicas. Evaluamos la\
 situación actual de tu sitio web y analizamos a tus competidores en el mercado. Esto nos permite\
 establecer las bases para una estrategia personalizada de SEO.",
  },
  {
    title: "Investigación de Palabrass Claves",
    description:
      "Llevamos a cabo una investigación exhaustiva de palabras clave relevantes para tu negocio.\
 Identificamos las oportunidades que te permitirán atraer tráfico cualificado y mejorar tu\
 posicionamiento en los motores de búsqueda.",
  },
  {
    title: "Optimización Técnica del Sitio",
    description:
      "Realizamos una auditoría técnica de tu sitio web para resolver errores y optimizar aspectos\
 técnicos, incluyendo la mejora de la velocidad de carga y la experiencia del usuario. Además,\
 optimizamos las imágenes en tu sitio para mejorar la velocidad de carga y revisamos la estructura del\
 sitio para facilitar la navegación. También analizamos y abordamos la canibalización de palabras clave,\
 asegurándonos de que las páginas relevantes no compitan entre sí, lo que podría afectar negativamente\
 tu posicionamiento.",
  },
  {
    title: "Optimización SEO On-Page",
    description:
      "Optimizamos más de 100 URL, asegurándonos de que cada página esté alineada con las mejores prácticas\
 de SEO. Esto incluye la optimización de meta etiquetas, datos estructurados y contenido relevante.",
  },
  {
    title: "Creación de Contenido Atractivo",
    description:
      "Desarrollamos propuestas de contenido utilizando inteligencia artificial, redactamos y publicamos\
 contenido optimizado que atraiga y retenga a tu audiencia. Este contenido está diseñado para mejorar tu\
 autoridad y relevancia en el sector.",
  },
  {
    title: "Construcción de Enlaces (SEO Off-Page)",
    description:
      "Configuramos Google Analytics y Google Search Console para que puedas monitorear el rendimiento de\
 tu sitio. Esto te permitirá obtener información valiosa sobre el tráfico y el comportamiento de los usuarios.",
  },
  {
    title: "Monitoreo y Reportes",
    description:
      "Realizamos un seguimiento continuo del rendimiento de tu sitio web, analizando métricas clave y\
 ajustando la estrategia según sea necesario. Proporcionamos informes periódicos para que estés al tanto\
 de los resultados.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Qué servicio SEO es el adecuado para mi negocio?",
    answer:
      "Nuestros servicios están diseñados para **adaptarse a las necesidades específicas de cada tipo de negocio**,\
 garantizando escalabilidad y un acompañamiento continuo en cada etapa de crecimiento.\n\
Evaluaremos tus objetivos y el estado actual de tu sitio web para recomendarte la estrategia más efectiva que impulse\
 tu visibilidad y atraiga a más clientes.",
  },
  {
    question:
      "¿Cuánto tiempo se tarda en ver resultados del servicio de Posicionamiento SEO?",
    answer:
      "El tiempo para notar resultados en SEO depende de varios factores, como la competencia en tu sector y\
 las tácticas implementadas. Si bien muchas empresas **comienzan a ver cambios positivos en su posicionamiento\
 en un plazo de 3 a 6 meses**, algunas pueden experimentar mejoras iniciales ya en el primer mes.\n\
Sin embargo, en mercados altamente competitivos, puede ser necesario un año o más para alcanzar un rendimiento\
 óptimo y un tráfico significativo.",
  },
  {
    question: "¿Puedo redactar yo el marketing de contenidos?",
    answer:
      "¡Por supuesto! Tú conoces mejor tu producto o servicio. Si decides redactar el contenido, **nosotros lo\
 adaptaremos para incluir las pautas de buen contenido optimizado para SEO**, asegurando que se alinee con nuestra\
 estrategia y maximice su efectividad en los motores de búsqueda.",
  },
  {
    question: "¿Qué es una propuesta de nuevo contenido?",
    answer:
      "Una propuesta de nuevo contenido es un documento que elaboramos tras realizar una búsqueda de palabras clave\
 y un análisis de la competencia. En esta propuesta, **sugerimos temas específicos para artículos de blog o páginas\
 transaccionales**, incluyendo detalles como el título, la extensión en número de palabras y otros elementos clave.\
 Esto asegura que el contenido esté alineado con las tendencias del mercado y optimizado para atraer tráfico relevante.",
  },
];

/*
 *
 *  Banner Section
 *
 */

const TITLE_BANNER = "IMPULSA TU POTENCIAL";

const TEXT_BANNER =
  "No subestimes el poder de una estrategia bien definida. Aprovecha cada oportunidad para\
destacar en el mundo digital y atraer a tu público objetivo. Contáctanos para una consulta\
gratuita y descubre cómo nuestras soluciones SEO pueden transformar tu negocio y maximizar\
tu alcance. ¡El futuro de tu éxito comienza hoy!";

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
    item: URL_POSICIONAMIENTO_SEO,
  },
];

export const serviceSchema = getSchemaService({
  id: SERVICE_ID_POSICIONAMIENTO_SEO,
  services: PRICE_CARD_SERVICE,
  serviceType: SERVICE_TYPE_POSICIONAMIENTO_SEO,
  serviceOutput: SERVICE_OUTPUT_POSICIONAMIENTO_SEO,
  expectedDuration: SERVICE_EXPECTED_DURATION_POSICIONAMIENTO_SEO,
  category: CATEGORY_SEO,
  name: KEYWORD_PRINCIPAL,
  description: SERVICE_DESCRIPTION_POSICIONAMIENTO_SEO,
  url: URL_POSICIONAMIENTO_SEO,
  image: IMAGE_SCHEMA_POSICIONAMIENTO_SEO,
  ratingValue: SERVICE_POSICIONAMIENTO_SEO_RATING_VALUE,
  reviewCount: SERVICE_POSICIONAMIENTO_SEO_RATING_COUNT,
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

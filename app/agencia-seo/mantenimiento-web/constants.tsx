import {
  URL_AUDITORIA_SEO,
  URL_MANTENIMIENTO_WEB,
} from "@/app/utils/constants/navigation-links";
import { getSingleServiceSchema } from "@/app/utils/schema/utils";
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
import { ServiceDetailsSchema } from "@/app/utils/interface/schema";
import {
  CATEGORY_SEO,
  CATEGORY_SEO_SERVICE_OUTPUT,
  SERVICE_MANTENIMIENTO_WEB_RATING_COUNT,
  SERVICE_MANTENIMIENTO_WEB_RATING_VALUE,
  SERVICE_TYPE_MANTENIMIENTO_WEB,
} from "@/app/utils/constants/schema";
import { IMAGE_SCHEMA_MANTENIMIENTO_WEB } from "@/app/utils/constants/image";
import { PageServiceData } from "@/app/utils/interface/page";

const SERVICE = "Mantenimiento Web";

const TITLE_HERO = (
  <p>
    Nuestro <span className="custom-title">{SERVICE}</span> está diseñado para
    ofrecerte tranquilidad y ayudarte a{" "}
    <TypingAnimation
      texts={[
        "mantener tu sitio siempre actualizado",
        "mejorar la seguridad de tu web",
        "garantizar el funcionamiento óptimo",
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
  question: "¿Por qué invertir en Mantenimiento Web?",
  boldAnswer:
    "Porque asegura el rendimiento y la seguridad de tu sitio en todo momento.",
  answer:
    "Es esencial para mantener tu sitio funcionando sin interrupciones y optimizado para los motores de búsqueda.",
  boldConclusion: "Más tranquilidad",
  conclusion: " y menos problemas.",
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
    title: "Mantenimiento Proactivo",
    description:
      "El mantenimiento web regular ayuda a prevenir problemas antes de que ocurran, asegurando un rendimiento constante y sin interrupciones.",
  },
  {
    icon: TrustIcon,
    title: "Seguridad Mejorada",
    description:
      "Un sitio web bien mantenido es menos vulnerable a ataques. Las actualizaciones regulares garantizan que tu información y la de tus usuarios estén protegidas.",
  },
  {
    icon: UserExperienceIcon,
    title: "Optimización Continua",
    description:
      "El mantenimiento web permite realizar ajustes constantes que mejoran la experiencia del usuario, lo que se traduce en mayores tasas de retención y conversión.",
  },
  {
    icon: RoiIcon,
    title: "Inversión Sostenible",
    description:
      "Invertir en mantenimiento web es clave para maximizar el retorno de tu inversión, asegurando que tu sitio siga siendo relevante y competitivo.",
  },
];

/*
 *
 *  Parallax Image Section
 *
 */

const IMAGE_PARALLAX_URL = "../parallax-image/posicionamiento-seo.webp";

const TITLE_PARALLAX = "ASEGURA EL RENDIMIENTO DE TU SITIO";

const TEXT_PARALLAX = "El mantenimiento proactivo te ayuda a evitar problemas.";
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
    title: "Mantenimiento Web",
    price: "25",
    description:
      "Asegura el óptimo funcionamiento de tu sitio web y mejora la experiencia del usuario.",
    features: [
      {
        text: "Hosting de calidad y alta disponibilidad",
        included: true,
      },
      {
        text: "Actualizaciones regulares de software y plugins",
        included: true,
      },
      {
        text: "Monitoreo de seguridad y protección contra ataques",
        included: true,
      },
      {
        text: "Optimización de la velocidad de carga",
        included: true,
      },
      {
        text: "Copias de seguridad automáticas",
        included: true,
      },
      {
        text: "Soporte técnico prioritario",
        included: true,
      },
      {
        text: "Informes mensuales de rendimiento",
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
  "Nuestro proceso de mantenimiento web está diseñado para garantizar el óptimo funcionamiento de tu sitio.\
 A través de un enfoque sistemático y proactivo, nos aseguramos de que tu web esté siempre actualizada, segura\
 y optimizada. Cada etapa de nuestro servicio está enfocada en maximizar la experiencia del usuario y mantener\
 tu presencia digital en su mejor forma.";

const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Inicial",
    description:
      "Realizamos una reunión para entender tus objetivos y necesidades. Evaluamos el estado actual de tu sitio\
 web y discutimos las áreas que requieren atención.",
  },
  {
    title: "Revisión de Seguridad",
    description:
      "Llevamos a cabo un análisis exhaustivo de la seguridad de tu sitio, identificando vulnerabilidades y aplicando\
 las actualizaciones necesarias para proteger tu información.",
  },
  {
    title: "Actualización de Software",
    description:
      "Nos aseguramos de que todos los plugins, temas y el sistema de gestión de contenido estén actualizados para\
 evitar problemas de compatibilidad y seguridad.",
  },
  {
    title: "Optimización de Rendimiento",
    description:
      "Analizamos la velocidad de carga de tu sitio y realizamos ajustes para mejorar su rendimiento, incluyendo\
 la optimización de imágenes y la minimización de archivos.",
  },
  {
    title: "Copias de Seguridad",
    description:
      "Implementamos un sistema de copias de seguridad automáticas para garantizar que tu información esté siempre\
 protegida y pueda ser restaurada en caso de necesidad.",
  },
  {
    title: "Informes y Seguimiento",
    description:
      "Proporcionamos informes periódicos sobre el rendimiento de tu sitio, incluyendo métricas clave y recomendaciones\
 para futuras mejoras. Realizamos ajustes según sea necesario.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Qué incluye el servicio de mantenimiento web?",
    answer:
      "El servicio de mantenimiento web incluye actualizaciones de software, revisión de seguridad, optimización de\
 rendimiento, copias de seguridad automáticas y soporte técnico, entre otros.",
  },
  {
    question: "¿Con qué frecuencia se realiza el mantenimiento?",
    answer:
      "El mantenimiento web se realiza de manera regular, generalmente de forma mensual, aunque la frecuencia puede\
 ajustarse según las necesidades específicas de tu sitio.",
  },
  {
    question: "¿Por qué es importante el mantenimiento web?",
    answer:
      "El mantenimiento web es crucial para asegurar que tu sitio funcione sin problemas, esté protegido contra amenazas\
 de seguridad y ofrezca una experiencia óptima a los usuarios.",
  },
  {
    question: "¿Qué sucede si no realizo mantenimiento en mi sitio?",
    answer:
      "Si no realizas mantenimiento, tu sitio puede volverse vulnerable a ataques, experimentar problemas de rendimiento\
 y perder relevancia en los motores de búsqueda, lo que puede afectar tu tráfico y conversiones.",
  },
  {
    question: "¿Ofrecen soporte técnico en caso de problemas?",
    answer:
      "Sí, ofrecemos soporte técnico prioritario como parte de nuestro servicio de mantenimiento web. Estamos aquí para\
 ayudarte a resolver cualquier problema que pueda surgir.",
  },
];

/*
 *
 *  Banner Section
 *
 */

const TITLE_BANNER = "MANTEN TU SITIO EN SU MEJOR FORMA";
const TEXT_BANNER =
  "El mantenimiento web es esencial para asegurar un rendimiento óptimo. Contáctanos para una consulta gratuita y descubre\
 cómo podemos ayudarte a mantener tu presencia digital. ¡No dejes que los problemas te detengan!";

/*
 *
 *  SCHEMA section
 *
 */

const SCHEMA: ServiceDetailsSchema = {
  name: SERVICE,
  description:
    "Mantenimiento web integral que incluye actualizaciones, seguridad, optimización y hosting.",
  category: CATEGORY_SEO,
  serviceType: SERVICE_TYPE_MANTENIMIENTO_WEB,
  serviceOutput: CATEGORY_SEO_SERVICE_OUTPUT,
  slugImage: IMAGE_SCHEMA_MANTENIMIENTO_WEB,
  url: URL_MANTENIMIENTO_WEB,
  service: getSingleServiceSchema(PRICE_CARD_SERVICE[0]),
  lowPrice: PRICE_CARD_SERVICE[0].price + ".00",
  highPrice: PRICE_CARD_SERVICE[PRICE_CARD_SERVICE.length - 1].price + ".00",
  ratingValue: SERVICE_MANTENIMIENTO_WEB_RATING_VALUE,
  ratingCount: SERVICE_MANTENIMIENTO_WEB_RATING_COUNT,
  expectedDuration: "P30D",
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

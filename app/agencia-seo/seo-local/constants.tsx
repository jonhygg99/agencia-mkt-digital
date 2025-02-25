import { FaqItem } from "@/app/constants/interface/faq";
import TypingAnimation from "@/app/ui/elements/typing-animation";
import { PriceCard } from "@/app/constants/interface/pricing";
import { TimelineSteps } from "@/app/constants/interface/timeline";
import { ReasonItem } from "@/app/constants/interface/reason";
import AttractionIcon from "@/app/ui/icons/bubble/attraction";
import TrustIcon from "@/app/ui/icons/bubble/trust";
import UserExperienceIcon from "@/app/ui/icons/bubble/user-experience";
import RoiIcon from "@/app/ui/icons/bubble/roi";
import { Question } from "@/app/constants/interface/question";

export const SERVICE = "SEO Local";

export const TITLE_HERO = (
  <p>
    Nuestra estrategia de <span className="custom-title">{SERVICE}</span> está
    diseñada para llegar a las primeras posiciones relevantes en tu área y{" "}
    <TypingAnimation
      texts={[
        "atraer tráfico local de calidad",
        "aumentar tu retorno de inversión",
        "fortalecer tu marca en la comunidad",
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

export const QUESTION_SERVICE: Question = {
  question: "¿Por qué invertir en estrategias de SEO Local?",
  boldAnswer:
    "Porque el tráfico orgánico local no solo es gratuito, sino también sostenible.",
  answer:
    "A largo plazo, es la mejor inversión para fortalecer tu presencia en la comunidad.",
  boldConclusion: "Más clientes locales",
  conclusion: ", menos gastos.",
};

/*
 *
 *  Reasons of ${SERVICE} Section
 *
 */

export const TITLE_REASONS = (
  <p>
    Razones Clave por las que el{" "}
    <span className="custom-title">{SERVICE} es Esencial</span> para Tu Marca
  </p>
);

export const REASON_ITEMS_SERVICE: ReasonItem[] = [
  {
    icon: AttractionIcon,
    title: "Tráfico Orgánico Local",
    description:
      "El SEO local mejora tu visibilidad en los resultados de búsqueda específicos de tu área, lo que se\
 traduce en tráfico orgánico gratuito de clientes que buscan tus servicios cerca de ellos.",
  },
  {
    icon: TrustIcon,
    title: "Autoridad y Credibilidad en la Comunidad",
    description:
      'Los negocios que aparecen en las primeras posiciones de Google son percibidos como más confiables por\
 los consumidores locales. Como dice el dicho, "si Google confía en ti, tus clientes también lo harán".',
  },
  {
    icon: UserExperienceIcon,
    title: "Mayor Tasa de Conversisón",
    description:
      "El SEO local atrae tráfico altamente cualificado a tu sitio web. Los usuarios que llegan a través de\
 búsquedas orgánicas tienen una intención específica, lo que incrementa las probabilidades de conversión en tu área.",
  },
  {
    icon: RoiIcon,
    title: "ROI Elevado en el Mercado Local",
    description:
      "El SEO local es una inversión a largo plazo con un excelente retorno. Una vez que tu negocio está bien\
 posicionado, continuará generando tráfico orgánico sin necesidad de pagar por cada clic, como ocurre en la publicidad.",
  },
];

/*
 *
 *  Parallax Image Section
 *
 */

export const IMAGE_PARALLAX_URL = "../parallax-image/agencia-seo.webp";

export const TITLE_PARALLAX =
  "LA VISIBILIDAD LOCAL ES FUNDAMENTAL PARA EL ÉXITO TU NEGOCIO";

export const TEXT_PARALLAX =
  "No se trata solo de estar en línea, se trata de ser encontrado por tus clientes en tu área.";

/*
 *
 *  Pricing Section
 *
 */

export const TITLE_PRICING = (
  <h2 className="title-pricing">
    Precios Competitivos para el servicio de{" "}
    <span className="custom-title">{SERVICE}</span>
  </h2>
);

export const PRICE_CARD_SERVICE: PriceCard[] = [
  {
    title: "SEO Local en Google My Business",
    price: "150",
    description:
      "Despierta tu presencia en línea con un impulso inicial hacia el éxito.",
    features: [
      { text: "Optimización de Google My Business", included: true },
      { text: "Investigación de Palabras Clave Locales", included: true },
      { text: "Análisis de Competencia Local", included: true },
      { text: "Generación de Backlinks locales", included: false },
      { text: "Registro en Directorios Locales", included: true },
      { text: "Optimización de Imágenes", included: true },
      { text: "Monitoreo y Reportes", included: true },
      { text: "Llamada seguimiento trimestral de 10min", included: true },
      { text: "Chat directo con la Agencia", included: true },
    ],
  },
  {
    title: "SEO Local en Página Web y Mapas",
    price: "450",
    description:
      "Eleva tu estrategia con enlaces que construyen autoridad y contenido cautivador.",
    features: [
      { text: "Optimización de Google My Business", included: true },
      { text: "Investigación de Palabras Clave Locales", included: true },
      { text: "Análisis de Competencia Local", included: true },
      { text: "Generación de Backlinks locales", included: true },
      { text: "Registro en Directorios Locales", included: true },
      { text: "Optimización de +100 URL", included: true },
      {
        text: "Resolución de Errores y Optimización SEO Técnico",
        included: true,
      },
      { text: "Optimización SEO On-Page", included: true },
      {
        text: "Construcción de Enlaces (SEO Off-Page) Esencial",
        included: true,
      },
      { text: "Optimización de Imágenes", included: true },
      {
        text: "Configuración de herramientas analíticas (Google Analytics y Search Console)",
        included: true,
      },
      { text: "Optimización de la Estructura web", included: true },
      { text: "Estrategia de Enlazado interno", included: true },
      { text: "Optimización de Meta etiquetas", included: true },
      { text: "Optimización de Datos estructurados", included: true },
      { text: "Monitoreo y Reportes", included: true },
      { text: "Llamada seguimiento trimestral de 20min", included: true },
      { text: "Chat directo con la Agencia", included: true },
    ],
  },
  {
    title: "SEO Local en Página Web y Mapas Premium",
    price: "850",
    description:
      "Eleva tu estrategia con enlaces que construyen autoridad y contenido cautivador.",
    features: [
      { text: "Optimización de Google My Business", included: true },
      { text: "Investigación de Palabras Clave Locales", included: true },
      { text: "Análisis de Competencia Local", included: true },
      { text: "Generación de Backlinks locales", included: true },
      { text: "Registro en Directorios Locales", included: true },
      { text: "Optimización de +100 URL", included: true },
      {
        text: "Resolución de Errores y Optimización SEO Técnico",
        included: true,
      },
      { text: "Optimización SEO On-Page", included: true },
      {
        text: "Construcción de Enlaces (SEO Off-Page) PREMIUM",
        included: true,
      },
      { text: "Optimización de Imágenes", included: true },
      {
        text: "Configuración de herramientas analíticas (Google Analytics y Search Console)",
        included: true,
      },
      { text: "Optimización de la Estructura web", included: true },
      { text: "Estrategia de Enlazado interno", included: true },
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

export const DESCRIPTION_TIMELINE =
  "Transformamos tu visión en una fuerte presencia digital local a través de un enfoque estratégico\
 y personalizado. Nuestro objetivo es asegurarnos de que tu negocio sea fácilmente encontrado por los\
 clientes en tu área.";

export const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Análisis Inicial y Definición de Objetivos",
    description:
      "Comenzamos con una consulta para comprender tus metas y el perfil de tu cliente local. Evaluamos\
 tu situación actual y la de tus competidores en la comunidad para establecer una base sólida.",
  },
  {
    title: "Estudio de Mercado Local",
    description:
      "Realizamos un análisis detallado del mercado local, identificando oportunidades y tendencias\
 específicas de tu sector. Esto nos ayuda a crear una estrategia que resuene con tu audiencia y te\
 diferencie de la competencia.",
  },
  {
    title: "Optimización de Google My Business",
    description:
      "Configuramos y optimizamos tu perfil de Google My Business para que aparezcas en las búsquedas\
 locales. Esto incluye la gestión de reseñas y la actualización de información relevante para atraer más clientes.",
  },
  {
    title: "Optimización Técnica del Sitio",
    description:
      "Realizamos una revisión técnica de tu sitio web, corrigiendo errores y optimizando la velocidad de\
 carga, la estructura y la experiencia del usuario para asegurar un rendimiento óptimo.",
  },
  {
    title: "Estrategias de Link Building Local",
    description:
      "Implementamos tácticas de link building enfocadas en tu área, colaborando con negocios locales\
 y medios de comunicación para aumentar tu visibilidad y autoridad en línea.",
  },
  {
    title: "Monitoreo y Ajustes Continuos",
    description:
      "Realizamos un seguimiento constante de tu rendimiento en línea, analizando métricas clave y\
 ajustando la estrategia según sea necesario para maximizar tu éxito en el SEO local.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

export const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Qué es el SEO local y cómo puede beneficiar a mi negocio?",
    answer:
      "El SEO local es una estrategia diseñada para **mejorar la visibilidad de tu negocio en las búsquedas\
  realizadas por usuarios en tu área geográfica**. Esto es especialmente beneficioso para empresas que dependen\
  de clientes locales, ya que les ayuda a ser encontrados más fácilmente por quienes buscan productos\
  o servicios en su localidad.",
  },
  {
    question: "¿Cuánto tiempo tomará ver resultados con el SEO local?",
    answer:
      "Los resultados pueden variar según la competencia en tu sector y la calidad de la estrategia\
  implementada. Sin embargo, muchos de nuestros clientes comienzan a ver mejoras en su visibilidad y\
  tráfico ya en el primer mes, aunque **los resultados más significativos suelen notarse entre 3 a 6 meses**.",
  },
  {
    question: "¿Necesito tener un sitio web para beneficiarme del SEO local?",
    answer:
      "**No es estrictamente necesario tener un sitio web** para obtener visibilidad en Google Maps, ya\
  que tu negocio puede aparecer en las búsquedas locales a través de tu perfil de Google My Business.\
  Sin embargo, contar con **una página web optimizado puede aumentar significativamente tu visibilidad y\
  credibilidad**. Un sitio web bien diseñado y optimizado no solo proporciona información valiosa a tus\
  clientes, sino que también puede atraer más tráfico y convertir visitantes en clientes.",
  },
  {
    question: "¿Cómo miden el éxito de la estrategia de SEO local?",
    answer:
      "Medimos el éxito a través de diversas métricas, como el aumento en la visibilidad en los resultados\
  de búsqueda, el tráfico web, la tasa de conversión y el número de interacciones (llamadas, visitas)\
  generadas a través de Google My Business. También utilizamos herramientas analíticas que permiten\
  visualizar los resultados en Google Maps, lo que te proporciona una visión clara de cómo tu negocio\
  se está desempeñando en las búsquedas locales y cómo se compara con la competencia.",
  },
  {
    question: "¿Cuál es la diferencia entre SEO local y SEO general?",
    answer:
      "El SEO local se centra en optimizar tu presencia en línea para búsquedas específicas de ubicación,\
  mientras que el SEO general abarca un enfoque más amplio que no necesariamente se limita a una región\
  geográfica. El SEO local es crucial para negocios que dependen de clientes en áreas específicas.",
  },
  {
    question: "¿Qué tipo de negocios se benefician más del SEO local?",
    answer:
      "Cualquier negocio que sirva a una comunidad local puede beneficiarse del SEO local, incluyendo\
  restaurantes, tiendas minoristas, servicios profesionales (como abogados y médicos), y cualquier empresa\
  que dependa de clientes en su área geográfica.",
  },
];

/*
 *
 *  Banner Section
 *
 */

export const TITLE_BANNER = "CONQUISTA EL MERCADO LOCAL";

export const TEXT_BANNER =
  "Transforma tu presencia en línea y haz que tu negocio sea la primera opción en tu área.\
Con una estrategia de SEO local efectiva, atraerás a más clientes y aumentarás tus ventas.\
Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a destacar en el mundo digital.\
¡Tu éxito local comienza aquí!";

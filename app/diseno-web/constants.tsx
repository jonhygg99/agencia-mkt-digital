import { FaqItem } from "@/app/utils/interface/faq";
import TypingAnimation from "@/app/ui/elements/typing-animation";
import { PriceCard } from "@/app/utils/interface/pricing";
import { TimelineSteps } from "@/app/utils/interface/timeline";
import { ReasonItem } from "@/app/utils/interface/reason";
import { Question } from "@/app/utils/interface/question";
import AttractionIcon from "@/app/ui/icons/bubble/attraction";
import TrustIcon from "@/app/ui/icons/bubble/trust";
import UserExperienceIcon from "@/app/ui/icons/bubble/user-experience";
import RoiIcon from "@/app/ui/icons/bubble/roi";
import {
  CategorySchema,
  CombinedServiceSchema,
  OneServiceSchema,
} from "../utils/interface/schema";
import {
  CATEGORY_DESIGN,
  CATEGORY_DESIGN_DESCRIPTION,
  CATEGORY_SEO,
  CODE_DESING,
  SERVICE_TYPE_DISENO_WEB,
} from "../utils/constants/schema";
import { getSchemaServiceCategory } from "../utils/schema/utils";
import { URL_DISENO_WEB } from "../utils/constants/navigation-links";
import { PageCategoryData } from "../utils/interface/page";

export const SERVICE = "Agencia de Diseño Web a Medida";

export const TITLE_HERO = (
  <p>
    Somos una <span className="custom-title">Agencia de Diseño Web</span> que
    conecta con tus clientes.
    <br />
    Una estrategia que{" "}
    <TypingAnimation
      texts={[
        "potenciará tu marca",
        "aumentará tu conversión",
        "mejorará la experiencia del usuario",
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
  question: "¿Por qué invertir en Diseño Web atractivo?",
  boldAnswer: "Porque la primera impresión cuenta.",
  answer:
    "Un diseño optimizado para SEO asegura que tu sitio sea fácil de encontrar y navegar",
  boldConclusion: "Más atractivo",
  conclusion: " y menos olvidable.",
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
    title: "Atracción de Clientes",
    description:
      "Un diseño web atractivo y funcional capta la atención de los visitantes de inmediato. La primera impresión\
   es clave; un sitio visualmente agradable anima a los usuarios a explorar más y refleja la auténtica identidad de\
   tu marca.",
  },
  {
    icon: TrustIcon,
    title: "Credibilidad y Confianza",
    description:
      "Los sitios web bien diseño transmiten profesionalismo. Un diseño pulido hace que los usuarios se sientan\
   seguros al interactuar con tu marca, lo que incrementa la probabilidad de que elijan tus servicios.",
  },
  {
    icon: UserExperienceIcon,
    title: "Experiencia de Usuario",
    description:
      "Un diseño web atractivo y funcional capta la atención de los visitantes de inmediato. La primera impresión\
   es clave; un sitio visualmente agradable anima a los usuarios a explorar más y refleja la auténtica identidad de\
   tu marca.",
  },
  {
    icon: RoiIcon,
    title: "ROI Elevado",
    description:
      "Invertir en un diseño web de calidad ofrece un alto retorno de inversión. Un sitio bien diseñado atrae más\
   tráfico y convierte mejor, lo que significa que cada visita tiene más altas probabilidades de convertirse en una venta.",
  },
];

/*
 *
 *  Parallax Image Section
 *
 */

export const IMAGE_PARALLAX_URL = "parallax-image/diseno-web.webp";

export const TITLE_PARALLAX = "COMUNICA TU MENSAJE SIN PALABRAS";

export const TEXT_PARALLAX =
  "El diseño es el embajador silencioso que da voz a tu marca.";

/*
 *
 *  Client Problems Section
 *
 */

const CLIENT_PROBLEMS = [
  '"Mi sitio web se ve anticuado y no refleja la imagen de mi marca."',
  '"Los usuarios se quejan de que mi página es difícil de navegar."',
  '"No tengo un diseño responsive y mi sitio no se ve bien en dispositivos móviles."',
  '"Mis tasas de rebote son altas, y no sé cómo retener a los visitantes."',
  '"El tiempo de carga de mi sitio es demasiado lento, lo que afecta la experiencia del usuario."',
  '"Quiero actualizar mi sitio, pero no sé por dónde empezar."',
  '"No tengo un diseño que destaque mis productos o servicios."',
  '"Mis competidores tienen sitios web más atractivos y funcionales."',
  '"No sé cómo integrar mi sitio web con mis redes sociales de manera efectiva."',
  '"Mi sitio web no está diseñado para atraer tráfico, lo que limita mi presencia en línea."',
  '"He tenido problemas con la usabilidad de mi sitio y no sé cómo solucionarlos."',
  '"Quiero un diseño que convierta visitantes en clientes, pero no sé cómo lograrlo."',
];

/*
 *
 *  Pricing Section
 *
 */

export const TITLE_PRICING = (
  <h2 className="title-pricing">
    Precios Competitivos para una página con{" "}
    <span className="custom-title">{SERVICE}</span>
  </h2>
);

export const PRICE_CARD_SERVICE: PriceCard[] = [
  {
    title: "Diseño Web de una Página",
    price: "650",
    description:
      "Despierta tu presencia en línea con un impulso inicial hacia el éxito.",
    features: [
      { text: "Investigación del Mercado y la Competencia", included: true },
      { text: "Diseño Visual Personalizado", included: true },
      { text: "Diseño Responsive", included: true },
      { text: "Estilos de Tipografía y Color", included: true },
      { text: "Imágenes optimizadas", included: true },
      { text: "1 Revisión de Diseño", included: true },
      { text: "Estructura web", included: false },
      { text: "Enlazado interno", included: false },
      { text: "Investigación de Palabras Claves", included: true },
      { text: "Contenido con Copywriting", included: true },
      { text: "Meta etiquetas optimizadas para el CTR", included: true },
      { text: "Datos estructurados", included: true },
      { text: "Optimización de velocidad", included: true },
    ],
  },
  {
    title: "Diseño Web Corporativo",
    price: "1200",
    description:
      "Despierta tu presencia en línea con un impulso inicial hacia el éxito.",
    features: [
      { text: "Investigación del Mercado y la Competencia", included: true },
      { text: "Diseño Visual Personalizado", included: true },
      { text: "Diseño Responsive", included: true },
      { text: "Estilos de Tipografía y Color", included: true },
      { text: "Imágenes optimizadas", included: true },
      { text: "1 Revisión de Diseño", included: true },
      { text: "Estructura web", included: true },
      { text: "Enlazado interno", included: true },
      { text: "Investigación de Palabras Claves", included: true },
      { text: "Contenido con Copywriting", included: true },
      { text: "Meta etiquetas optimizadas para el CTR", included: true },
      { text: "Datos estructurados", included: true },
      { text: "Optimización de velocidad", included: true },
    ],
  },
  {
    title: "Diseño Web para eCommere",
    price: "2000",
    description:
      "Despierta tu presencia en línea con un impulso inicial hacia el éxito.",
    features: [
      { text: "Investigación del Mercado y la Competencia", included: true },
      { text: "Diseño Visual Personalizado", included: true },
      { text: "Diseño Responsive", included: true },
      { text: "Estilos de Tipografía y Color", included: true },
      { text: "Imágenes optimizadas", included: true },
      { text: "2 Revisiones de Diseño", included: true },
      { text: "Estructura web", included: true },
      { text: "Enlazado interno", included: true },
      { text: "Investigación de Palabras Claves", included: true },
      { text: "Contenido con Copywriting", included: true },
      { text: "Meta etiquetas optimizadas para el CTR", included: true },
      { text: "Datos estructurados", included: true },
      { text: "Optimización de velocidad", included: true },
    ],
  },
];

/*
 *
 *  Timeline Section
 *
 */

export const DESCRIPTION_TIMELINE =
  "Transformamos tu visión en una presencia digital poderosa a través de un proceso\
meticuloso y estratégico. Nuestro enfoque único combina diseño web cautivador con\
optimización SEO avanzada, garantizando no solo una web visualmente impactante, sino\
también una herramienta efectiva para atraer y convertir clientes. Cada paso de nuestro\
proceso está diseño para maximizar tu visibilidad online y potenciar el crecimiento de tu negocio.";

export const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Gratuita",
    description:
      "Realizamos una reunión para entender tus objetivos y necesidades específicas. Analizamos tu situación\
 actual y la de tu competencia en el mercado. Establecemos las bases para una estrategia personalizada de\
 Diseño Web y SEO.",
  },
  {
    title: "Investigación del Mercado y la Competencia",
    description:
      "Realizamos un análisis exhaustivo de tus competidores directos e indirectos, identificando sus fortalezas\
 y debilidades. Estudiamos las tendencias actuales de tu sector y las mejores prácticas que generan resultados.\
 Esta investigación nos permite desarrollar una estrategia única que te diferenciará y te posicionará por encima\
 de la competencia.",
  },
  {
    title: "Diseño Visual Personalizado",
    description:
      "Creamos un diseño único que refleja la identidad de tu marca. Seleccionamos cuidadosamente la tipografía\
 y paleta de colores para máximo impacto. Realizamos dos rondas de revisiones para perfeccionar cada detalle visual.",
  },
  {
    title: "Desarrollo de Contenido Optimizado",
    description:
      "Creamos contenido persuasivo utilizando técnicas avanzadas de copywriting. Optimizamos cada página con\
 palabras clave estratégicamente seleccionadas. Implementamos meta etiquetas optimizadas para mejorar el CTR en\
 resultados de búsqueda.",
  },
  {
    title: "Implementación de Estrategias SEO",
    description:
      "Ejecutamos un plan de optimización integral, aplicando las últimas técnicas de SEO on-page y técnico.\
 Optimizamos la arquitectura de tu sitio, mejoramos la velocidad de carga y aseguramos una experiencia de usuario\
 excepcional. Implementamos estrategias de contenido de alta calidad para impulsar tu autoridad en el sector.",
  },
  {
    title: "Estrategia SEO Local",
    description:
      "Potenciamos tu visibilidad en búsquedas locales mediante la optimización de Google My Business y directorios\
 relevantes. Creamos contenido localizado y aplicamos esquemas de datos estructurados para destacar en los resultados\
 de búsqueda local. Desarrollamos una estrategia de reseñas y menciones locales para construir confianza en tu comunidad.",
  },
  {
    title: "Revisión Final y Lanzamiento",
    description:
      "Realizamos una revisión exhaustiva de todos los elementos implementados. Verificamos la funcionalidad y\
 optimización en diferentes dispositivos y navegadores. Procedemos al lanzamiento una vez que todo está\
 perfectamente ajustado.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

export const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Cuánto tiempo tarda en completarse el Diseño Web con SEO?",
    answer:
      "El tiempo **promedio de finalización es de 4-6 semanas**, dependiendo de la complejidad\
 del proyecto. El cronograma típico es:\n\
* **Semana 1**: Investigación y planificación\n\
* **Semanas 2-3**: Diseño y revisiones\n\
* **Semanas 3-4**: Desarrollo y optimización SEO\n\
* **Semana 5**: Pruebas y ajustes finales\n\
* **Semana 6**: Lanzamiento y soporte inicial",
  },
  {
    question: "¿Qué necesitáis de mi parte para comenzar el Diseño Web?",
    answer:
      "Para iniciar el proyecto necesitamos:\n\
* **Breve descripción de tu negocio y objetivos**\n\
* **Ejemplos de webs que te gusten (si los tienes)**\n\
* **Tu logo y guía de marca (si existe)**\n\
* **Acceso a cuentas relevantes (hosting, dominio)**\n\
* **Contenido base o información sobre tus servicios/productos**",
  },
  {
    question: "¿Por qué es importante incluir SEO desde el principio?",
    answer:
      "La integración del SEO desde el inicio del proceso de diseño web **es fundamental para el éxito a\
 largo plazo de tu presencia online**.\n\
Al incorporar las mejores prácticas de SEO desde el principio, aseguramos que **la estructura de tu sitio\
 web esté optimizada para los motores de búsqueda desde el primer día**, lo que mejora significativamente tu\
 visibilidad online. Este enfoque proactivo no solo reduce los costos futuros de optimización, sino que\
 también garantiza una experiencia de usuario coherente y efectiva que se alinea perfectamente con tus objetivos de SEO.",
  },
  {
    question: "¿Qué ocurre si ya tengo una web existente y quiero renovarla?",
    answer:
      "Cuando se trata de renovar una web existente, nuestro primer paso es realizar un análisis completo de tu\
 sitio actual, incluyendo su rendimiento SEO, contenido valioso y áreas de mejora.\n\
Preservamos los elementos que funcionan bien, especialmente aquellos que ya están posicionando, mientras\
 actualizamos el diseño y la estructura para mejorar tanto la estética como el rendimiento. Implementamos una\
 estrategia de redirección cuidadosa para mantener el valor SEO existente y aseguramos una transición suave que\
 no impacte negativamente en tu posicionamiento actual.",
  },
  {
    question:
      "¿Es posible añadir funcionalidades específicas como reservas online?",
    answer:
      "**Absolutamente.** Nuestro servicio de diseño web es altamente personalizable y podemos integrar prácticamente\
 cualquier funcionalidad que tu negocio necesite. Ya sea un sistema de reservas, una tienda online, un área de miembros\
 o integraciones con CRM, adaptamos la solución a tus necesidades específicas.\n\
Durante nuestra consulta inicial, discutiremos en detalle tus requerimientos funcionales para asegurarnos de que la web\
 no solo se vea bien, sino que también sea una herramienta efectiva para tu negocio.",
  },
  {
    question: "¿Qué plataforma utilizáis para el Diseño Web? ",
    answer:
      "Nuestra plataforma principal de trabajo es WordPress, elegida por su excepcional combinación de facilidad de uso y potentes capacidades de optimización para SEO. WordPress nos permite crear sitios web que no solo son fáciles de gestionar para nuestros clientes, sino que también ofrecen una gran variedad de funcionalidades a través de su ecosistema de plugins. La escalabilidad de WordPress asegura que tu sitio web pueda crecer y evolucionar junto con tu negocio, aunque siempre estamos abiertos a explorar otras plataformas si tus necesidades específicas lo requieren.",
  },
];

/*
 *
 *  Banner Section
 *
 */

export const TITLE_BANNER = "ATRACCIÓN Y CONVERSIÓN";

export const TEXT_BANNER =
  "Convierte tu sitio web en una herramienta poderosa que atraiga, convierta\
y retenga clientes. Contáctanos ahora y da el primer paso hacia una página optimizada\
para destacar en los motores de búsqueda. ¡Haz que tu éxito online empiece hoy mismo!";

/*
 *
 *  Schema Section
 *
 */

const schema_diseno_web = getSchemaServiceCategory({
  services: PRICE_CARD_SERVICE,
  serviceType: SERVICE_TYPE_DISENO_WEB,
  name: "Servicios de Diseño Web",
  description:
    "Diferentes planes de diseño web que incorporan estrategias de SEO adaptadas a tus necesidades, asegurando un sitio atractivo y optimizado para los motores de búsqueda.",
  url: URL_DISENO_WEB,
});

const SCHEMA: CategorySchema = {
  category: CATEGORY_DESIGN,
  codeCategory: CODE_DESING,
  categoryDescription: CATEGORY_DESIGN_DESCRIPTION,
  serviceDetailsSchema: [schema_diseno_web],
  slogan: "Conecta, cautiva y convierte con nuestro diseño web.",
};

/*
 *
 *  Data Section
 *
 */

export const DATA: PageCategoryData = {
  SCHEMA: SCHEMA,
  TITLE_HERO: TITLE_HERO,
  SERVICE: SERVICE,
  QUESTION_SERVICE: QUESTION_SERVICE,
  TITLE_SERVICE: undefined,
  DESCRIPTION_SERVICE: undefined,
  SERVICE_LIST: undefined,
  IMAGE_PARALLAX_URL: IMAGE_PARALLAX_URL,
  TITLE_PARALLAX: TITLE_PARALLAX,
  TEXT_PARALLAX: TEXT_PARALLAX,
  CLIENT_PROBLEMS: CLIENT_PROBLEMS,
  DESCRIPTION_TIMELINE: DESCRIPTION_TIMELINE,
  TIMELINE_STEPS_SERVICE: TIMELINE_STEPS_SERVICE,
  FAQ_ITEMS_SERVICE: FAQ_ITEMS_SERVICE,
  TITLE_BANNER: TITLE_BANNER,
  TEXT_BANNER: TEXT_BANNER,
};

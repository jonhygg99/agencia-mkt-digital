import { FaqItem } from "@/app/utils/interface/faq";
import TypingAnimation from "@/app/ui/elements/typing-animation";
import { TimelineSteps } from "@/app/utils/interface/timeline";
import { Question } from "@/app/utils/interface/question";
import { ServiceItem } from "@/app/utils/interface/service";
import {
  AUDITORIA_SEO,
  CONSULTORIA_SEO,
  MANTENIMIENTO_WEB,
  POSICIONAMIENTO_SEO,
  SEO_LOCAL,
} from "@/app/utils/constants/service";
import {
  BreadCrumb,
  CategorySchema,
  CombinedAgregatedOffer,
  OneServiceSchema,
} from "@/app/utils/interface/schema";
import {
  CATEGORY_SEO_DESCRIPTION,
  CATEGORY_SEO,
} from "@/app/utils/constants/schema";
import { serviceSchema as SERVICE_SCHEMA_SEO } from "@/app/agencia-seo/posicionamiento-seo/constants";
import { serviceSchema as SERVICE_SCHEMA_SEO_LOCAL } from "@/app/agencia-seo/seo-local/constants";
import { serviceSchema as SERVICE_SCHEMA_AUDITORIA_SEO } from "@/app/agencia-seo/auditoria-seo/constants";
import { serviceSchema as SERVICE_SCHEMA_MANTENIMIENTO_WEB } from "@/app/agencia-seo/mantenimiento-web/constants";
import { serviceSchema as SERVICE_SCHEMA_CONSULTORIA_SEO } from "@/app/agencia-seo/consultoria-seo/constants";
import { URL_AGENCIA_SEO } from "@/app/utils/constants/navigation-links";
import { PageCategoryData } from "@/app/utils/interface/page-data";

const SERVICE = "Agencia SEO";
const KEYWORD_PRINCIPAL = SERVICE;

const TITLE_HERO = (
  <p>
    Somos una <span className="custom-title">{SERVICE}</span> que impulsa el
    Crecimiento Digital, optimizando tu presencia en línea y{" "}
    <TypingAnimation
      texts={[
        "incrementando tu tráfico orgánico",
        "maximizando tu rentabilidad",
        "incrementando tus leads calificados",
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
  question: "¿Por qué invertir en estrategias SEO?",
  boldAnswer: "Porque los anuncios no son eternos.",
  answer: "Una buena estrategia de SEO te da visibilidad a largo plazo",
  boldConclusion: "Más tráfico orgánico",
  conclusion: " y menos drama.",
};

/*
 *
 *  Services Section
 *
 */

const TITLE_SERVICE = "SEO";

const DESCRIPTION_SERVICE =
  "Impulsa tu visibilidad en línea con nuestras estrategias\
 personalizadas de SEO. Desde la optimización on-page hasta el SEO\
 off-page, cada acción está diseño para atraer más clientes y alcanzar\
 tus objetivos comerciales. ¡Transforma tu presencia digital hoy!";

const SERVICE_LIST: ServiceItem[] = [
  AUDITORIA_SEO,
  SEO_LOCAL,
  // DISEÑO_WEB,
  POSICIONAMIENTO_SEO,
  CONSULTORIA_SEO,
  MANTENIMIENTO_WEB,
];

/*
 *
 *  Parallax Image Section
 *
 */

const IMAGE_PARALLAX_URL = "/parallax-image/agencia-seo.webp";

const TITLE_PARALLAX = "TRANSFORMA CLICS EN CLIENTES";

const TEXT_PARALLAX =
  "Hacer SEO es como tener un imán para atraer compradores.";

/*
 *
 *  Client Problems Section
 *
 */

const CLIENT_PROBLEMS = [
  '"Lanzamos nuestra web, pero el tráfico es inexistente."',
  '"Quiero aumentar mis ventas, pero mi sitio web está estancado y no aparece en Google."',
  '"A pesar de tener buenos productos, no recibo ningún tráfico."',
  '"Cuando busco mi negocio por palabras claves en Google Maps no aparezco."',
  '"Mi sitio web no recibe visitas, y estoy desesperado por tener clientes."',
  '"He tenido experiencias negativas con otras agencias de SEO, pero sigo necesitando este servicio."',
  '"Mis ventas están estancadas, y no sé cómo mejorar mi visibilidad en línea."',
  '"He invertido en SEO sin resultados y necesito una solución efectiva."',
  '"He probado diferentes tácticas, pero sigo sin ver mejoras en mi tráfico web."',
  '"Mi tienda online no se muestra en los resultados de búsqueda."',
  '"Mis clientes no me encuentran en las búsquedas locales."',
  '"Mi negocio tiene mucho potencial, pero no sé cómo atraer tráfico a mi sitio web."',
];

/*
 *
 *  Timeline Section
 *
 */

const DESCRIPTION_TIMELINE =
  "Descubre cómo transformamos tu presencia en línea a través de un\
proceso estructurado y efectivo. Desde la consulta inicial hasta la\
implementación y optimización continua, cada paso está diseño para\
adaptarse a las necesidades de tu negocio y maximizar tu visibilidad\
en los motores de búsqueda. Con un enfoque integral que incluye\
estrategias de SEO on-page y off-page, trabajamos contigo para\
alcanzar tus objetivos y atraer más clientes. ¡Solicita tu consulta\
gratuita y descubre el potencial de tu negocio!";

const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Gratuita",
    description:
      "Comenzamos con una consulta gratuita para entender tus necesidades y objetivos. Escuchamos tus desafíos\
 y analizamos cómo podemos ayudarte a crecer en línea. Esta es tu oportunidad para plantear preguntas\
 y conocer nuestro enfoque.",
  },
  {
    title: "Análisis de Situación Actual",
    description:
      "Realizamos un análisis exhaustivo de tu sitio web y de tu competencia. Evaluamos el rendimiento actual,\
 las palabras clave y las oportunidades de mejora. Esta evaluación nos permite diseñar una estrategia SEO\
 personalizada que se adapte a tu negocio.",
  },
  {
    title: "Propuesta de Estrategia",
    description:
      "Presentamos una propuesta detallada que incluye nuestras recomendaciones y un plan de acción claro.\
 Te explicamos cómo cada paso contribuirá a mejorar tu visibilidad en línea y atraer más clientes. Queremos\
 que tengas claridad sobre la inversión y el retorno esperado.",
  },
  {
    title: "Implementación de Estrategias SEO",
    description:
      "Una vez que apruebes nuestra propuesta, comenzaremos a implementar las estrategias acordadas. Esto\
 incluye la optimización de tu presencia en línea, la creación de contenido relevante, mejoras técnicas en tu\
 sitio web (si ya cuentas con uno), interlinking y estrategias de SEO off-page, como link building y gestión de\
 menciones en otros sitios. Cada una de estas acciones está diseñada para maximizar tu visibilidad en línea y\
 atraer a un mayor número de clientes, ya sea que desees mejorar un sitio existente o crear uno nuevo.",
  },
  {
    title: "Monitoreo y Optimización Continua",
    description:
      "Después de la implementación, monitoreamos de cerca el rendimiento de tu sitio web. Analizamos las\
 métricas clave y hacemos ajustes según sea necesario. Optimizaremos tu estrategia en función de los resultados\
 obtenidos y las tendencias del mercado. Nuestro objetivo es asegurar que tu negocio siga creciendo y se mantenga\
 competitivo en el entorno digital.",
  },
  {
    title: "Informes Periódicos",
    description:
      "Te proporcionamos informes regulares que muestran el progreso de nuestras estrategias. Verás cómo aumenta\
 tu tráfico, mejora tu posicionamiento y se generan más leads. La transparencia es clave, y queremos que estés al\
 tanto de cada avance.",
  },
  {
    title: "Soporte y Asesoramiento Constante",
    description:
      "Estamos aquí para ti en cada etapa del proceso. Ofrecemos soporte continuo y asesoramiento para resolver\
 cualquier duda o inquietud que puedas tener. Tu éxito es nuestra prioridad, y estamos comprometidos a ayudarte\
 a alcanzar tus metas.",
  },
];

/*
 *
 *  FAQ Section
 *
 */

const FAQ_ITEMS_SERVICE: FaqItem[] = [
  {
    question: "¿Qué es el SEO y por qué es importante para mi negocio?",
    answer:
      "El SEO es el **conjunto de estrategias y técnicas destinadas a optimizar tu sitio web**,\
     con el objetivo de mejorar su visibilidad en los motores de búsqueda.\nEs crucial porque un buen\
     posicionamiento no solo incrementa el tráfico hacia tu sitio, sino que también **atrae a clientes\
     potenciales** y, en última instancia, potencia tus ventas. Lograr una posición destacada en los\
     resultados de búsqueda es fundamental, ya que la mayoría de los usuarios tienden a hacer clic\
     en los primeros enlaces que aparecen, lo que puede marcar la diferencia entre el éxito y la\
     invisibilidad en el mundo digital.",
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados con el SEO?",
    answer:
      "Los resultados del SEO varían según la competencia y las estrategias utilizadas. Aunque\
     generalmente **se observan mejoras en 3 a 6 meses**, es importante destacar que, con una estrategia\
     efectiva, **puedes ver resultados desde el primer mes**. Sin embargo, en industrias más competitivas,\
     **puede tomar hasta 12 meses alcanzar el máximo potencial** de posicionamiento y tráfico.",
  },
  {
    question: "¿Ofrecen servicios personalizados de SEO?",
    answer:
      "Sí, ofrecemos servicios de SEO personalizados que **se adaptan a las necesidades y objetivos\
     específicos de tu negocio**. Realizamos un análisis exhaustivo para diseñar una estrategia que funcione para ti.",
  },
  {
    question: "¿Qué incluye vuestro servicio de SEO?",
    answer:
      "Nuestros servicios abarcan una **metodología comprobada** que incluye optimización on-page,\
     creación de contenido, SEO off-page, análisis de palabras clave, auditorías técnicas y seguimiento\
     de métricas. Cada uno de estos componentes está cuidadosamente diseñado para maximizar tu visibilidad\
     y rendimiento en línea, garantizando resultados efectivos y sostenibles para tu negocio.",
  },
  {
    question: "¿Cómo miden el éxito de las estrategias SEO?",
    answer:
      "Medimos el éxito **a través de métricas clave** como el aumento del tráfico orgánico, la mejora\
     en el posicionamiento de palabras clave, la tasa de conversión y el tiempo de permanencia en el sitio.\
     Proporcionamos informes periódicos para que estés al tanto de los resultados.",
  },
  {
    question: "¿El SEO es un proceso continuo?",
    answer:
      "Sí, el SEO es un proceso continuo. Los algoritmos de búsqueda cambian constantemente, por lo que\
     **es importante seguir optimizando y ajustando las estrategias** para mantener y mejorar tu posicionamiento.",
  },
  {
    question: "¿Qué tipo de negocios pueden beneficiarse del SEO?",
    answer:
      "Cualquier tipo de negocio puede beneficiarse del SEO, desde pequeñas empresas locales hasta grandes\
     corporaciones. **Cualquier empresa que busque aumentar su visibilidad en línea y atraer más clientes**\
     puede beneficiarse de nuestras estrategias SEO.",
  },
];

/*
 *
 *  Banner Section
 *
 */

const TITLE_BANNER = "COMPARTIENDO TU VISIÓN";

const TEXT_BANNER =
  "No dejes pasar la oportunidad de mejorar tu visibilidad en línea y\
atraer más clientes. Contáctanos para una consulta gratuita y descubre\
cómo nuestras estrategias de SEO personalizadas pueden llevar tu negocio\
al siguiente nivel. ¡El éxito digital te espera!";

/*
 *
 *  Schema Section
 *
 */

export const combinedSchemas: Array<OneServiceSchema | CombinedAgregatedOffer> =
  [
    SERVICE_SCHEMA_SEO,
    SERVICE_SCHEMA_SEO_LOCAL,
    SERVICE_SCHEMA_AUDITORIA_SEO,
    SERVICE_SCHEMA_CONSULTORIA_SEO,
    SERVICE_SCHEMA_MANTENIMIENTO_WEB,
  ];

export const breadcrumb: BreadCrumb[] = [
  {
    "@type": "ListItem",
    position: 2,
    name: "Agencia SEO",
    item: URL_AGENCIA_SEO,
  },
];

const SCHEMA: CategorySchema = {
  category: CATEGORY_SEO,
  categoryDescription: CATEGORY_SEO_DESCRIPTION,
  serviceDetailsSchema: combinedSchemas,
  slogan: "Estrategias SEO que despiertan tu presencia online",
  breadcrumb: breadcrumb,
  keyword: KEYWORD_PRINCIPAL,
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
  TITLE_SERVICE: TITLE_SERVICE,
  DESCRIPTION_SERVICE: DESCRIPTION_SERVICE,
  SERVICE_LIST: SERVICE_LIST,
  IMAGE_PARALLAX_URL: IMAGE_PARALLAX_URL,
  TITLE_PARALLAX: TITLE_PARALLAX,
  TEXT_PARALLAX: TEXT_PARALLAX,
  CLIENT_PROBLEMS: CLIENT_PROBLEMS,
  DESCRIPTION_TIMELINE: DESCRIPTION_TIMELINE,
  TIMELINE_STEPS_SERVICE: TIMELINE_STEPS_SERVICE,
  FAQ_ITEMS_SERVICE: FAQ_ITEMS_SERVICE,
  TITLE_BANNER: TITLE_BANNER,
  TEXT_BANNER: TEXT_BANNER,
  PRICE_CARD_SERVICE: undefined,
  TITLE_REASONS: undefined,
  TITLE_PRICING: undefined,
  REASON_ITEMS_SERVICE: undefined,
};

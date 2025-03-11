import { FaqItem } from "@/app/utils/interface/faq";
import TypingAnimation from "@/app/ui/elements/typing-animation";
import { TimelineSteps } from "@/app/utils/interface/timeline";
import { Question } from "@/app/utils/interface/question";
import { ServiceItem } from "@/app/utils/interface/service";
import {
  AUDITORIA_SEO,
  CONSULTORIA_SEO,
  DISEÑO_WEB,
  MANTENIMIENTO_WEB,
  POSICIONAMIENTO_SEO,
  SEO_LOCAL,
} from "@/app/utils/constants/service";
import {
  CategorySchema,
  CombinedServiceSchema,
  OneServiceSchema,
} from "@/app/utils/interface/schema";
import {
  CATEGORY_SEO_DESCRIPTION,
  CATEGORY_SEO,
  CODE_SEO,
  SERVICE_TYPE_AUDITORIA_SEO,
  SERVICE_TYPE_CONSULTORIA_SEO,
  SERVICE_TYPE_DISENO_WEB,
  SERVICE_TYPE_MANTENIMIENTO_WEB,
  SERVICE_TYPE_POSICIONAMIENTO_SEO,
  SERVICE_TYPE_SEO_LOCAL,
} from "@/app/utils/constants/schema";
import { PriceCard } from "@/app/utils/interface/pricing";
import { PRICE_CARD_SERVICE as PRICE_CARD_SEO } from "@/app/agencia-seo/posicionamiento-seo/constants";
import { PRICE_CARD_SERVICE as PRICE_CARD_SEO_LOCAL } from "@/app/agencia-seo/seo-local/constants";
import { PRICE_CARD_SERVICE as PRICE_CARD_AUDITORIA_SEO } from "@/app/agencia-seo/auditoria-seo/constants";
import { PRICE_CARD_SERVICE as PRICE_CARD_DISENO_WEB } from "@/app/diseno-web/constants";
import { PRICE_CARD_SERVICE as PRICE_CARD_MANTENIMIENTO_WEB } from "@/app/agencia-seo/mantenimiento-web/constants";
import { PRICE_CARD_SERVICE as PRICE_CARD_CONSULTORIA_SEO } from "@/app/agencia-seo/consultoria-seo/constants";
import {
  URL_AUDITORIA_SEO,
  URL_DISENO_WEB,
  URL_POSICIONAMIENTO_SEO,
  URL_MANTENIMIENTO_WEB,
  URL_CONSULTORIA_SEO,
} from "@/app/utils/constants/navigation-links";
import { getSchemaServiceCategory } from "@/app/utils/schema/utils";

export const SERVICE = "Agencia SEO";

export const TITLE_HERO = (
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

export const QUESTION_SERVICE: Question = {
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

export const TITLE_SERVICE = "SEO";

export const DESCRIPTION_SERVICE =
  "Impulsa tu visibilidad en línea con nuestras estrategias\
 personalizadas de SEO. Desde la optimización on-page hasta el SEO\
 off-page, cada acción está diseño para atraer más clientes y alcanzar\
 tus objetivos comerciales. ¡Transforma tu presencia digital hoy!";

export const SERVICE_LIST: ServiceItem[] = [
  AUDITORIA_SEO,
  SEO_LOCAL,
  DISEÑO_WEB,
  POSICIONAMIENTO_SEO,
  CONSULTORIA_SEO,
  MANTENIMIENTO_WEB,
];

/*
 *
 *  Parallax Image Section
 *
 */

export const IMAGE_PARALLAX_URL = "parallax-image/agencia-seo.webp";

export const TITLE_PARALLAX = "TRANSFORMA CLICS EN CLIENTES";

export const TEXT_PARALLAX =
  "Hacer SEO es como tener un imán para atraer compradores.";

/*
 *
 *  Client Problems Section
 *
 */

export const CLIENT_PROBLEMS = [
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

export const DESCRIPTION_TIMELINE =
  "Descubre cómo transformamos tu presencia en línea a través de un\
proceso estructurado y efectivo. Desde la consulta inicial hasta la\
implementación y optimización continua, cada paso está diseño para\
adaptarse a las necesidades de tu negocio y maximizar tu visibilidad\
en los motores de búsqueda. Con un enfoque integral que incluye\
estrategias de SEO on-page y off-page, trabajamos contigo para\
alcanzar tus objetivos y atraer más clientes. ¡Solicita tu consulta\
gratuita y descubre el potencial de tu negocio!";

export const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
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

export const FAQ_ITEMS_SERVICE: FaqItem[] = [
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
    question: "¿Cuánto tiempo se tarda en ver resultados con el SEO? ",
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

export const TITLE_BANNER = "COMPARTIENDO TU VISIÓN";

export const TEXT_BANNER =
  "No dejes pasar la oportunidad de mejorar tu visibilidad en línea y\
atraer más clientes. Contáctanos para una consulta gratuita y descubre\
cómo nuestras estrategias de SEO personalizadas pueden llevar tu negocio\
al siguiente nivel. ¡El éxito digital te espera!";

const schema_seo = getSchemaServiceCategory({
  services: PRICE_CARD_SEO,
  serviceType: SERVICE_TYPE_POSICIONAMIENTO_SEO,
  name: "Servicios de Posicionamiento SEO",
  description:
    "Diferentes planes de posicionamiento SEO adaptados a tus necesidades",
  url: URL_POSICIONAMIENTO_SEO,
});

const schema_seo_local = getSchemaServiceCategory({
  services: PRICE_CARD_SEO_LOCAL,
  serviceType: SERVICE_TYPE_SEO_LOCAL,
  name: "Servicios de Posicionamiento SEO Local",
  description:
    "Mejora tu visibilidad en búsquedas locales para atraer clientes de tu zona",
  url: URL_POSICIONAMIENTO_SEO,
});

const schema_auditoria_seo = getSchemaServiceCategory({
  services: PRICE_CARD_AUDITORIA_SEO,
  serviceType: SERVICE_TYPE_AUDITORIA_SEO,
  name: "Servicio de Auditoría SEO",
  description:
    "Análisis completo del estado actual de tu web para identificar oportunidades de mejora",
  url: URL_AUDITORIA_SEO,
});

const schema_diseno_web = getSchemaServiceCategory({
  services: PRICE_CARD_DISENO_WEB,
  serviceType: SERVICE_TYPE_DISENO_WEB,
  name: "Servicios de Diseño Web",
  description:
    "Creación de sitios web optimizados para SEO y experiencia de usuario",
  url: URL_DISENO_WEB,
});

const schema_consultoria_seo = getSchemaServiceCategory({
  services: PRICE_CARD_CONSULTORIA_SEO,
  serviceType: SERVICE_TYPE_CONSULTORIA_SEO,
  name: "Servicio de Consultoría SEO",
  description:
    "Consultoría SEO para optimizar tu sitio web y mejorar tu visibilidad en línea.",
  url: URL_CONSULTORIA_SEO,
});

const schema_mantenimiento_web = getSchemaServiceCategory({
  services: PRICE_CARD_MANTENIMIENTO_WEB,
  serviceType: SERVICE_TYPE_MANTENIMIENTO_WEB,
  name: "Servicio de Mantenimiento Web",
  description:
    "Mantenimiento y optimización de sitios web para mejorar su rendimiento y experiencia de usuario",
  url: URL_MANTENIMIENTO_WEB,
});

const combinedSchemas: Array<OneServiceSchema | CombinedServiceSchema> = [
  schema_seo,
  schema_seo_local,
  schema_auditoria_seo,
  schema_diseno_web,
  schema_consultoria_seo,
  schema_mantenimiento_web,
];

export const SCHEMA: CategorySchema = {
  category: CATEGORY_SEO,
  codeCategory: CODE_SEO,
  categoryDescription: CATEGORY_SEO_DESCRIPTION,
  serviceDetailsSchema: combinedSchemas,
  slogan: "Estrategias SEO que despiertan tu presencia online",
};

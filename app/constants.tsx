import TypingAnimation from "@/app/ui/elements/typing-animation";
import { Question } from "@/app/utils/interface/question";
import { TimelineSteps } from "@/app/utils/interface/timeline";
import { FaqItem } from "@/app/utils/interface/faq";
import { ServiceItem } from "@/app/utils/interface/service";

export const SERVICE = "Agencia de Marketing Digital";

export const TITLE_HERO = (
  <p>
    Somos una <span className="custom-title">{SERVICE}</span> que crea
    estrategias personalizadas que{" "}
    <TypingAnimation
      texts={[
        "maximiza tu retorno de inversión",
        "transforma tu tráfico en conversiones",
        "fortalece tu presencia como marca",
        "construye relaciones duraderas con tus clientes",
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
  question: "¿Por qué invertir en estrategias de marketing digital?",
  boldAnswer: "Porque la visibilidad online es clave para el éxito.",
  answer:
    "Una sólida estrategia de marketing digital te proporciona un alcance duradero y efectivo.",
  boldConclusion: "Más clientes potenciales",
  conclusion: " y menos incertidumbre.",
};

/*
 *
 *  Services Section
 *
 */

export const TITLE_SERVICE = "de Marketing";

export const DESCRIPTION_SERVICE =
  "Potencia tu presencia en línea con nuestras soluciones integrales de marketing digital. Combinamos un diseño web atractivo y funcional, la creación de landing pages optimizadas y estrategias de SEO efectivas para maximizar tu visibilidad. Desde la construcción de sitios web hasta la gestión de redes sociales y campañas publicitarias, cada acción está diseñada para atraer más clientes y ayudarte a alcanzar tus objetivos comerciales. ¡Transforma tu estrategia digital y destaca en el mundo online hoy mismo!";

import {
  PUBLICIDAD_PPC,
  EMAIL_MARKETING,
  CHATBOTS,
  BRANDING,
  GESTION_REDES_SOCIALES,
  POSICIONAMIENTO_SEO,
  DISEÑO_WEB,
} from "@/app/utils/constants/service";

export const SERVICE_LIST: ServiceItem[] = [
  DISEÑO_WEB,
  POSICIONAMIENTO_SEO,
  CHATBOTS,
  PUBLICIDAD_PPC,
  EMAIL_MARKETING,
  BRANDING,
  GESTION_REDES_SOCIALES,
];

/*
 *
 *  Parallax Image Section
 *
 */

export const IMAGE_PARALLAX_URL = "/parallax-image/agencia-seo.webp";

export const TITLE_PARALLAX = "AUMENTA TU IMPACTO DIGITAL";

export const TEXT_PARALLAX =
  "El marketing digital es la clave para destacar en un mundo competitivo y conectado.";

/*
 *
 *  Client Problems Section
 *
 */

export const CLIENT_PROBLEMS = [
  '"Mi sitio web no refleja la calidad de mis productos y no atrae a los clientes."',
  '"He lanzado campañas de publicidad, pero no obtengo el retorno de inversión esperado."',
  '"Mis redes sociales tienen pocos seguidores y no generan interacción."',
  '"No sé cómo crear contenido que resuene con mi audiencia y los motive a comprar."',
  '"Mis correos electrónicos no son abiertos y mis campañas de email marketing no generan resultados."',
  '"Mi marca no tiene una identidad clara y no sé cómo comunicarla efectivamente."',
  '"Mis clientes potenciales no encuentran mi negocio en las búsquedas locales."',
  '"He intentado optimizar mi sitio web, pero no veo mejoras en el tráfico."',
  '"No tengo tiempo para gestionar mis redes sociales y mantener una presencia activa."',
  '"Mis landing pages no convierten, y no sé cómo mejorarlas."',
  '"A pesar de tener un buen producto, no logro destacar frente a la competencia."',
  '"No sé cómo utilizar chatbots para mejorar la atención al cliente y aumentar las conversiones."',
];

/*
 *
 *  Timeline Section
 *
 */

export const DESCRIPTION_TIMELINE =
  "Descubre cómo transformamos tu presencia digital a través de un proceso estructurado y efectivo. Desde la\
 consulta inicial hasta la implementación y optimización continua, cada paso está diseñado para adaptarse a\
 las necesidades de tu negocio y maximizar tu visibilidad en línea. Con un enfoque integral que incluye\
 estrategias de marketing digital, trabajamos contigo para alcanzar tus objetivos y atraer más clientes.";

export const TIMELINE_STEPS_SERVICE: TimelineSteps[] = [
  {
    title: "Consultoría Gratuita",
    description:
      "Iniciamos con una consulta gratuita para comprender tus necesidades y objetivos. Escuchamos tus desafíos y analizamos cómo podemos ayudarte a crecer en el entorno digital. Esta es tu oportunidad para plantear preguntas y conocer nuestro enfoque.",
  },
  {
    title: "Análisis de Situación Actual",
    description:
      "Realizamos un análisis exhaustivo de tu presencia en línea y de tu competencia. Evaluamos el rendimiento actual, las métricas clave y las oportunidades de mejora. Esta evaluación nos permite diseñar una estrategia de marketing digital personalizada que se adapte a tu negocio.",
  },
  {
    title: "Propuesta de Estrategia",
    description:
      "Presentamos una propuesta detallada que incluye nuestras recomendaciones y un plan de acción claro. Te explicamos cómo cada paso contribuirá a mejorar tu visibilidad en línea y atraer más clientes. Queremos que tengas claridad sobre la inversión y el retorno esperado.",
  },
  {
    title: "Implementación de Estrategias de Marketing Digital",
    description:
      "Una vez que apruebes nuestra propuesta, comenzaremos a implementar las estrategias acordadas. Esto incluye la optimización de tu presencia en línea, la creación de contenido relevante, mejoras técnicas en tu sitio web (si ya cuentas con uno), y estrategias de marketing digital como publicidad en redes sociales y gestión de campañas. Cada acción está diseñada para maximizar tu visibilidad y atraer a un mayor número de clientes.",
  },
  {
    title: "Monitoreo y Optimización Continua",
    description:
      "Después de la implementación, monitoreamos de cerca el rendimiento de tus campañas. Analizamos las métricas clave y hacemos ajustes según sea necesario. Optimizaremos tu estrategia en función de los resultados obtenidos y las tendencias del mercado. Nuestro objetivo es asegurar que tu negocio siga creciendo y se mantenga competitivo en el entorno digital.",
  },
  {
    title: "Informes Periódicos",
    description:
      "Te proporcionamos informes regulares que muestran el progreso de nuestras estrategias. Verás cómo aumenta tu tráfico, mejora tu posicionamiento y se generan más leads. La transparencia es clave, y queremos que estés al tanto de cada avance.",
  },
  {
    title: "Soporte y Asesoramiento Constante",
    description:
      "Estamos aquí para ti en cada etapa del proceso. Ofrecemos soporte continuo y asesoramiento para resolver cualquier duda o inquietud que puedas tener. Tu éxito es nuestra prioridad, y estamos comprometidos a ayudarte a alcanzar tus metas.",
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

export const TITLE_BANNER = "CONECTA CON TU AUDIENCIA";

export const TEXT_BANNER =
  "No pierdas la oportunidad de potenciar tu presencia en línea y atraer más clientes. Contáctanos para una consulta\
 gratuita y descubre cómo nuestras estrategias personalizadas de marketing digital, desde diseño web hasta gestión\
 de redes sociales, pueden transformar tu negocio. ¡El futuro digital de tu marca comienza hoy!";

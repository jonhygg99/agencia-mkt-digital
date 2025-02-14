import BubbleInfo from "../ui/elements/bubble-info";
import ContentStrategyIcon from "../ui/icons/bubble/content-strategy";
import UIDesignIcon from "../ui/icons/bubble/ui-design";
import WebDevIcon from "../ui/icons/bubble/web-dev";
import WebSEOIcon from "../ui/icons/bubble/web-seo";
import Image from "next/image";

export const StickyImage = (
  <div className="hidden lg:block">
    <div className="sticky top-24">
      <div className="relative h-[calc(100vh-8rem)] w-full py-12">
        <Image
          src="/portrait.webp"
          alt="Consultor SEO"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </div>
  </div>
);
export const TitleConsultor = (
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    <span className="custom-title">Consultor SEO</span> Freelance en Barcelona
  </h1>
);

export const DescriptionConsultor = (
  <p>
    ¿Te gustaría que tu sitio web apareciera en las primeras posiciones de
    búsqueda? En nuestra consultoría SEO, transformamos tu presencia digital en
    un imán de tráfico y clientes.
    <br />
    <span className="font-bold">Nuestra misión es clara:</span> Ayudarte a
    destacar en un mercado competitivo. Realizamos un análisis exhaustivo de tu
    sitio, identificamos oportunidades y diseñamos una estrategia SEO
    personalizada que se alinee con tus objetivos comerciales.
    <br /> Con nuestro enfoque en SEO orientado y eficiente, optimizamos cada
    aspecto de tu sitio para maximizar su rendimiento. Desde la investigación de
    palabras clave hasta la creación de contenido auténtico y relevante, cada
    detalle cuenta.
  </p>
);

export const TitleService = (
  <h2 className="text-4xl font-bold mb-12">
    <span className="custom-title">Servicios</span> como Consultor SEO
  </h2>
);

export const ServiceWebDesigner = (
  <BubbleInfo
    Icon={WebDevIcon}
    title="Desarrollador Web"
    description="Desarrollo de sitios web optimizados para SEO desde su base, asegurando una estructura técnica
 sólida y rendimiento óptimo."
  />
);

export const ServiceUIDesigner = (
  <BubbleInfo
    Icon={UIDesignIcon}
    title="Diseñador UI/UX"
    description="Creación de interfaces intuitivas y experiencias de usuario que mejoran la interacción y reducen
 el rebote."
  />
);

export const ServiceSEO = (
  <BubbleInfo
    Icon={WebSEOIcon}
    title="Optimización SEO"
    description="Implementación de estrategias SEO avanzadas para mejorar el posicionamiento y la visibilidad en
 buscadores."
  />
);

export const ServiceContent = (
  <BubbleInfo
    Icon={ContentStrategyIcon}
    title="Estrategia de Contenidos"
    description="Desarrollo de contenido relevante y optimizado que conecta con tu audiencia y mejora el
 posicionamiento."
  />
);

export const TitlePricing = (
  <h2 className="text-4xl font-bold mb-12">
    <span className="custom-title">Pricing</span> como Consultor SEO
  </h2>
);

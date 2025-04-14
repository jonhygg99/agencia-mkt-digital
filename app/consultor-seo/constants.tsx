import { PriceCard } from "@/app/utils/interface/pricing";
import BubbleInfo from "@/app/ui/elements/bubble-info";
import ContentStrategyIcon from "@/app/ui/icons/bubble/content-strategy";
import UIDesignIcon from "@/app/ui/icons/bubble/ui-design";
import WebDevIcon from "@/app/ui/icons/bubble/web-dev";
import WebSEOIcon from "@/app/ui/icons/bubble/web-seo";
import Image from "next/image";
import { IMAGE_JONATHAN_GOMEZ } from "@/app/utils/constants/image";

/*
 *
 * Sticky Image
 *
 */

export const STICKY_IMAGE = (
  <div className="hidden lg:block">
    <div className="sticky top-24">
      <div className="relative h-[calc(100vh-8rem)] w-full py-12">
        <Image
          src={IMAGE_JONATHAN_GOMEZ}
          alt="Consultor SEO - Jonathan Gómez"
          title="Consultor SEO - Jonathan Gómez"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
    </div>
  </div>
);

/*
 *
 * Consultor Section
 *
 */

export const TITLE_CONSULTOR = (
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
    <span className="custom-title">Consultor SEO</span> Freelance en Barcelona
  </h1>
);

export const DESCRIPTION_CONSULTOR = (
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

/*
 *
 * Service Section
 *
 */

export const TITLE_SERVICE = (
  <h2 className="text-4xl font-bold mb-12">
    <span className="custom-title">Servicios</span> como Consultor SEO
  </h2>
);

export const SERVICE_WEB_DESIGNER = (
  <BubbleInfo
    Icon={WebDevIcon}
    title="Desarrollador Web"
    description="Desarrollo de sitios web optimizados para SEO desde su base, asegurando una estructura técnica
 sólida y rendimiento óptimo."
  />
);

export const SERVICE_UI_DESIGNER = (
  <BubbleInfo
    Icon={UIDesignIcon}
    title="Diseñador UI/UX"
    description="Creación de interfaces intuitivas y experiencias de usuario que mejoran la interacción y reducen
 el rebote."
  />
);

export const SERVICE_SEO = (
  <BubbleInfo
    Icon={WebSEOIcon}
    title="Optimización SEO"
    description="Implementación de estrategias SEO avanzadas para mejorar el posicionamiento y la visibilidad en
 buscadores."
  />
);

export const SERVICE_CONTENT = (
  <BubbleInfo
    Icon={ContentStrategyIcon}
    title="Estrategia de Contenidos"
    description="Desarrollo de contenido relevante y optimizado que conecta con tu audiencia y mejora el
 posicionamiento."
  />
);

/*
 *
 * Pricing Section
 *
 */

export const TITLE_PRICING = (
  <h2 className="text-4xl font-bold mb-12">
    <span className="custom-title">Pricing</span> como Consultor SEO
  </h2>
);

export const PRICE_CARD_SERVICE: PriceCard[] = [
  {
    title: "Basic",
    price: "29",
    description: "",
    features: [
      { text: "Consultoría", included: true },
      { text: "Desarrollo Web", included: true },
      { text: "Diseño UI/UX", included: true },
      { text: "Marekting de Contenidos", included: true },
    ],
  },
  {
    title: "Advanced",
    price: "29",
    description: "",
    features: [
      { text: "Consultoría", included: true },
      { text: "Desarrollo Web", included: true },
      { text: "Diseño UI/UX", included: true },
      { text: "Marekting de Contenidos", included: true },
    ],
  },
  {
    title: "Premium",
    price: "29",
    description: "",
    features: [
      { text: "Consultoría", included: true },
      { text: "Desarrollo Web", included: true },
      { text: "Diseño UI/UX", included: true },
      { text: "Marekting de Contenidos", included: true },
    ],
  },
];

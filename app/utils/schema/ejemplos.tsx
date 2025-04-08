const SIMPLE_SERVICE_SCHEMA = {
  serviceCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Marketing Digital",
    itemListElement: [
      {
        "@type": "Service",
        "@id": "http://localhost:3000/#seo-service",
        name: "SEO y Posicionamiento Web",
        description:
          "Optimización SEO para mejorar la visibilidad en buscadores y aumentar el tráfico orgánico.",
        provider: { "@id": "http://localhost:3000/#organization" },
        serviceType: "SEO",
        category: "SEO Services",
      },
      {
        "@type": "Service",
        "@id": "http://localhost:3000/#web-design-service",
        name: "Diseño Web con SEO",
        description:
          "Diseño de sitios web optimizados para SEO, con velocidad y experiencia de usuario mejorada.",
        provider: { "@id": "http://localhost:3000/#organization" },
        serviceType: "Web Design",
        category: "Web Design Services",
      },
      {
        "@type": "Service",
        "@id": "http://localhost:3000/#seo-audit-service",
        name: "Auditoría SEO",
        description:
          "Análisis detallado de tu sitio web para identificar oportunidades de mejora en SEO.",
        provider: { "@id": "http://localhost:3000/#organization" },
        serviceType: "SEO Audit",
        category: "SEO Services",
      },
    ],
  },
};

// TODO
const rating = {
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "95",
    bestRating: "5",
    worstRating: "1",
  },
  estimatedSchedule: {
    "@type": "Schedule",
    expectedDuration: "P15D",
    scheduleTimezone: "Europe/Madrid",
  },
  potentialAction: {
    "@type": "OrderAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "http://localhost:3000/agencia-seo/auditoria-seo#contact",
      inLanguage: "es",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Order",
      orderStatus: "http://schema.org/OrderProcessing",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    lastReviewed: "2025-03-10",
  },
};

// TODO
// Puedes colocarlo dentro del itemOffered de un Offer o directamente como parte de la entidad LocalBusiness para reflejar una opinión sobre el negocio completo.
const Review = {
  "@type": "Review",
  author: {
    "@type": "Person",
    name: "Carlos Pérez",
  },
  datePublished: "2024-11-10",
  reviewBody:
    "El servicio de SEO fue excelente, en pocos meses aumentaron las visitas de mi web un 200%. Muy recomendados.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
};

// TODO

const antes = {
  "@type": "AggregateOffer",
  name: "Servicios de Posicionamiento SEO",
  offers: [
    {
      "@type": "Offer",
      name: "SEO Técnico",
      //...
    },
  ],
};

const deberia = {
  "@type": "Service",
  name: "Servicios de Posicionamiento SEO",
  serviceType: "SEO",
  category: "Marketing Digital",
  offers: {
    "@type": "AggregateOffer",
    name: "Ofertas de servicios SEO",
    lowPrice: "200",
    highPrice: "1200",
    priceCurrency: "EUR",
    offers: [
      {
        "@type": "Offer",
        name: "SEO Técnico",
        price: "500",
        priceCurrency: "EUR",
        itemOffered: {
          "@type": "Service",
          name: "SEO Técnico",
          description: "Optimización técnica del sitio web",
        },
      },
      {
        "@type": "Offer",
        name: "Linkbuilding",
        price: "700",
        priceCurrency: "EUR",
        itemOffered: {
          "@type": "Service",
          name: "Linkbuilding",
          description: "Creación de enlaces externos",
        },
      },
    ],
  },
};

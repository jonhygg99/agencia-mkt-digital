import {
  DOMINIO,
  SCHEMA_URL_LOGO_ID,
  SCHEMA_URL_ORGANIZATION_ID,
  SCHEMA_URL_WEBSITE_ID,
} from "@/app/utils/constants/navigation-links";

export const NOMBRE_EMPRESA = "Despierta tu Web";
export const TELEFONO_EMPRESA = "+34 659 34 36 25";
export const EMAIL_EMPRESA = "info@despiertatuweb.com";
export const CIF_EMPRESA = "B56683642";

export const STREET_ADDRESS = "C/ Argullós 45, 2 2";
export const ADDRESS_LOCALITY = "Barcelona";
export const POSTAL_CODE = "08016";
export const COUNTRY_CODE = "ES";
export const COUNTRY = "España";
export const REGION = "Cataluña";
export const DIRECCION_EMPRESA = `${STREET_ADDRESS}, ${ADDRESS_LOCALITY} ${POSTAL_CODE} ${COUNTRY}`;
export const LATITUDE = "41.44066903266001";
export const LONGITUDE = "2.182710377971193";
export const AREA_SERVED = {
  areaServed: {
    "@type": "Country",
    name: COUNTRY, // TODO: cambiar si pasamos a internacional
  },
};
export const AUDIENCE = {
  audience: {
    "@type": "Audience",
    audienceType:
      "Pequeñas y medianas empresas que buscan aumentar su presencia online",
  },
};
export const REDES_SOCIALES_EMPRESA = [
  "https://www.facebook.com/despiertatuweb",
  "https://www.instagram.com/despiertatuweb",
];

export const DAYS_OPEN = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
export const OPEN_HOUR = "09:00";
export const CLOSES_HOUR = "18:00";

export const FOUNDER_NAME = "Jonathan Gómez";
export const FOUNDER_JOB_TITLE = "CEO y Fundador";

export const SCHEMA_ORGANIZATION = {
  "@id": SCHEMA_URL_ORGANIZATION_ID,
  name: NOMBRE_EMPRESA,
  description:
    "Agencia de marketing digital especializada en SEO y diseño web. Potenciamos tu negocio con estrategias personalizadas que aumentan tu visibilidad online y generan más ventas.",
  slogan: "Estrategias digitales que despiertan tu negocio online",
  url: DOMINIO,
  mainEntityOfPage: {
    "@id": SCHEMA_URL_WEBSITE_ID,
  },
  logo: {
    "@type": "ImageObject",
    "@id": SCHEMA_URL_LOGO_ID,
    url: DOMINIO + "/logo.webp",
    width: "500",
    height: "500",
    contentUrl: DOMINIO + "/logo.webp",
    caption: "Logo de Despierta tu web",
    representativeOfPage: true,
  },
  // "image": [
  //   "https://despiertatuweb.com/img/oficina.webp",
  //   "https://despiertatuweb.com/img/equipo.webp"
  // ],
  // slogan: schema.slogan, // Todo: ??Diferente para cada categoría
  priceRange: "€€",
  paymentAccepted: ["BankTransfer"],
  currenciesAccepted: "EUR",
  telephone: TELEFONO_EMPRESA,
  email: EMAIL_EMPRESA,
  // Todo: Cambiar fecha
  foundingDate: "2022-05-01",
  //   hasMap: "https://www.google.com/maps?cid=TU_CID_DE_GOOGLE_MAPS",
  address: {
    "@type": "PostalAddress",
    streetAddress: STREET_ADDRESS,
    addressLocality: ADDRESS_LOCALITY,
    postalCode: POSTAL_CODE,
    addressCountry: COUNTRY_CODE,
    addressRegion: REGION,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LATITUDE,
    longitude: LONGITUDE,
  },
  sameAs: REDES_SOCIALES_EMPRESA,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAYS_OPEN,
      opens: OPEN_HOUR,
      closes: CLOSES_HOUR,
    },
  ],
  founder: {
    "@type": "Person",
    name: FOUNDER_NAME,
    jobTitle: FOUNDER_JOB_TITLE,
  },
  ...AREA_SERVED,
  ...AUDIENCE,
  //   award: [
  //     "Premio SEO Barcelona 2023",
  //     "Mejor Agencia Digital Emergente 2022",
  //   ],
};

export const SCHEMA_WEBSITE = {
  "@type": "WebSite",
  "@id": SCHEMA_URL_WEBSITE_ID,
  url: DOMINIO,
  name: NOMBRE_EMPRESA,
  description:
    "Agencia de Marketing Digital en Barcelona | Especialistas en SEO y Diseño Web",
  inLanguage: "es",
  publisher: {
    "@id": SCHEMA_URL_ORGANIZATION_ID,
  },
  about: {
    "@id": SCHEMA_URL_ORGANIZATION_ID,
  },
};

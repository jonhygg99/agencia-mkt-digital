import { DOMINIO } from "@/app/utils/constants/navigation-links";

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
  name: NOMBRE_EMPRESA,
  "@id": "http://localhost:3000/#organization",
  url: DOMINIO,
  logo: {
    "@type": "ImageObject",
    "@id": DOMINIO + "/#logo",
    url: DOMINIO + "/logo.webp",
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
  paymentAccepted: "Transferencia Bancaria",
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

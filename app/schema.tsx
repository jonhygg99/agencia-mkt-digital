import {
  ADDRESS_LOCALITY,
  COUNTRY_CODE,
  EMAIL_EMPRESA,
  FOUNDER_JOB_TITLE,
  FOUNDER_NAME,
  LATITUDE,
  LONGITUDE,
  NOMBRE_EMPRESA,
  POSTAL_CODE,
  REGION,
  STREET_ADDRESS,
  TELEFONO_EMPRESA,
} from "@/app/utils/constants/empresa";
import { DOMINIO } from "@/app/utils/constants/navigation-links";

export const SchemaMarkup = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: NOMBRE_EMPRESA,
          url: DOMINIO,
          logo: DOMINIO + "/logo.webp",
          description: "Agencia especializada en SEO y marketing digital",
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
          contactPoint: {
            "@type": "ContactPoint",
            telephone: TELEFONO_EMPRESA,
            contactType: "customer service",
            email: EMAIL_EMPRESA,
            areaServed: COUNTRY_CODE, // TODO: CAMBIAR SI PASAMOS A INTERNACIONAL
            availableLanguage: ["Spanish", "Catalan", "English"],
          },
          sameAs: ["https://www.facebook.com/despiertatuweb"],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          founder: {
            "@type": "Person",
            name: FOUNDER_NAME,
            jobTitle: FOUNDER_JOB_TITLE,
          },
        }),
      }}
    />
  );
};

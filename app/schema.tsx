import {
  ADDRESS_LOCALITY,
  COUNTRY_CODE,
  EMAIL_EMPRESA,
  NOMBRE_EMPRESA,
  POSTAL_CODE,
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
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: TELEFONO_EMPRESA,
            contactType: "customer service",
            email: EMAIL_EMPRESA,
            areaServed: COUNTRY_CODE,
          },
          sameAs: ["https://www.facebook.com/despiertatuweb"],
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        }),
      }}
    />
  );
};

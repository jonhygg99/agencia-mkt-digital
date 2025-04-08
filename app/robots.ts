import { MetadataRoute } from "next";
import { DOMINIO } from "@/app/utils/constants/navigation-links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${DOMINIO}/sitemap.xml`,
  };
}

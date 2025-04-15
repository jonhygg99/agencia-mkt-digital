import { MetadataRoute } from "next";
import {
  AGENCIA_MARKETING_FOOTER,
  AGENCIA_SEO_FOOTER,
  DOMINIO,
  EMPRESA_FOOTER,
  TEXTOS_LEGALES,
} from "@/app/utils/constants/navigation-links";

const getFooterPages = (): { url: string; lastModified: Date }[] => {
  const lastModifiedDate = new Date();
  const pages: { url: string; lastModified: Date }[] = [
    { url: DOMINIO, lastModified: lastModifiedDate },
  ];

  const sections = [
    EMPRESA_FOOTER,
    AGENCIA_MARKETING_FOOTER,
    AGENCIA_SEO_FOOTER,
    TEXTOS_LEGALES,
  ];

  sections.forEach((section) => {
    section.forEach((item) => {
      pages.push({
        url: item.href,
        lastModified: lastModifiedDate,
      });
    });
  });

  return pages;
};

const sitemap_pages = getFooterPages();

const sitemap = (): MetadataRoute.Sitemap => {
  return sitemap_pages;
};

export default sitemap;

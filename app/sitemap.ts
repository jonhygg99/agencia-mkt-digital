import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://your-domain.com/servicios",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://your-domain.com/contacto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Add more URLs as needed
  ];
}

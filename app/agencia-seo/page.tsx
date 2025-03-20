import type { Metadata } from "next";
import { METADATA } from "./metadata";
import PageCategory from "@/app/ui/pages/page-category";
import { DATA } from "./constants";

export const metadata: Metadata = METADATA;

export default function Page() {
  return (
    <PageCategory
      data={DATA}
      contactService="SEO"
      stepsService="Estrategia SEO"
      faqPosesivo="nuestra"
    />
  );
}

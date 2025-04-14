import { Metadata } from "next";
import { DATA } from "./constants";
import PageCategory from "@/app/ui/pages/page-category";
import { METADATA } from "./metadata";

export const metadata: Metadata = METADATA;

export default function Page() {
  return (
    <PageCategory
      data={DATA}
      contactService="tu Diseño Web a medida"
      stepsService="Diseño Web con SEO"
      faqPosesivo="nuestro"
      mensual={false}
    />
  );
}

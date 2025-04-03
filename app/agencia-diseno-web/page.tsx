import { DATA } from "./constants";
import PageCategory from "@/app/ui/pages/page-category";

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

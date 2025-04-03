import { DATA } from "./constants";
import PageCategory from "@/app/ui/pages/page-category";

export default function Page() {
  return (
    <PageCategory
      data={DATA}
      contactService={DATA.SERVICE}
      stepsService={`${DATA.SERVICE} con SEO`}
      faqPosesivo="nuestro"
    />
  );
}

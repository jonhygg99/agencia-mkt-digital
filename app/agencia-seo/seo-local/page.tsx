import { Metadata } from "next";
import { METADATA } from "./metadata";
import PageService from "@/app/ui/pages/page-service";
import { DATA, SERVICE } from "./constants";

export const metadata: Metadata = METADATA;

export default function Page() {
  return <PageService data={DATA} title={`Agencia de ${SERVICE}`} />;
}

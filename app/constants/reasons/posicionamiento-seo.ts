import AttractionIcon from "@/app/ui/icons/bubble/attraction";
import TrustIcon from "@/app/ui/icons/bubble/trust";
import UserExperienceIcon from "@/app/ui/icons/bubble/user-experience";
import RoiIcon from "@/app/ui/icons/bubble/roi";
import { ReasonItem } from "./interface";

export const reasonItemsSEO: ReasonItem[] = [
  {
    icon: AttractionIcon,
    title: "Tráfico Orgánico",
    description:
      "El SEO mejora tu visibilidad en los resultados naturales, es decir, no pagas por estar ahí, lo que se\
 traduce en tráfico orgánico gratuito que visitará tu sitio web regularmente.",
  },
  {
    icon: TrustIcon,
    title: "Autoridad y Credibilidad",
    description:
      'Los sitios web que aparecen en las primeras posiciones de Google son percibidos como más confiables.\
 Como dice el dicho, "si Google confía en ti, tus clientes también lo harán".',
  },
  {
    icon: UserExperienceIcon,
    title: "Mayor Tasa de Conversisón",
    description:
      "El SEO atrae tráfico altamente cualificado a tu web. Los usuarios que llegan a través de búsquedas\
 orgánicas tienen una intención específica, lo que aumenta las probabilidades de conversión.",
  },
  {
    icon: RoiIcon,
    title: "ROI Elevado",
    description:
      "El SEO es una inversión a largo plazo con un excelente retorno. Una vez posicionado, tu sitio web continuará\
 generando tráfico orgánico sin necesidad de pagar por cada clic como en la publicidad.",
  },
];

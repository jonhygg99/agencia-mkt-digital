import WebSEOIcon from "@/app/ui/icons/bubble/web-seo";
import { ServiceItem } from "@/app/utils/interface/service";
import WebIcon from "@/app/ui/icons/bubble/web";
import LocationIcon from "@/app/ui/icons/bubble/location";
import GrowthIcon from "@/app/ui/icons/bubble/growth";
import ConsultingIcon from "@/app/ui/icons/bubble/consulting";
import MaintenanceIcon from "@/app/ui/icons/bubble/maintenance";
import EarthIcon from "@/app/ui/icons/bubble/earth";
import ContentIcon from "@/app/ui/icons/bubble/content";
import LinkIcon from "@/app/ui/icons/bubble/link";
import MigrationIcon from "@/app/ui/icons/bubble/migration";
import PenaltyIcon from "@/app/ui/icons/bubble/penalty";
import AdIcon from "@/app/ui/icons/bubble/ad";
import EmailIcon from "@/app/ui/icons/bubble/email";
import ChatbotIcon from "@/app/ui/icons/bubble/chatbot";
import BrandingIcon from "@/app/ui/icons/bubble/branding";
import SocialIcon from "@/app/ui/icons/bubble/social";
import {
  URL_DISENO_WEB,
  URL_POSICIONAMIENTO_SEO,
  URL_SEO_LOCAL,
} from "./navigation-links";

export const AUDITORIA_SEO: ServiceItem = {
  Icon: WebSEOIcon,
  title: "Auditoría SEO",
  description:
    "Evaluamos tu sitio web para identificar fallos y áreas de mejora, implementando soluciones y aprovechando nuevas oportunidades para potenciar tu estrategia SEO.",
  comingSoon: false,
  url: undefined,
};

export const SEO_LOCAL: ServiceItem = {
  Icon: LocationIcon,
  title: "SEO Local",
  description:
    "Posicionamos tu negocio en las búsquedas geolocalizadas, asegurando que los clientes potenciales te encuentren justo cuando está buscando lo que ofreces.",
  comingSoon: false,
  url: URL_SEO_LOCAL,
};

export const DISEÑO_WEB: ServiceItem = {
  Icon: WebIcon,
  title: "Diseño Web",
  description:
    "Creamos sitios web modernos y optimizados para SEO desde su concepción. Diseño responsive, velocidad de carga optimizada y estructura SEO-friendly para maximizar tu visibilidad online.",
  comingSoon: false,
  url: URL_DISENO_WEB,
};

export const POSICIONAMIENTO_SEO: ServiceItem = {
  Icon: GrowthIcon,
  title: "Posicionamiento SEO",
  description:
    "Potenciamos el rendimiento de tu sitio web ya construido. Realizamos un análisis exhaustivo para identificar áreas de mejora y optimizamos tu contenido, estructura y enlaces.",
  comingSoon: false,
  url: URL_POSICIONAMIENTO_SEO,
};

export const CONSULTORIA_SEO: ServiceItem = {
  Icon: ConsultingIcon,
  title: "Consultoría SEO",
  description:
    "Asesoramiento experto para optimizar tu estrategia SEO. Análisis detallado, recomendaciones personalizadas y plan de acción para mejorar tu posicionamiento web.",
  comingSoon: false,
  url: undefined,
};

export const MANTENIMIENTO_WEB: ServiceItem = {
  Icon: MaintenanceIcon,
  title: "Mantenimiento Web",
  description:
    "Mantenemos tu sitio web actualizado, seguro y optimizado. Incluye actualizaciones de contenido, copias de seguridad, monitoreo de rendimiento y soporte técnico continuo.",
  comingSoon: false,
  url: undefined,
};

export const SEO_INTERNACIONAL: ServiceItem = {
  Icon: EarthIcon,
  title: "SEO Internacional",
  description:
    "Adaptamos tu estrategia para diferentes mercados y audiencias, optimizando contenido y keywords para maximizar tu visibilidad en múltiples países.",
  comingSoon: false,
  url: undefined,
};

export const MARKETING_CONTENIDO: ServiceItem = {
  Icon: ContentIcon,
  title: "Marketing de Contenido",
  description:
    "Creamos contenido de calidad que informa y convierte. Desde blogs a infografías, nuestras estrategias mejoran tu posicionamiento en buscadores y fortalecen tu marca.",
  comingSoon: false,
  url: undefined,
};

export const LINK_BUILDING: ServiceItem = {
  Icon: LinkIcon,
  title: "Link Building",
  description:
    "Implementamos tácticas efectivas para obtener enlaces de calidad que\
  aumenten tu autoridad y visibilidad en Google, mejorando así tu\
  posicionamiento.",
  comingSoon: false,
  url: undefined,
};

export const MIGRACIONES_SEO: ServiceItem = {
  Icon: MigrationIcon,
  title: "Migraciones SEO",
  description:
    "Gestionamos la migración de tu sitio web para preservar tu posicionamiento y tráfico, optimizando redirecciones y contenido para una transición efectiva.",
  comingSoon: false,
  url: undefined,
};

export const PENALIZACIONES_GOOGLE: ServiceItem = {
  Icon: PenaltyIcon,
  title: "Penalizaciones de Google",
  description:
    "Realizamos un diagnóstico completo, identificamos las causas y aplicamos\
  soluciones efectivas para restaurar tu posicionamiento.",
  comingSoon: true,
  url: undefined,
};

export const PUBLICIDAD_PPC: ServiceItem = {
  Icon: AdIcon,
  title: "Publicidad en Línea (PPC)",
  description:
    "Gestionamos campañas de publicidad paga efectivas en Google Ads y redes sociales, maximizando tu ROI y alcanzando a tu audiencia objetivo de manera precisa.",
  comingSoon: true,
  url: undefined,
};

export const EMAIL_MARKETING: ServiceItem = {
  Icon: EmailIcon,
  title: "Email Marketing",
  description:
    "Desarrollamos estrategias personalizadas de email marketing para nutrir leads, fidelizar clientes y aumentar las conversiones a través de comunicaciones efectivas.",
  comingSoon: true,
  url: undefined,
};

export const CHATBOTS: ServiceItem = {
  Icon: ChatbotIcon,
  title: "Chatbots",
  description:
    "Implementamos soluciones de chatbots inteligentes para mejorar la atención al cliente, automatizar respuestas y aumentar la eficiencia en la comunicación con tus usuarios.",
  comingSoon: true,
  url: undefined,
};

export const BRANDING: ServiceItem = {
  Icon: BrandingIcon,
  title: "Branding",
  description:
    "Creamos y fortalecemos la identidad de tu marca, desarrollando estrategias que conecten con tu audiencia y destaquen tu propuesta de valor en el mercado digital.",
  comingSoon: true,
  url: undefined,
};

export const GESTION_REDES_SOCIALES: ServiceItem = {
  Icon: SocialIcon,
  title: "Gestión de Redes Sociales",
  description:
    "Administramos tus redes sociales de manera estratégica, creando contenido relevante, aumentando el engagement y construyendo una comunidad activa alrededor de tu marca.",
  comingSoon: true,
  url: undefined,
};

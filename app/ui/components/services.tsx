import ContentIcon from "@/app/ui/icons/bubble/content";
import EarthIcon from "@/app/ui/icons/bubble/earth";
import GrowthIcon from "@/app/ui/icons/bubble/growth";
import LinkIcon from "@/app/ui/icons/bubble/link";
import LocationIcon from "@/app/ui/icons/bubble/location";
import MigrationIcon from "@/app/ui/icons/bubble/migration";
import PenaltyIcon from "@/app/ui/icons/bubble/penalty";
import UpTrend from "@/app/ui/icons/bubble/uptrend";
import WebIcon from "@/app/ui/icons/bubble/web";
import ConsultingIcon from "@/app/ui/icons/bubble/consulting";
import MaintenanceIcon from "@/app/ui/icons/bubble/maintenance";
import WebSEOIcon from "@/app/ui/icons/bubble/web-seo";
import BubbleInfo from "../elements/bubble-info";

export default function Services() {
  return (
    <section className="section-class-1320">
      <div className="max-w-[900px] mx-auto">
        <h2 className="title mb-5">
          <span className="custom-title">Servicios SEO</span> que Generan
          Resultados Tangibles
        </h2>
        <p className="text-center mb-16">
          Impulsa tu visibilidad en línea con nuestras estrategias
          personalizadas de SEO. Desde la optimización on-page hasta el SEO
          off-page, cada acción está diseño para atraer más clientes y alcanzar
          tus objetivos comerciales. ¡Transforma tu presencia digital hoy!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AuditoriaSEO />
        <SEOLocal />
        <DisenoWebSEO />
        <PosicionamientoSEO />
        <ConsultoriaSEO />
        <MantenimientoWeb />
        {/* <SEOInternacional />
        <MarketingContenido />
        <LinkBuilding />
        <MigracionesSEO />
        <Penalizaciones /> */}
      </div>
    </section>
  );
}

function AuditoriaSEO() {
  return (
    <BubbleInfo
      Icon={GrowthIcon}
      title="Auditoría SEO"
      description="Evaluamos tu sitio web para identificar fallos y áreas de mejora, implementando soluciones y aprovechando nuevas oportunidades para potenciar tu estrategia SEO."
    />
  );
}

function SEOLocal() {
  return (
    <BubbleInfo
      Icon={LocationIcon}
      title="SEO Local"
      description="Posicionamos tu negocio en las búsquedas geolocalizadas, asegurando que los clientes potenciales te encuentren justo cuando está buscando lo que ofreces."
    />
  );
}

function DisenoWebSEO() {
  return (
    <BubbleInfo
      Icon={WebSEOIcon}
      title="Diseño Web con SEO"
      description="Creamos sitios web modernos y optimizados para SEO desde su concepción. Diseño responsive, velocidad de carga optimizada y estructura SEO-friendly para maximizar tu visibilidad online."
    />
  );
}

function PosicionamientoSEO() {
  return (
    <BubbleInfo
      Icon={UpTrend}
      title="Posicionamiento SEO"
      description="Potenciamos el rendimiento de tu sitio web ya construido. Realizamos
            un análisis exhaustivo para identificar áreas de mejora y
            optimizamos tu contenido, estructura y enlaces."
    />
  );
}

function SEOInternacional() {
  return (
    <BubbleInfo
      Icon={EarthIcon}
      title="SEO Internacional"
      description="Adaptamos tu estrategia para diferentes mercados y audiencias, optimizando
    contenido y keywords para maximizar tu visibilidad en múltiples países."
    />
  );
}

function MarketingContenido() {
  return (
    <BubbleInfo
      Icon={ContentIcon}
      title="Marketing de Contenidos"
      description="Creamos contenido de calidad que informa y convierte. Desde blogs a
    infografías, nuestras estrategias mejoran tu posicionamiento en buscadores y
    fortalecen tu marca."
    />
  );
}

function LinkBuilding() {
  return (
    <BubbleInfo
      Icon={LinkIcon}
      title="Link Building"
      description="Implementamos tácticas efectivas para obtener enlaces de calidad que
    aumenten tu autoridad y visibilidad en Google, mejorando así tu
    posicionamiento."
    />
  );
}

function MigracionesSEO() {
  return (
    <BubbleInfo
      Icon={MigrationIcon}
      title="Migraciones SEO"
      description="Gestionamos la migración de tu sitio web para preservar tu posicionamiento y
    tráfico, optimizando redirecciones y contenido para una transición efectiva."
    />
  );
}

function Penalizaciones() {
  return (
    <BubbleInfo
      Icon={PenaltyIcon}
      title="Penalizaciones de Google"
      description="Realizamos un diagnóstico completo, identificamos las causas y aplicamos
    soluciones efectivas para restaurar tu posicionamiento."
    />
  );
}

function ConsultoriaSEO() {
  return (
    <BubbleInfo
      Icon={ConsultingIcon}
      title="Consultoría SEO"
      description="Asesoramiento experto para optimizar tu estrategia SEO. Análisis detallado, recomendaciones personalizadas y plan de acción para mejorar tu posicionamiento web."
    />
  );
}

function MantenimientoWeb() {
  return (
    <BubbleInfo
      Icon={MaintenanceIcon}
      title="Mantenimiento Web"
      description="Mantenemos tu sitio web actualizado, seguro y optimizado. Incluye actualizaciones de contenido, copias de seguridad, monitoreo de rendimiento y soporte técnico continuo."
    />
  );
}

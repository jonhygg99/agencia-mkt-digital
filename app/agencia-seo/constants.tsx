import { animatedSEOAgencyTexts } from "../constants/typing-animation";
import TypingAnimation from "../ui/elements/typing-animation";

export const HeroTitle = (
  <p>
    Somos una <span className="custom-title">Agencia SEO</span> que impulsa el
    Crecimiento Digital, optimizando tu presencia en línea y{" "}
    <TypingAnimation texts={animatedSEOAgencyTexts} className="custom-title" />
  </p>
);

export const StepsDescription =
  "Descubre cómo transformamos tu presencia en línea a través de un\
proceso estructurado y efectivo. Desde la consulta inicial hasta la\
implementación y optimización continua, cada paso está diseño para\
adaptarse a las necesidades de tu negocio y maximizar tu visibilidad\
en los motores de búsqueda. Con un enfoque integral que incluye\
estrategias de SEO on-page y off-page, trabajamos contigo para\
alcanzar tus objetivos y atraer más clientes. ¡Solicita tu consulta\
gratuita y descubre el potencial de tu negocio!";

export const BannerTitle = "COMPARTIENDO TU VISIÓN";

export const BannerText =
  "No dejes pasar la oportunidad de mejorar tu visibilidad en línea y\
atraer más clientes. Contáctanos para una consulta gratuita y descubre\
cómo nuestras estrategias de SEO personalizadas pueden llevar tu negocio\
al siguiente nivel. ¡El éxito digital te espera!";

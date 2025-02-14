import { animatedWebDesignTexts } from "../constants/typing-animation";
import TypingAnimation from "../ui/elements/typing-animation";

export const HeroTitle = (
  <p>
    Creamos un <span className="custom-title">Diseño Web</span> que conecta con
    tus clientes.
    <br />
    Una estrategia que{" "}
    <TypingAnimation texts={animatedWebDesignTexts} className="custom-title" />
  </p>
);

export const ReasonsTitle = (
  <p>
    Razones Clave por las que el{" "}
    <span className="custom-title">Diseño Web es Esencial</span> para Tu Marca
  </p>
);

export const TitlePricing = (
  <h2 className="title mb-10 max-w-[750px] mx-auto">
    Precios Competitivos para una página con{" "}
    <span className="custom-title">Diseño Web</span>
  </h2>
);

export const StepsDescription =
  "Transformamos tu visión en una presencia digital poderosa a través de un proceso\
meticuloso y estratégico. Nuestro enfoque único combina diseño web cautivador con\
optimización SEO avanzada, garantizando no solo una web visualmente impactante, sino\
también una herramienta efectiva para atraer y convertir clientes. Cada paso de nuestro\
proceso está diseño para maximizar tu visibilidad online y potenciar el crecimiento de tu negocio.";

export const BannerTitle = "ATRACCIÓN Y CONVERSIÓN";

export const BannerText =
  "Convierte tu sitio web en una herramienta poderosa que atraiga, convierta\
y retenga clientes. Contáctanos ahora y da el primer paso hacia una página optimizada\
para destacar en los motores de búsqueda. ¡Haz que tu éxito online empiece hoy mismo!";

import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { Metadata } from "next";
import { METADATA } from "./metadata";

export const metadata: Metadata = METADATA;

export default function SobreNosotros() {
  return (
    <div className="min-h-screen">
      <section className="section-class-1320">
        <div className="max-w-[900px] mx-auto">
          <h2 className="title mb-5">
            Sobre nuestra <span className="custom-title">Historia</span>
          </h2>
          <p className="text-center mb-16">
            En {NOMBRE_EMPRESA}, nuestra historia comienza con una simple pero
            poderosa idea: ofrecer soluciones personalizadas en el mundo del
            marketing digital y la programación. Fundé la agencia impulsado por
            mi pasión por aprender y mi deseo de crear un espacio donde las
            empresas pudieran recibir atención y soluciones a medida. Después de
            mis prácticas en una multinacional, me di cuenta de que no encajaba
            en un entorno donde la creatividad y la personalización eran
            limitadas. Así nació la motivación de crear una agencia que se
            distinga por su enfoque único y personalizado.
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <h2 className="title mb-5">
            Sobre nuestro <span className="custom-title">Fundador</span>
          </h2>
          <p className="text-center mb-16">
            Jonathan Gómez es un emprendedor con una sólida formación en
            programación y tecnologías de la información. Su experiencia abarca
            desde el desarrollo de software hasta el diseño de UI/UX, incluyendo
            el SEO y el marketing digital. Ha trabajado con plataformas como
            WordPress y Shopify durante más de dos años, donde descubrió su
            pasión por la personalización y la creación de soluciones que se
            adaptan a las necesidades de sus clientes. Su objetivo es conectar
            con cada cliente de manera única, asegurando que cada proyecto
            refleje su visión y objetivos.
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <h2 className="title mb-5">
            Sobre nuestra <span className="custom-title">Evolución</span>
          </h2>
          <p className="text-center mb-16">
            Desde su fundación, {NOMBRE_EMPRESA} ha enfrentado desafíos, pero
            cada uno de ellos ha sido una oportunidad para crecer y mejorar. He
            aprendido que el mercado está lleno de &quot;profesionales&quot; que
            no siempre cumplen con las expectativas, y eso me ha motivado a
            ofrecer un servicio que realmente marque la diferencia. Hoy, la
            agencia se posiciona como un referente en soluciones personalizadas,
            y aunque actualmente soy el único miembro del equipo, estoy
            comprometido a expandir y construir un equipo talentoso que comparta
            esta visión.
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <h2 className="title mb-5">
            Sobre nuestra <span className="custom-title">Misión y Visión</span>
          </h2>
          <p className="text-center mb-16">
            En {NOMBRE_EMPRESA}, nuestra misión es proporcionar soluciones de
            marketing digital y programación a medida que resuelvan los
            problemas específicos de nuestros clientes. Nos esforzamos por ser
            un socio confiable en su camino hacia el éxito. Nuestra visión a
            largo plazo es convertirnos en la agencia más grande del mundo, con
            la capacidad de gestionar proyectos internacionales y ofrecer
            soluciones innovadoras que superen las expectativas de nuestros
            clientes.
            <br />
            <br />
            Estamos emocionados por el futuro y por la oportunidad de trabajar
            contigo. Juntos, podemos transformar tus ideas en realidades.
          </p>
        </div>
      </section>
    </div>
  );
}

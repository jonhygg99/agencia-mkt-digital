"use client";

interface ButtonScrollProps {
  idElement: string;
  buttonText: string;
  styleButton?: string;
}

function ButtonScroll({
  idElement,
  buttonText,
  styleButton,
}: ButtonScrollProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 0; // Ajusta este valor según la altura de tu encabezado
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <button onClick={() => scrollToSection(idElement)} className={styleButton}>
      {buttonText}
    </button>
  );
}

export default ButtonScroll;

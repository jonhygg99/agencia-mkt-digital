"use client";

interface ButtonScrollProps {
  idElement: string;
  buttonText: string;
}

function ButtonScroll({ idElement, buttonText }: ButtonScrollProps) {
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
    <button
      onClick={() => scrollToSection(idElement)}
      className="w-full mx-auto bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity "
    >
      {buttonText}
    </button>
  );
}

export default ButtonScroll;

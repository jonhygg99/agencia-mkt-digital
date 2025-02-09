"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export default function TypingAnimation({
  texts,
  className,
}: TypingAnimationProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 125; // Velocidad de escritura
    const deletingSpeed = 75; // Velocidad de borrado
    const pauseTime = 2500; // Tiempo de pausa cuando se completa una palabra

    const type = () => {
      const currentFullText = texts[currentIndex];

      if (!isDeleting) {
        // Escribiendo
        if (currentText !== currentFullText) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        } else {
          // Palabra completada, esperar antes de borrar
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        // Borrando
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          return;
        }
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  return <span className={className}>{currentText}</span>;
}

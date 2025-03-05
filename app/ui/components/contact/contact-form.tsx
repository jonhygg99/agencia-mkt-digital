"use client";

import { useState, useEffect } from "react";
import personajesSEO from "@/app/utils/constants/placeholders-forms";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    privacyPolicy: false,
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const [placeholders, setPlaceholders] = useState({
    name: "Nombre",
    email: "Correo Electrónico",
    website: "Página web",
    message: "Mensaje",
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (personajesSEO && personajesSEO.length > 0) {
      const randomIndex = Math.floor(Math.random() * personajesSEO.length);
      const selectedCharacter = personajesSEO[randomIndex];

      setPlaceholders({
        name: selectedCharacter.nombre,
        email: selectedCharacter.email,
        website: selectedCharacter.paginaWeb,
        message: selectedCharacter.mensaje,
      });
      setIsLoaded(true);
    }
  }, [personajesSEO]);

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Evitar múltiples envíos
    if (status.submitting) return;

    // Reset status
    setStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      // Obtener la página actual para información adicional
      const currentPage =
        typeof window !== "undefined"
          ? window.location.pathname
          : "Formulario de contacto";

      // Enviar los datos del formulario a la API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.website || "",
          message: formData.message,
          currentPage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Restablecer el formulario después de un envío exitoso
        setFormData({
          name: "",
          email: "",
          website: "",
          message: "",
          privacyPolicy: false,
        });

        setStatus({
          submitting: false,
          success: true,
          error: false,
          message:
            data.message ||
            "Mensaje enviado correctamente. ¡Gracias por contactarnos!",
        });
      } else {
        throw new Error(data.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message:
          error instanceof Error
            ? error.message
            : "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bubble">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={placeholders.name}
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
              placeholder={placeholders.email}
            />
          </div>
        </div>
        <div>
          <label htmlFor="website" className="form-label">
            Página Web
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="form-input"
            placeholder={placeholders.website}
          />
        </div>
        <div>
          <label htmlFor="message" className="form-label">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="form-input"
            required
            placeholder={placeholders.message}
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="privacyPolicy"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            required
          />
          <label
            htmlFor="privacyPolicy"
            className="text-sm text-gray-with-dark"
          >
            Acepto las Políticas de Privacidad
          </label>
        </div>

        {/* Mensajes de estado (solo se muestran si el componente está montado) */}
        {status.success && (
          <div className="p-4 my-3 text-sm text-green-700 bg-green-100 rounded-lg">
            {status.message}
          </div>
        )}

        {status.error && (
          <div className="p-4 my-3 text-sm text-red-700 bg-red-100 rounded-lg">
            {status.message}
          </div>
        )}
        <button
          type="submit"
          className="btn-rounded-square"
          disabled={status.submitting}
        >
          {status.submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}

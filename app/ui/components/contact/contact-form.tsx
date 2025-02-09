"use client";

import { useState, useEffect } from "react";
import personajesSEO from "../../constants/placeholders-forms";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    privacyPolicy: false,
  });

  const [placeholders, setPlaceholders] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
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
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

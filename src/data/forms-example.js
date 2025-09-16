export const formsConfig = {
  contact: {
    id: "contact-form",
    name: "Formulario de Contacto",
    action: "/api/contact.json",
    method: "POST",
    className: "contact-form",
    submitButtonText: "Enviar mensaje",
    successMessage: "¡Formulario enviado con éxito! Gracias por contactarnos.",
    errorMessage: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
    sections: [
      {
        title: "Información Personal",
        description: "Por favor, proporciona tus datos de contacto",
        fields: [
          {
            id: "name",
            type: "text",
            label: "Nombre completo",
            placeholder: "Escribe tu nombre completo",
            required: true,
            validation: {
              minLength: 2,
              maxLength: 100,
              pattern: "^[a-zA-ZÀ-ÿ\\s]+$",
              errorMessage: "El nombre solo puede contener letras y espacios"
            }
          },
          {
            id: "email",
            type: "email",
            label: "Correo electrónico",
            placeholder: "tu@email.com",
            required: true
          },
          {
            id: "phone",
            type: "tel",
            label: "Teléfono",
            placeholder: "+34 123 456 789",
            required: false,
            validation: {
              pattern: "^[+]?[0-9\\s\\-()]+$",
              errorMessage: "Formato de teléfono inválido"
            }
          }
        ]
      },
      {
        title: "Información del Mensaje",
        description: "Cuéntanos cómo podemos ayudarte",
        fields: [
          {
            id: "subject",
            type: "select",
            label: "Asunto",
            required: true,
            options: [
              { value: "general", label: "Consulta general" },
              { value: "support", label: "Soporte técnico" },
              { value: "sales", label: "Información comercial" },
              { value: "other", label: "Otro" }
            ]
          },
          {
            id: "priority",
            type: "radio",
            label: "Prioridad",
            required: true,
            options: [
              { value: "low", label: "Baja" },
              { value: "medium", label: "Media" },
              { value: "high", label: "Alta" }
            ]
          },
          {
            id: "services",
            type: "checkbox",
            label: "Servicios de interés",
            required: false,
            options: [
              { value: "web-design", label: "Diseño web" },
              { value: "development", label: "Desarrollo" },
              { value: "seo", label: "SEO" },
              { value: "marketing", label: "Marketing digital" }
            ]
          },
          {
            id: "message",
            type: "textarea",
            label: "Mensaje",
            placeholder: "Escribe tu mensaje aquí...",
            required: true,
            className: "full-width",
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "El mensaje debe tener entre 10 y 1000 caracteres"
            }
          }
        ]
      }
    ]
  },

  newsletter: {
    id: "newsletter-form",
    name: "Suscripción Newsletter",
    action: "/api/newsletter.json",
    method: "POST",
    className: "newsletter-form",
    submitButtonText: "Suscribirme",
    successMessage: "¡Te has suscrito correctamente al newsletter!",
    errorMessage: "Error al procesar la suscripción. Inténtalo de nuevo.",
    sections: [
      {
        title: "Suscríbete a nuestro Newsletter",
        description: "Recibe las últimas noticias y actualizaciones",
        fields: [
          {
            id: "newsletter-email",
            type: "email",
            label: "Correo electrónico",
            placeholder: "tu@email.com",
            required: true
          },
          {
            id: "newsletter-name",
            type: "text",
            label: "Nombre",
            placeholder: "Tu nombre",
            required: false
          },
          {
            id: "frequency",
            type: "select",
            label: "Frecuencia de emails",
            required: true,
            options: [
              { value: "weekly", label: "Semanal" },
              { value: "monthly", label: "Mensual" },
              { value: "quarterly", label: "Trimestral" }
            ]
          },
          {
            id: "topics",
            type: "checkbox",
            label: "Temas de interés",
            required: false,
            options: [
              { value: "tech", label: "Tecnología" },
              { value: "design", label: "Diseño" },
              { value: "business", label: "Negocios" },
              { value: "tutorials", label: "Tutoriales" }
            ]
          }
        ]
      }
    ]
  }
};

// Textos para validaciones y mensajes (multiidioma básico)
export const formMessages = {
  es: {
    required: "Este campo es obligatorio",
    select: "Selecciona una opción",
    invalidEmail: "Introduce un email válido",
    invalidNumber: "Introduce un valor numérico válido",
    minValue: "El valor mínimo es",
    maxValue: "El valor máximo es",
    minLength: "Debe tener al menos",
    maxLength: "No debe exceder",
    characters: "caracteres"
  },
  en: {
    required: "This field is required",
    select: "Select an option",
    invalidEmail: "Enter a valid email",
    invalidNumber: "Enter a valid numeric value",
    minValue: "Minimum value is",
    maxValue: "Maximum value is",
    minLength: "Must be at least",
    maxLength: "Must not exceed",
    characters: "characters"
  }
};
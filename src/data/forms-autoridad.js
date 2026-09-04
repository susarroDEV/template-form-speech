export const formsConfig = {
  contact: {
    id: "contact-form",
    name: "Formulario de Contacto",
    action: "https://api.forms.susarro.dev/api/contact.json",
    method: "POST",
    className: "contact-form",
    submitButtonText: "Enviar mensaje",
    successMessage: "¡Formulario enviado con éxito! Gracias por contactarnos.",
    errorMessage: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
    sections: [
      {
        title: "Información Personal",
        description: "Por favor, completa tus datos personales.",
        fields: [
          {
            id: "name",
            type: "text",
            label: "Tu nombre",
            placeholder: "Mario",
            required: false,
            validation: {
              minLength: 2,
              maxLength: 100,
              pattern: "^[a-zA-ZÀ-ÿ\\s]+$",
              errorMessage: "El nombre solo puede contener letras y espacios"
            }
          },
        ]
      },
      {
        title: "Sobre el Primer Día",
        description: "Me gustaría saber qué opinas del primer día de clase.",
        fields: [
          {
            id: "reason",
            type: "textarea",
            label: "¿Por qué no respondiste el día de la presentación?",
            placeholder: "Por vergüenza",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          },
          {
            id: "change",
            type: "textarea",
            label: "Si se repetiese la situación, ¿actuarías diferente?",
            placeholder: "Yo creo que...",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          },
        ]
      },
      {
        title: "Libertad y Guía",
        description: "Me encantaría conocer tu opinión sobre la libertad y la guía en tu vida.",
        fields: [
          {
            id: "guide",
            type: "textarea",
            label: "¿Cual dices que es tu brújula a día de hoy?",
            placeholder: "Aprobar esta asignatura",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          },
          {
            id: "fear",
            type: "textarea",
            label: "¿Qué es lo que más temes respecto a tu libertad?",
            placeholder: "Temo el justificarme",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          },
        ]
      },
      {
        title: "De la propia charla",
        description: "Me gustaría saber qué opinas de la charla que acabas de escuchar.",
        fields: [
          {
            id: "think",
            type: "textarea",
            label: "¿Cual es la idea más importante que te llevas de la charla?",
            placeholder: "Ser libre es muchas veces una decisión",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          },
          {
            id: "improvement",
            type: "textarea",
            label: "¿Qué mejorarías de la charla?",
            placeholder: "Más ejemplos prácticos",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          }
        ]
      }
    ]
  },
}

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
  }
}
export const formsConfig = {
  contact: {
    id: "contact-form",
    name: "TFG - Perfilado de Oyentes mediante Clustering",
    action: "https://api.forms.susarro.dev/api/contact.json",
    method: "POST",
    className: "contact-form",
    submitButtonText: "Enviar respuestas",
    successMessage: "¡Respuesta registrada con éxito! Gracias por participar en el estudio.",
    errorMessage: "Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.",
    sections: [
      {
        title: "Variables Sociodemográficas",
        description: "Datos anónimos utilizados como variables de segmentación en el análisis.",
        fields: [
          {
            id: "sex",
            type: "radio",
            label: "Sexo",
            required: false,
            options: [
              { value: "female", label: "Mujer" },
              { value: "male", label: "Hombre" },
              { value: "other", label: "Otro" },
              { value: "no-answer", label: "Prefiero no decirlo" }
            ]
          },
          {
            id: "age",
            type: "number",
            label: "Edad",
            placeholder: "25",
            required: false,
            validation: {
              min: 12,
              max: 120,
              errorMessage: "Introduce una edad entre 12 y 120 años"
            }
          },
          {
            id: "employment",
            type: "select",
            label: "Estado laboral",
            required: false,
            options: [
              { value: "student", label: "Estudiante" },
              { value: "employed", label: "Trabajando por cuenta ajena" },
              { value: "freelance", label: "Autónomo / Freelance" },
              { value: "student-worker", label: "Estudio y trabajo" },
              { value: "unemployed", label: "En búsqueda de empleo" },
              { value: "retired", label: "Jubilado" },
              { value: "other", label: "Otro" }
            ]
          }
        ]
      },
      {
        title: "Preferencias de Género",
        description: "Estas respuestas conforman el vector de preferencias de cada oyente.",
        fields: [
          {
            id: "genres",
            type: "checkbox",
            label: "¿Qué géneros escuchas habitualmente?",
            required: false,
            options: [
              { value: "rock", label: "Rock" },
              { value: "pop", label: "Pop" },
              { value: "metal", label: "Metal" },
              { value: "indie", label: "Indie / Alternativo" },
              { value: "rap", label: "Rap / Hip-Hop" },
              { value: "electronic", label: "Electrónica" },
              { value: "reggaeton", label: "Reggaetón / Urbano" },
              { value: "jazz", label: "Jazz / Blues" },
              { value: "classical", label: "Clásica" },
              { value: "flamenco", label: "Flamenco" },
              { value: "folk", label: "Folk / Cantautor" },
              { value: "other", label: "Otro" }
            ]
          },
          {
            id: "favorite-genre",
            type: "select",
            label: "Si tuvieses que quedarte con un solo género, ¿cuál sería?",
            required: false,
            options: [
              { value: "rock", label: "Rock" },
              { value: "pop", label: "Pop" },
              { value: "metal", label: "Metal" },
              { value: "indie", label: "Indie / Alternativo" },
              { value: "rap", label: "Rap / Hip-Hop" },
              { value: "electronic", label: "Electrónica" },
              { value: "reggaeton", label: "Reggaetón / Urbano" },
              { value: "jazz", label: "Jazz / Blues" },
              { value: "classical", label: "Clásica" },
              { value: "flamenco", label: "Flamenco" },
              { value: "folk", label: "Folk / Cantautor" },
              { value: "other", label: "Otro" }
            ]
          },
          {
            id: "listening-frequency",
            type: "radio",
            label: "¿Cuánta música escuchas al día?",
            required: false,
            options: [
              { value: "less-1h", label: "Menos de 1 hora" },
              { value: "1-3h", label: "Entre 1 y 3 horas" },
              { value: "3-5h", label: "Entre 3 y 5 horas" },
              { value: "more-5h", label: "Más de 5 horas" }
            ]
          }
        ]
      },
      {
        title: "Artistas de Referencia",
        description: "Los nombres propios permiten enriquecer el modelo con datos de catálogo.",
        fields: [
          {
            id: "favorite-band",
            type: "text",
            label: "¿Cuál es tu banda favorita?",
            placeholder: "Extremoduro",
            required: false,
            validation: {
              minLength: 2,
              maxLength: 100,
              errorMessage: "El nombre debe tener entre 2 y 100 caracteres"
            }
          },
          {
            id: "favorite-artist",
            type: "text",
            label: "¿Y tu artista o solista favorito?",
            placeholder: "Rosalía",
            required: false,
            validation: {
              minLength: 2,
              maxLength: 100,
              errorMessage: "El nombre debe tener entre 2 y 100 caracteres"
            }
          },
          {
            id: "favorite-song",
            type: "text",
            label: "La canción que nunca te cansas de escuchar",
            placeholder: "So Payaso",
            required: false,
            validation: {
              minLength: 2,
              maxLength: 150,
              errorMessage: "El título debe tener entre 2 y 150 caracteres"
            }
          },
          {
            id: "discovery",
            type: "textarea",
            label: "¿Cómo descubriste a tu artista favorito?",
            placeholder: "Sonaba en el coche de mis padres y se me quedó...",
            required: false,
            validation: {
              minLength: 10,
              maxLength: 1000,
              errorMessage: "La respuesta debe tener entre 10 y 1000 caracteres"
            }
          }
        ]
      },
      {
        title: "Hábitos de Consumo",
        description: "Frecuencia, canales y contexto de escucha para completar el perfil.",
        fields: [
          {
            id: "platform",
            type: "select",
            label: "¿Dónde escuchas música principalmente?",
            required: false,
            options: [
              { value: "spotify", label: "Spotify" },
              { value: "youtube", label: "YouTube / YouTube Music" },
              { value: "apple", label: "Apple Music" },
              { value: "tidal", label: "Tidal" },
              { value: "radio", label: "Radio" },
              { value: "physical", label: "Vinilo / CD" },
              { value: "other", label: "Otro" }
            ]
          },
          {
            id: "concerts",
            type: "radio",
            label: "¿Cuántos conciertos sueles ver al año?",
            required: false,
            options: [
              { value: "0", label: "Ninguno" },
              { value: "1-2", label: "1 o 2" },
              { value: "3-5", label: "Entre 3 y 5" },
              { value: "more-5", label: "Más de 5" }
            ]
          },
          {
            id: "plays-instrument",
            type: "radio",
            label: "¿Tocas algún instrumento?",
            required: false,
            options: [
              { value: "yes", label: "Sí" },
              { value: "learning", label: "Estoy aprendiendo" },
              { value: "no", label: "No" }
            ]
          },
          {
            id: "meaning",
            type: "textarea",
            label: "¿Qué significa la música para ti?",
            placeholder: "Para mí la música es...",
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

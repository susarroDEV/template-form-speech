import { formsConfig, formMessages } from '/src/data/forms.js'

class FormManager {
  constructor(containerId, formConfigKey, lang = 'es') {
    this.container = document.getElementById(containerId)
    this.formConfig = formsConfig[formConfigKey]
    this.lang = lang
    this.messages = formMessages[lang] || formMessages.es
    
    if (!this.container) {
      throw new Error(`Container with id "${containerId}" not found`)
    }
    
    if (!this.formConfig) {
      throw new Error(`Form configuration "${formConfigKey}" not found`)
    }
    
    this.init()
  }

  init() {
    this.render()
    this.attachEventListeners()
  }

  render() {
    const form = this.createForm()
    this.container.appendChild(form)
  }

  createForm() {
    const form = document.createElement('form')
    form.id = this.formConfig.id
    form.className = `form-manager ${this.formConfig.className}`
    form.action = this.formConfig.action
    form.method = this.formConfig.method
    form.setAttribute('data-lang', this.lang)

    this.formConfig.sections.forEach(section => {
      const sectionElement = this.createSection(section)
      form.appendChild(sectionElement)
    })

    const actionsDiv = this.createActions()
    form.appendChild(actionsDiv)

    const responseDiv = this.createResponseArea()
    form.appendChild(responseDiv)

    return form
  }

  createSection(sectionConfig) {
    const section = document.createElement('section')
    section.className = 'form-section'

    const title = document.createElement('h1')
    title.className = 'section-title'
    title.textContent = sectionConfig.title
    section.appendChild(title)

    if (sectionConfig.description) {
      const description = document.createElement('p')
      description.className = 'section-description'
      description.textContent = sectionConfig.description
      section.appendChild(description)
    }

    const fieldsContainer = document.createElement('div')
    fieldsContainer.className = 'fields-container'

    sectionConfig.fields.forEach(field => {
      const fieldWrapper = this.createField(field)
      fieldsContainer.appendChild(fieldWrapper)
    })

    section.appendChild(fieldsContainer)
    return section
  }

  createField(fieldConfig) {
    const wrapper = document.createElement('div')
    wrapper.className = `field-wrapper ${fieldConfig.className || ''} ${fieldConfig.required ? 'required' : ''} ${fieldConfig.type === 'textarea' ? 'full-width' : ''}`

    const label = document.createElement('label')
    label.setAttribute('for', fieldConfig.id)
    label.className = 'field-label'
    label.textContent = fieldConfig.label
    wrapper.appendChild(label)

    let field
    switch (fieldConfig.type) {
      case 'textarea':
        field = this.createTextarea(fieldConfig)
        break
      case 'select':
        field = this.createSelect(fieldConfig)
        break
      case 'checkbox':
      case 'radio':
        field = this.createOptionsGroup(fieldConfig)
        wrapper.appendChild(field)
        break
      default:
        field = this.createInput(fieldConfig)
        break
    }

    if (fieldConfig.type !== 'checkbox' && fieldConfig.type !== 'radio') {
      wrapper.appendChild(field)
    }

    const errorMessage = document.createElement('div')
    errorMessage.className = 'error-message'
    errorMessage.id = `error-${fieldConfig.id}`
    wrapper.appendChild(errorMessage)

    return wrapper
  }

  createInput(fieldConfig) {
    const input = document.createElement('input')
    input.type = fieldConfig.type
    input.id = fieldConfig.id
    input.name = fieldConfig.id
    input.placeholder = fieldConfig.placeholder || ''
    input.required = fieldConfig.required || false
    input.className = 'form-input'
    
    if (fieldConfig.validation) {
      input.setAttribute('data-validation', JSON.stringify(fieldConfig.validation))
    }
    
    return input
  }

  createTextarea(fieldConfig) {
    const textarea = document.createElement('textarea')
    textarea.id = fieldConfig.id
    textarea.name = fieldConfig.id
    textarea.placeholder = fieldConfig.placeholder || ''
    textarea.required = fieldConfig.required || false
    textarea.className = 'form-textarea auto-resize'
    
    if (fieldConfig.validation) {
      textarea.setAttribute('data-validation', JSON.stringify(fieldConfig.validation))
    }
    
    return textarea
  }

  createSelect(fieldConfig) {
    const select = document.createElement('select')
    select.id = fieldConfig.id
    select.name = fieldConfig.id
    select.required = fieldConfig.required || false
    select.className = 'form-select'

    const defaultOption = document.createElement('option')
    defaultOption.value = ''
    defaultOption.disabled = true
    defaultOption.selected = true
    defaultOption.textContent = this.messages.select
    select.appendChild(defaultOption)

    fieldConfig.options?.forEach(option => {
      const optionElement = document.createElement('option')
      optionElement.value = option.value
      optionElement.textContent = option.label
      select.appendChild(optionElement)
    })

    return select
  }

  createOptionsGroup(fieldConfig) {
    const group = document.createElement('div')
    group.className = 'options-group'

    fieldConfig.options?.forEach(option => {
      const optionWrapper = document.createElement('div')
      optionWrapper.className = 'option-wrapper'

      const input = document.createElement('input')
      input.type = fieldConfig.type
      input.id = `${fieldConfig.id}-${option.value}`
      input.name = fieldConfig.id
      input.value = option.value
      input.required = fieldConfig.required || false

      const label = document.createElement('label')
      label.setAttribute('for', `${fieldConfig.id}-${option.value}`)
      label.className = 'option-label'
      label.textContent = option.label

      optionWrapper.appendChild(input)
      optionWrapper.appendChild(label)
      group.appendChild(optionWrapper)
    })

    return group
  }

  createActions() {
    const actions = document.createElement('div')
    actions.className = 'form-actions'

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.className = 'submit-button'
    submitButton.textContent = this.formConfig.submitButtonText

    actions.appendChild(submitButton)
    return actions
  }

  createResponseArea() {
    const response = document.createElement('div')
    response.className = 'form-response'

    const successMessage = document.createElement('div')
    successMessage.className = 'success-message'
    successMessage.textContent = this.formConfig.successMessage

    const errorMessage = document.createElement('div')
    errorMessage.className = 'error-message-global'
    errorMessage.textContent = this.formConfig.errorMessage

    response.appendChild(successMessage)
    response.appendChild(errorMessage)

    return response
  }

  attachEventListeners() {
    const form = this.container.querySelector('.form-manager')
    
    this.setupAutoResize()
    
    form.addEventListener('submit', (e) => this.handleSubmit(e))
    
    const inputs = form.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input))
      input.addEventListener('input', () => {
        const errorElement = document.getElementById(`error-${input.name || input.id}`)
        if (errorElement && errorElement.style.display === 'block') {
          this.validateField(input)
        }
      })
    })
  }

  setupAutoResize() {
    const autoResizeTextareas = this.container.querySelectorAll('.auto-resize')
    
    const autoResizeFunction = function() {
      this.style.height = 'auto'
      this.style.height = (this.scrollHeight + 2) + 'px'
    }
    
    autoResizeTextareas.forEach(textarea => {
      textarea.addEventListener('input', autoResizeFunction)
      textarea.addEventListener('paste', () => {
        setTimeout(() => autoResizeFunction.call(textarea), 0)
      })
      setTimeout(() => autoResizeFunction.call(textarea), 0)
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const form = e.target
    const isValid = this.validateForm(form)
    
    if (isValid) {
      try {
        const formData = new FormData(form)
        const data = this.processFormData(formData)
        data.formId = this.formConfig.id
        
        const response = await this.submitFormJSON(data)
        
        if (response.ok) {
          try {
            const result = await response.json()
            this.showSuccessMessage(form, result.message)
            form.reset()
            this.setupAutoResize()
          } catch (jsonError) {
            console.error('Error parsing success response:', jsonError)
            this.showSuccessMessage(form, 'Formulario enviado correctamente')
            form.reset()
          }
        } else {
          await this.handleErrorResponse(form, response)
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error)
        if (error instanceof TypeError && error.message.includes('fetch')) {
          this.showErrorMessage(form, 'Error de conexión. Verifique que el servidor esté funcionando.')
        } else {
          this.showErrorMessage(form, 'Error de conexión. Por favor, inténtalo de nuevo.')
        }
      }
    }
  }

  processFormData(formData) {
    const data = {}
    for (const [key, value] of formData.entries()) {
      if (data[key]) {
        if (Array.isArray(data[key])) {
          data[key].push(value)
        } else {
          data[key] = [data[key], value]
        }
      } else {
        data[key] = value
      }
    }
    return data
  }

  async submitFormJSON(data) {
    return await fetch(this.formConfig.action, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  async handleErrorResponse(form, response) {
    console.error('Response not OK:', response.status, response.statusText)
    
    const contentType = response.headers.get('content-type')
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const errorResult = await response.json()
        this.showErrorMessage(form, errorResult.error || `Error del servidor (${response.status})`)
      } catch (jsonError) {
        console.error('Error parsing error response:', jsonError)
        this.showErrorMessage(form, `Error del servidor (${response.status})`)
      }
    } else {
      const responseText = await response.text()
      console.error('Non-JSON response:', responseText.substring(0, 200))
      this.showErrorMessage(form, `Error del servidor (${response.status}): Respuesta inválida`)
    }
  }

  validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select')
    let isValid = true
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false
      }
    })
    
    return isValid
  }

  validateField(field) {
    const fieldId = field.name || field.id
    const errorElement = document.getElementById(`error-${fieldId}`)
    if (!errorElement) return true
    
    if (field.required && !field.value.trim()) {
      this.showFieldError(field, errorElement, this.messages.required)
      return false
    }

    const validationAttr = field.getAttribute('data-validation')
    if (validationAttr && field.value) {
      try {
        const validation = JSON.parse(validationAttr)
        
        if (validation.pattern) {
          const regex = new RegExp(validation.pattern)
          if (!regex.test(field.value)) {
            this.showFieldError(field, errorElement, validation.errorMessage || 'Formato inválido')
            return false
          }
        }
        
        if (validation.minLength && field.value.length < validation.minLength) {
          this.showFieldError(field, errorElement, `${this.messages.minLength} ${validation.minLength} ${this.messages.characters}`)
          return false
        }
        
        if (validation.maxLength && field.value.length > validation.maxLength) {
          this.showFieldError(field, errorElement, `${this.messages.maxLength} ${validation.maxLength} ${this.messages.characters}`)
          return false
        }
      } catch (e) {
        console.error('Error al procesar la validación:', e)
      }
    }
    
    if (field.type === 'email' && field.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(field.value)) {
        this.showFieldError(field, errorElement, this.messages.invalidEmail)
        return false
      }
    }
    
    if (field.type === 'number' && field.value) {
      if (isNaN(Number(field.value))) {
        this.showFieldError(field, errorElement, this.messages.invalidNumber)
        return false
      }
      
      const min = field.getAttribute('min')
      const max = field.getAttribute('max')
      
      if (min && Number(field.value) < Number(min)) {
        this.showFieldError(field, errorElement, `${this.messages.minValue} ${min}`)
        return false
      }
      
      if (max && Number(field.value) > Number(max)) {
        this.showFieldError(field, errorElement, `${this.messages.maxValue} ${max}`)
        return false
      }
    }
    
    this.hideFieldError(field, errorElement)
    return true
  }

  showFieldError(field, errorElement, message) {
    field.classList.add('invalid')
    errorElement.textContent = message
    errorElement.style.display = 'block'
    errorElement.classList.add('show')
  }

  hideFieldError(field, errorElement) {
    field.classList.remove('invalid')
    errorElement.textContent = ''
    errorElement.style.display = 'none'
    errorElement.classList.remove('show')
  }

  showSuccessMessage(form, customMessage) {
    const successMessage = form.querySelector('.success-message')
    const errorMessage = form.querySelector('.error-message-global')
    
    if (successMessage) {
      if (customMessage) {
        successMessage.textContent = customMessage
      }
      successMessage.classList.add('show')
      setTimeout(() => {
        successMessage.classList.remove('show')
      }, 5000)
    }
    
    if (errorMessage) {
      errorMessage.classList.remove('show')
    }
  }

  showErrorMessage(form, customMessage) {
    const successMessage = form.querySelector('.success-message')
    const errorMessage = form.querySelector('.error-message-global')
    
    if (errorMessage) {
      if (customMessage) {
        errorMessage.textContent = customMessage
      }
      errorMessage.classList.add('show')
      setTimeout(() => {
        errorMessage.classList.remove('show')
      }, 5000)
    }
    
    if (successMessage) {
      successMessage.classList.remove('show')
    }
  }
}

export default FormManager

window.FormManager = FormManager
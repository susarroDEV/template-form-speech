<a name="readme-top"></a>


# 📝 Dynamic Form Manager - Template Form Speech 📝


🎯 **Dynamic and configurable form management system for talks and presentations.** 🎤 A modern and flexible template that allows you to create feedback forms quickly and efficiently, with automatic validation and responsive design.

✨ This project is developed by **susarroDEV** with **vanilla JavaScript** to offer a lightweight, fast and easy-to-integrate solution for any website. ✨

<details>
<summary>📜 Table of contents</summary>

- [📝 Dynamic Form Manager - Template Form Speech 📝](#-dynamic-form-manager---template-form-speech-)
  - [🚀 Project Features](#-project-features)
  - [📖 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🎯 Basic Usage](#-basic-usage)
  - [⚙️ Configuration](#️-configuration)
    - [📋 Form Structure](#-form-structure)
    - [🔍 Available Field Types](#-available-field-types)
    - [✅ Validation System](#-validation-system)
  - [🎨 Customization](#-customization)
    - [CSS Styles](#css-styles)
  - [🤝 Contributing](#-contributing)
  - [🛠️ Stack](#️-stack)
  - [📬 Contact](#-contact)

</details>

## 🚀 Project Features

Some of the main features of the system include:

- 📱 **Fully responsive design**: Optimized for all devices and screen sizes.
- 🔧 **Flexible configuration**: JSON-based system to define forms dynamically.
- ✅ **Automatic validation**: Real-time validation with customizable error messages.
- 🎨 **Modern interface**: Clean design with CSS animations and interactive effects.
- 📤 **Asynchronous submission**: Form handling with fetch API and JSON responses.
- 🎯 **Varied field types**: Input, textarea, select, radio, checkbox and more.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📖 Getting Started

### 🔧 Installation

1. Clone the repository

   ```sh
   git clone https://github.com/susarrodev/template-form-speech.git
   ```

2. Navigate to the project directory

   ```sh
   cd template-form-speech
   ```

3. Serve the files from a local web server

   ```sh
   # Example with Live Server in VS Code
   # Or with Python
   python -m http.server 8000
   
   # Or with Node.js
   npx serve .
   ```

### 🎯 Basic Usage

1. **Include the FormManager in your HTML:**

   ```html
   <div id="main-form-container"></div>
   
   <script type="module">
     import FormManager from './src/form-manager/index.js'
     const mainForm = new FormManager('main-form-container', 'contact', 'en')
   </script>
   ```

2. **Configure your form in `src/data/forms.js`:**

   ```javascript
   export const formsConfig = {
     myForm: {
       id: "my-form",
       name: "My Custom Form",
       // ... form configuration
     }
   }
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⚙️ Configuration

### 📋 Form Structure

Each form is defined with the following structure:

```javascript
{
  id: "form-id",                    // Unique form ID
  name: "Form Name",                // Descriptive name
  action: "/api/endpoint",          // Submission URL
  method: "POST",                   // HTTP method
  className: "custom-class",        // Additional CSS class
  submitButtonText: "Submit",       // Button text
  successMessage: "Success!",       // Success message
  errorMessage: "Error...",         // Error message
  sections: [...]                   // Form sections
}
```

### 🔍 Available Field Types

- **text**: Simple text field
- **email**: Email field with validation
- **tel**: Phone field
- **textarea**: Text area with auto-resize
- **select**: Dropdown list
- **radio**: Radio buttons
- **checkbox**: Checkboxes
- **number**: Numeric fields

### ✅ Validation System

```javascript
validation: {
  minLength: 10,                    // Minimum length
  maxLength: 500,                   // Maximum length
  pattern: "^[a-zA-Z]+$",          // Regular expression
  errorMessage: "Custom message"    // Custom error message
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎨 Customization

### CSS Styles

Styles are organized in modular files:

- `styles/global.css` - Global styles
- `styles/header.css` - Header styles
- `styles/form-manager.css` - Form styles
- `styles/footer.css` - Footer styles


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**! 💖

Here's a quick guide:

1. Fork the Project ([_fork_](https://github.com/susarrodev/template-form-speech/fork))
2. Clone your [_fork_](https://github.com/susarrodev/template-form-speech/fork) (`git clone <fork URL>`)
3. Add the original repository as remote (`git remote add upstream <original repository URL>`)
4. Create your Feature Branch (`git switch -c feature/AmazingFeature`)
5. Commit your Changes (`git commit -m 'Add: some AmazingFeature'`)
6. Push to the Branch (`git push origin feature/AmazingFeature`)
7. Open a [_pull request_](https://github.com/susarrodev/template-form-speech/pulls)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠️ Stack

- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [![Roboto Slab](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📬 Contact

If you have questions or suggestions, feel free to contact [susarroDEV](https://susarrodev.com). 💌
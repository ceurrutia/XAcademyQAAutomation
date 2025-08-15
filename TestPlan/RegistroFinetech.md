# Plan de Pruebas: Módulo de Registro

1. Entorno de Prueba
URL de la Aplicación: https://ceurrutia.github.io/EducacionITfinetech/

### Herramienta de Automatización: Cypress

2. Casos de Prueba

* Caso de Prueba 1: 
### Registro Exitoso con Contraseña Válida

Objetivo: Validar que un nuevo usuario puede registrarse exitosamente y ser redirigido a la página de transacciones.

### Pasos:

* Navegar a la página de registro.
* Llenar el campo Nombre con un nombre de prueba.
* Llenar el campo Email con un correo electrónico válido y único.
* Llenar el campo Contraseña con una contraseña que cumpla los requisitos (ejemplo: Password123!).
* Hacer clic en el botón Registrar.

### Resultado Esperado:

El sistema redirige al usuario a la URL que contiene /transacciones.html.

(Opcional) El mensaje de éxito "Registro exitoso" es visible.

* Caso de Prueba 2: 

### Registro Fallido con Contraseña Débil

Objetivo: Validar que el sistema rechaza el registro cuando se utiliza una contraseña que no cumple los requisitos y que se muestra el mensaje de error adecuado.

### Pasos:

* Navegar a la página de registro.
* Llenar el campo Nombre con un nombre de prueba.
* Llenar el campo Email con un correo electrónico válido.
* Llenar el campo Contraseña con una contraseña que no cumpla los requisitos (ejemplo: ma).
* Hacer clic en el botón Registrar.

### Resultado Esperado:

* El sistema no redirige, permaneciendo en la página de registro.
* El mensaje de error "La contraseña debe tener al menos 8 caracteres y contener una mayúscula, un número y un carácter especial" es visible.
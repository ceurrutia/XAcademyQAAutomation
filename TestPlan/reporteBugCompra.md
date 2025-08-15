## Título: Bug encontrado en el btn 'add to cart' en Detail.html

Bug de SyntaxError por declaración duplicada de variable 'cart'.

### Pasos para Reproducir

1. Navega a la página principal del sitio: https://ceurrutia.github.io/TTJS2025/
2. Haz el clic en cualquier tarjeta de producto para ser redirigido a la página de detalles (detail.html).
3. Revisa el trace en la consola del navegador.

### Esperado:
La página de detalles debería cargarse correctamente sin errores de sintaxis en la consola, permitiendo que todas las funcionalidades del script se ejecuten.

### Obtenido:

La página detail.html no carga completamente y se detiene justo en la ejecución del script. La consola del navegador muestra el siguiente error: SyntaxError: Identifier 'cart' has already been declared

Detalle del bug: línea duplicada en <script src="js/scripts.js"></script> en la sección scripts.

## Solución implementada por la dev Cecilia Urrutia

Se elimina el duplicado de la linea script.

Commit: https://github.com/ceurrutia/TTJS2025/commit/813896f41ce643fb2cc1460ffc1b47598d69e3c2

### Estado: Resuelto
# Como aceptar pagos con Recurrente

Este ejemplo muestra una implementación del Checkout de Recurrente.

Recurrente te da una página de checkout fácil de integrar y optimizada para maximizar conversiones.

## Demo

https://recurrente-ejemplo.netlify.app

El demo está corriendo en modo "test". Para realizar un pago exitoso, usa el número de tarjeta `4242424242424242`, cualquier CVC y cualquier fecha futura como fecha de vencimiento.

## Pasos para hacer tu propia implementación

1. Añadé el Recurrente Javascript SDK al `<head>` de tu aplicación.
  ```html
   <script src="js.recurrente.com></script>
   ```
2. Crea funciones en el servidor para `crear un checkout`.

3. Añade las environment variables `RECURRENTE_PUBLIC_KEY` y `RECURRENTE_SECRET_KEY`.

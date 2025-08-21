# Documento de Decisiones de Arquitectura

Este documento detalla las decisiones técnicas tomadas durante el desarrollo de la prueba técnica para el Gestor de Productos.

## 1. Stack Tecnológico y Justificación

- **Framework:** Angular 19 (generado vía Angular CLI). Aunque la prueba solicita "16+", se optó por utilizar una versión reciente para demostrar dominio de las últimas características estables del framework.
- **Arquitectura:** Se utiliza el modelo clásico basado en `NgModule` en esta rama principal para demostrar la capacidad de trabajar en proyectos empresariales existentes.
- **Manejo de HTTP:** Se configuró `HttpClient` mediante la función `provideHttpClient()` en lugar del obsoleto `HttpClientModule`, siguiendo las mejores prácticas actuales de Angular para mejorar el tree-shaking y la compatibilidad futura.

## 2. Calidad y Mantenibilidad del Código

- **Alias de Ruta (Path Aliases):** Se ha configurado el `tsconfig.json` con alias de ruta (`@core`, `@features`) para evitar importaciones relativas frágiles (`../../`). Esto mejora la legibilidad y robustez del código, facilitando futuras refactorizaciones.

## 3. Estructura del Proyecto

- `/core`: Contiene la lógica transversal y los fundamentos de la aplicación (servicios, modelos).
- `/features`: Contiene los componentes que representan una funcionalidad completa, como el `product-dashboard`.

## 4. Flujo de Datos y UI

- **Programación Reactiva (RxJS):** El `ProductService` retorna `Observables` para manejar los flujos de datos de forma asíncrona.
- **Pipe `async`:** Se utiliza el pipe `async` en las plantillas para la suscripción, delegando la gestión de la memoria (desuscripción automática) a Angular y manteniendo los componentes más limpios.
- **UI y Componentes:** Se seleccionó **Bootstrap 5** y **NgBootstrap 18** para la presentación, asegurando la compatibilidad con Angular 19 y siguiendo las pistas del documento de la prueba.

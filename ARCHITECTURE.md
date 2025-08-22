# Documento de Decisiones de Arquitectura

Este documento detalla las decisiones técnicas y el razonamiento arquitectónico detrás del desarrollo de la prueba técnica para el Gestor de Productos.

## 1. Stack Tecnológico y Arquitectura Base

- **Framework y Versión:** Se utilizó **Angular 19**. Aunque la prueba solicitaba "16+", se optó por una versión reciente para demostrar dominio de las últimas características estables y las mejores prácticas del framework.

- **Arquitectura de Módulos (`NgModule`):** Se implementó el modelo clásico basado en `NgModule`. Esta decisión fue deliberada para demostrar la capacidad de trabajar y mantener proyectos empresariales existentes, que en su gran mayoría utilizan esta arquitectura robusta y consolidada.

- **Componentes de UI y Estilos:** La interfaz se construyó con **Bootstrap 5**, **NgBootstrap 18** y **SCSS**. Esta combinación permite un desarrollo rápido y una base sólida, al tiempo que SCSS ofrece capacidades avanzadas para crear un sistema de diseño personalizado y mantenible, como se demuestra en el refinamiento de la UI.

## 2. Gestión de Datos y Estado

- **Programación Reactiva con RxJS:** El núcleo de la gestión de datos es reactivo. El `ProductService` expone métodos que retornan `Observables`, permitiendo a los componentes reaccionar a los cambios de datos de forma asíncrona y eficiente.

- **Pipe `async`:** Para consumir los `Observables` en las plantillas, se utilizó el pipe `async`. Esta es una decisión clave de arquitectura para delegar la gestión del ciclo de vida de las suscripciones (suscripción y desuscripción automática) a Angular, previniendo así potenciales fugas de memoria y simplificando el código del componente.

- **Formularios Reactivos:** Para la creación de productos, se optó por los **Formularios Reactivos** de Angular. Esta estrategia es superior para casos de uso complejos por su modelo de datos inmutable, su facilidad para las pruebas unitarias y su potente API de validación, que se utilizó para proporcionar feedback inmediato al usuario.

## 3. Calidad de Código y Mantenibilidad

- **Estructura de Carpetas:** El proyecto sigue una estructura escalable, separando el código en `core` (servicios, modelos), `features` (componentes de funcionalidades) y `shared` (elementos reutilizables), facilitando la navegación y el mantenimiento.

- **Alias de Ruta (`Path Aliases`):** Se configuró `tsconfig.json` con alias como `@core` y `@shared`. Esto elimina las frágiles importaciones relativas (`../../`), resultando en un código más limpio, legible y resiliente a futuras refactorizaciones.

## 4. Desafíos Técnicos y Solución de Simulación de API

Uno de los requisitos clave era simular una API REST. Este proceso reveló un desafío técnico interesante y condujo a una solución final robusta.

- **Decisión Final: Servicio Fake Puro con RxJS:**
  - **El Desafío:** Se exploraron librerías externas como `angular-in-memory-web-api`, pero presentaron conflictos de dependencias (`peer dependency`) con la versión de Angular 19 del proyecto. Forzar una dependencia potencialmente inestable se consideró un riesgo inaceptable para la estabilidad del proyecto.
  - **La Solución:** Se tomó la decisión de refactorizar el `ProductService` para que funcionara como un **mock autocontenido**. Este servicio utiliza un array de datos local y **operadores de RxJS (`of`, `delay`, `throwError`)** para simular perfectamente el comportamiento asíncrono y la latencia de una API real.
  - **Ventajas:** Esta solución final eliminó todas las dependencias externas conflictivas, resultó en un proyecto más estable y fácilmente desplegable, y demostró un dominio de RxJS para crear mocks de servicio desde cero, una habilidad crucial para el desarrollo y las pruebas.

---

# Documento de Decisiones de Arquitectura

Este documento detalla las decisiones técnicas tomadas durante el desarrollo de la prueba técnica para el Gestor de Productos.

## 1. Stack Tecnológico y Justificación

- **Framework:** Angular 16 (con NgModules). Se utilizó la arquitectura tradicional basada en `NgModule` para demostrar dominio sobre el modelo clásico de Angular, ampliamente utilizado en proyectos empresariales.

- **API Mock:** Se planifica el uso de `json-server` para simular una API REST de forma rápida y eficiente, permitiendo centrar el desarrollo en la lógica del frontend.

- **Manejo de HTTP:** A pesar de utilizar una arquitectura basada en `NgModule`, se optó por configurar `HttpClient` mediante la función `provideHttpClient()` en lugar del obsoleto `HttpClientModule`. Esta decisión se alinea con las mejores prácticas actuales de Angular, asegurando una mayor eficiencia (tree-shaking) y una transición más sencilla a arquitecturas Standalone en el futuro.

## 2. Estructura del Proyecto

El proyecto se organiza siguiendo una estructura orientada a funcionalidades para promover la escalabilidad y mantenibilidad:

- `/core`: Contiene la lógica transversal y los fundamentos de la aplicación, como servicios (`/services`) y modelos de datos (`/models`).

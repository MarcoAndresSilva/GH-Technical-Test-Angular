# Documento de Decisiones de Arquitectura (Rama: feat/modern-approach)

Este documento detalla las decisiones técnicas tomadas en la versión moderna y refactorizada del proyecto.

## 1. Stack Tecnológico y Arquitectura

- **Arquitectura Standalone:** Se migró la aplicación a **Standalone Components**. Esta es la arquitectura recomendada para nuevos proyectos en Angular, ya que elimina la complejidad de los `NgModule`, mejora el _tree-shaking_ y promueve una estructura de componentes más explícita y autocontenida.
- **Manejo de HTTP:** Se utiliza `HttpClient` a través de `provideHttpClient()`, configurado en el `bootstrapApplication` del `main.ts`. La aplicación se integra con la API pública **DummyJSON** para simular un entorno de producción realista.
- **Flujo de Datos y UI:** Se conservan los mismos patrones exitosos de la rama principal: **Programación Reactiva con RxJS**, uso del **pipe `async`**, y la suite de **Bootstrap/NgBootstrap** para la UI, demostrando que son totalmente compatibles con la nueva arquitectura.

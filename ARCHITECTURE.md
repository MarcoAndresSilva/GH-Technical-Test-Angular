# Documento de Decisiones de Arquitectura (Rama: feat/modern-approach)

Este documento detalla las decisiones técnicas tomadas en la versión moderna y refactorizada del proyecto.

## 1. Stack Tecnológico y Arquitectura

- **Arquitectura Standalone:** Se migró la aplicación a **Standalone Components**. Esta es la arquitectura recomendada para nuevos proyectos en Angular, ya que elimina la complejidad de los `NgModule`, mejora el _tree-shaking_ y promueve una estructura de componentes más explícita y autocontenida.

- **Manejo de HTTP:** Se utiliza `HttpClient` a través de `provideHttpClient()`, configurado en el `bootstrapApplication` del `main.ts`. La aplicación se integra con la API pública **DummyJSON** para simular un entorno de producción realista.

- **Flujo de Datos y UI:** Se conservan los mismos patrones exitosos de la rama principal: **Programación Reactiva con RxJS**, y la suite de **Bootstrap/NgBootstrap** para la UI, demostrando que son totalmente compatibles con la nueva arquitectura.

## 2. Gestión de Estado Local y Experiencia de Usuario

- **Desafío de la API de Simulación:** La integración con la API pública `DummyJSON` fue exitosa para obtener datos (`GET`). Sin embargo, sus endpoints de escritura (`POST`, `DELETE`) solo simulan una respuesta exitosa sin modificar la base de datos real. Esto provocaba que la interfaz de usuario no reflejara los cambios del usuario tras una recarga de datos.

- **Estrategia de Actualización Optimista con `BehaviorSubject`:** Para solucionar este desafío y proporcionar una experiencia de usuario instantánea, se implementó un patrón de gestión de estado local en el `ProductDashboardComponent` utilizando un **`BehaviorSubject` de RxJS**.
  - Al cargar, los datos iniciales de la API se guardan en el `BehaviorSubject`. El `*ngFor` en la plantilla se suscribe a este `Subject` a través del pipe `async`.
  - Al **eliminar** un producto, la UI se actualiza **inmediatamente** filtrando la lista local de productos (actualización optimista) _antes_ de enviar la petición a la API. Se incluye lógica para revertir el cambio si la API fallara.
  - Al **agregar** un producto, se espera la respuesta simulada de la API para obtener el objeto completo (con su `id` asignado) y luego se añade a la lista local.
  - Este enfoque desacopla el estado de la UI de la latencia de la red y maneja elegantemente las limitaciones de una API de solo lectura, resultando en una aplicación que se siente rápida, reactiva y profesional.

---

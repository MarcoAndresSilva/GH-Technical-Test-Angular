# Prueba Técnica - Gestor de Productos (Versión Moderna)

Esta rama (`feat/modern-approach`) contiene una versión refactorizada de la aplicación original, demostrando un enfoque en las arquitecturas y herramientas más recientes del ecosistema Angular.

## 🚀 Demo en Vivo

_(Próximamente, una vez desplegada esta versión)_

---

## ✨ Mejoras Clave en esta Versión

- **Arquitectura Standalone**: Toda la aplicación ha sido migrada para usar **Standalone Components**, eliminando la necesidad de `NgModule` y simplificando la estructura general.
- **Integración con API Real**: Se ha reemplazado el mock interno por una integración con una **API REST pública (DummyJSON)**, simulando un entorno de producción real.
- _Otras características (Listado, Creación, Eliminación, etc.) se mantienen igual que en la versión base._

---

## 🚀 Stack Tecnológico (Versión Moderna)

- **Framework**: Angular 19
- **Arquitectura**: **Standalone Components**
- **API**: **`HttpClient` conectado a API REST pública (DummyJSON)**
- **Programación Asíncrona**: RxJS (Observables & Pipe `async`)
- **Estilos**: SCSS, Bootstrap 5, Bootstrap Icons
- **UI Components**: NgBootstrap 18

---

## 🔧 Ejecución en Local (Versión Moderna)

1.  **Asegúrate de estar en esta rama:**
    ```bash
    git checkout feat/modern-approach
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Iniciar la aplicación:**
    _Esta versión se conecta a una API pública, por lo que no se requiere ningún servidor local._
    ```bash
    ng serve -o
    ```

---

_Realizado por Marco Andrés Silva_

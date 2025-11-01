# Prueba Técnica - Gestor de Productos (Grupo Hunting)

Aplicación de gestión de productos desarrollada con **Angular 19**, enfocada un enfoque profesional en arquitectura de software, calidad de código y experiencia de usuario. La solución cumple todos los requisitos de la prueba técnica.

---

## 🚀 Demo en Vivo

**La forma más rápida de ver el proyecto en acción. No requiere instalación.**

### **[➡️ Ver la aplicación desplegada en Netlify](https://gh-technical-test-angular.netlify.app/)**

---

## 📸 Vistas Previas

| Vista Móvil | Vista  de Escritorio |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/a583123e-291f-4573-bfca-a513dc817e25" alt="Vista Previa Desktop" width="350" /> | <img src="https://github.com/user-attachments/assets/c4ff488f-e95a-457a-9931-1d6e083a4e7b" alt="Vista Previa Mobil" width="700" /> |


---

## ✨ Características Implementadas

-   **CRUD Completo**: Funcionalidad para Listar, Crear y Eliminar productos.
-   **Formularios Reactivos**: Creación de productos a través de un modal con validaciones del lado del cliente.
-   **UX Mejorada**: Diálogo de confirmación para acciones destructivas y notificaciones "toast" para feedback al usuario.
-   **Diseño Responsivo**: Interfaz moderna y totalmente adaptable a cualquier tamaño de pantalla (`mobile-first`).
-   **Arquitectura Robusta**: Código limpio, modular y escalable documentado en `ARCHITECTURE.md`.

---

## 🚀 Stack Tecnológico

-   **Framework**: Angular 19
-   **Arquitectura**: NgModules
-   **API Mocking**: **Servicio Fake Puro en Angular con RxJS** (para total control y cero dependencias).
-   **Programación Asíncrona**: RxJS (Operadores `of`, `delay`, y Pipe `async`)
-   **Estilos**: SCSS, Bootstrap 5, Bootstrap Icons
-   **UI Components**: NgBootstrap 18

---

## 🔧 Ejecución en Local

Si prefiere clonar y ejecutar el proyecto localmente, siga estos pasos.

**Requisitos:**
-   Node.js (v18+)
-   Angular CLI (v19+)

**Pasos:**

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/MarcoAndresSilva/GH-Technical-Test-Angular.git
    cd GH-Technical-Test-Angular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar la aplicación:**
    *Este proyecto utiliza un servicio interno para simular la API, por lo que no se requiere ningún servidor externo.*
    ```bash
    ng serve -o
    ```
    *   La aplicación se abrirá en `http://localhost:4200` y funcionará de forma autónoma.

---

## 🏛️ Decisiones de Arquitectura

Para un detalle exhaustivo de las decisiones técnicas, desafíos y justificaciones (incluida la elección de la estrategia de Mocking de API), por favor, consulte el archivo [**ARCHITECTURE.md**](ARCHITECTURE.md).

---

## 🌟 Versión Moderna (Standalone Components)

Adicionalmente, se ha desarrollado una versión alternativa en la rama `feat/modern-approach`. Esta versión ha sido refactorizada para utilizar **Standalone Components**, la arquitectura moderna de Angular, y se integra con una API pública real.

## 🚀 Demo en Vivo Version Moderna Consumiendo APi real

### **[➡️ Ver la aplicación desplegada en Netlify](https://deploy-preview-5--gh-technical-test-angular.netlify.app/)**

Para probarla, ejecute:
```bash
git checkout feat/modern-approach
# Las instrucciones específicas se encuentran en el README de esa rama.
```
---
*Realizado por Marco Andrés Silva*

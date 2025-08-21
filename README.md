# Prueba Técnica - Gestor de Productos (Grupo Hunting)

Aplicación de gestión de productos desarrollada con **Angular 19** que demuestra un enfoque profesional en arquitectura de software, calidad de código y experiencia de usuario. La solución cumple y excede todos los requisitos de la prueba técnica.

<img width="392" height="512" alt="image" src="https://github.com/user-attachments/assets/a583123e-291f-4573-bfca-a513dc817e25" />

## ✨ Características Implementadas

-   **Listado de productos**: Visualización de productos en una tabla responsiva y moderna.
-   **Creación de productos**: Formulario modal con validaciones reactivas para agregar nuevos productos.
-   **Eliminación de productos**: Funcionalidad para eliminar productos con un diálogo de confirmación.
-   **Feedback al Usuario**: Notificaciones "toast" para acciones exitosas o fallidas.
-   **Diseño Responsivo**: La interfaz se adapta fluidamente a cualquier tamaño de pantalla (`mobile-first`).
-   **Arquitectura Robusta**: Código limpio, modular y escalable.

## 🚀 Stack Tecnológico

-   **Framework**: Angular 19
-   **Arquitectura**: NgModules
-   **Estilos**: SCSS, Bootstrap 5, Bootstrap Icons
-   **UI Components**: NgBootstrap 18
-   **API Mocking**: `json-server`
-   **Programación Asíncrona**: RxJS (Observables & Pipe `async`)

## 🔧 Instalación y Puesta en Marcha

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

3.  **Iniciar la API simulada:**
    *   Abre una **nueva terminal** en la misma carpeta y ejecuta:
    ```bash
    json-server --watch db.json --port 3001
    ```
    *   El servidor de la API estará disponible en `http://localhost:3001`.

4.  **Iniciar la aplicación Angular:**
    *   En la **primera terminal**, ejecuta:
    ```bash
    ng serve -o
    ```
    *   La aplicación se abrirá automáticamente en `http://localhost:4200`.

## 🏛️ Decisiones de Arquitectura

Para un detalle exhaustivo de las decisiones técnicas, desafíos encontrados y justificaciones, por favor, consulte el archivo [**ARCHITECTURE.md**](ARCHITECTURE.md).

## 🌟 Versión Moderna (Standalone Components)

Adicionalmente, se ha desarrollado una versión alternativa de esta aplicación en la rama `feat/modern-approach`. Esta versión ha sido refactorizada para utilizar **Standalone Components**, la arquitectura moderna de Angular, y se integra con una API pública real.

Para probarla, ejecute:
```bash
git checkout feat/modern-approach
# Siga las instrucciones del README en esa rama.
```
---
*Realizado por Marco Andrés Silva*

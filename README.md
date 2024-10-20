# Proyecto realizo con React + Vite

Este proyecto es una aplicación de gestión de publicaciones (posts), utilizando la 
API de `https://jsonplaceholder.typicode.com/posts` para obtener, crear, actualizar y eliminar publicaciones.

La aplicación permite buscar posts, paginación, edición, creación y eliminación de registros, además de implementar un modal para manejar las operaciones de posts.

> [!NOTE]  
> ## Características
> - **Listado de posts** con paginación.
> - **Buscar posts** por título o contenido.
> - **Crear, editar y eliminar** publicaciones.
> - **Modal dinámico** para crear y actualizar posts.
> - **Ordenamiento** de posts por título (ascendente y descendente).


> [!TIP]
> ## Estructura del Proyecto
> ```bash
> src/
> ├── components/
> │   ├── PostTable.tsx    # Componente principal que maneja la lógica del CRUD
> │   ├── ShowPosts.tsx    # Componente para mostrar la lista de posts
> │   
> ├── interfaces/
> │   └── Post.ts          # Interfaz de los datos del post
> │   
> ├── App.tsx              # Componente principal que renderiza el proyecto
> ├── main.tsx             # Punto de entrada de la aplicación
> └── index.html           # Archivo HTML principal
> ```
______________________________


## Requisitos Previos
Antes de ejecutar el proyecto, necesitas tener instalado:
Node.js (Node)


> [!IMPORTANT]
> ## Instalación
> 1. Clona el repositorio:
> ```bash
> git clone https://github.com/juanjosbg/PruebaFrontEnd.git
> ```
> 
> 2. Navega hasta el directorio del proyecto:
> ```bash
> cd PruebaFrontEnd
> ```
> 
> 3. Instala las dependencias:
> ```bash
> npm install || yarn install
> ```
> 
> 4. Ejecución del Proyecto:
> ```bash
> npm run dev
> ```


> [!TIP]
> ## Conexión con la API
> El proyecto está conectado a la API de jsonplaceholder.typicode.com, una API gratuita que proporciona datos simulados para realizar pruebas. La aplicación utiliza las siguientes rutas:

> GET /posts: Para obtener la lista de publicaciones.
> POST /posts: Para crear una nueva publicación.
> PUT /posts/{id}: Para actualizar una publicación existente.
> DELETE /posts/{id}: Para eliminar una publicación.
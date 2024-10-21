# Proyecto realizo con React + Vite

Este proyecto es una aplicación de gestión de publicaciones (posts), utilizando la 
API de `https://jsonplaceholder.typicode.com/posts` para obtener, crear, actualizar y eliminar publicaciones.

La aplicación permite buscar posts, paginación, edición, creación y eliminación de registros, además de implementar un modal para manejar las operaciones de posts.

______________________________

> [!NOTE] 
> ## Tecnologías Utilizadas
> - **React**: Biblioteca para construir interfaces de usuario.
> - **Tailwind CSS**: Framework CSS para un diseño rápido y responsivo.
> - **TypeScript**: Lenguaje de programación para la lógica del frontend.
______________________________

> [!NOTE]  
> ## Características
> - **Listado de posts** con paginación.
> - **Buscar posts** por título o contenido.
> - **Crear, editar y eliminar** publicaciones.
> - **Modal dinámico** para crear y actualizar posts.
> - **Ordenamiento** de posts por título (ascendente y descendente).
______________________________

> [!TIP]
> ## Conexión con la API
> El proyecto está conectado a la API de **jsonplaceholder.typicode.com**, 
> una API gratuita que proporciona datos simulados para realizar pruebas. La aplicación utiliza las siguientes rutas:
> - **GET /posts:** Para obtener la lista de publicaciones.
> - **POST /posts:** Para crear una nueva publicación.
> - **PUT /posts/{id}:** Para actualizar una publicación existente.
> - **DELETE /posts/{id}:** Para eliminar una publicación.
______________________________

> [!NOTE] 
> ## Cómo Usar la Aplicación
> Haz clic en el botón "Crear Post" para abrir el formulario y añadir una nueva publicación.
> Completa los campos obligatorios (Título y Contenido) y haz clic en "Subir Post".
> Las publicaciones se mostrarán en una tabla, donde podrás ver su ID, Título, Contenido y acciones disponibles.
> Para editar una publicación, haz clic en el botón "Editar" junto a la publicación que deseas modificar.
> Para eliminar una publicación, haz clic en el botón "Eliminar".
______________________________

> [!NOTE]  
> ## Notificaciones
> Después de cada acción **(crear, editar, eliminar)**, aparecerá un modal en el centro de la pantalla para confirmar la acción realizada, mostrando > mensajes como "Post creado con éxito" o "Post modificado con éxito".
______________________________



> [!TIP]
> ## Estructura del Proyecto
> ```bash
>src/
> ├── /components
> |   ├── PostTable.tsx          # Componente principal que maneja la tabla de publicaciones.
> |   ├── PostForm.tsx           # Componente del formulario para crear y editar publicaciones.
> |   ├── NotificationModal.tsx  # Componente para mostrar notificaciones de acciones.
> |   ├── SearchBar.tsx          # Componente para la barra de búsqueda de publicaciones.
> |   ├── Pagination.tsx         # Componente para la paginación de publicaciones.
> │
> ├── interfaces/
> │   └── Post.ts                # Interfaz de los datos del post
> │
> ├── services/
> |   └──  apiService.js         # Servicio para manejar la API (en caso de que se necesite).
> │
> ├── App.tsx                    # Componente principal que renderiza el proyecto
> └── main.tsx                   # Punto de entrada de la aplicación
> ```

______________________________



> [!IMPORTANT]
> ## Instalación
> 1. Clona el repositorio:
> ```bash
> git clone https://github.com/juanjosbg/PruebaFrontEnd.git
> ```
> 
> 2. Navega hasta el directorio del proyecto: (ruta del proyecto)
> ```bash
> cd PruebaFrontEnd
> ```
> 
> 3. Instala las dependencias:
> ```bash
> npm install || yarn install
> ```
> 
> 4. Ejecución del Proyecto: (Uso)
> ```bash
> npm run dev
> ```

______________________________



> [!IMPORTANT]    
> Si te sale este error a la hora de darle npm run dev a tu proyecto
> prube_fronend@0.0.0 dev
> vite
>"vite" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable.
> este se soluciona con Instalar Vite como dependencia de desarrollo
> ```bash
> npm install vite --save-dev
> ```

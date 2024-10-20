import React, { useState, useEffect } from "react";
import { Post } from "../interfaces/Post";

const POSTS_PER_PAGE = 5;

const PostTable: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editPost, setEditPost] = useState<Post | null>(null);
  const [formTitle, setFormTitle] = useState<string>("");
  const [formBody, setFormBody] = useState<string>("");
  const [showForm, setShowForm] = useState(false); // Nuevo estado para mostrar el formulario

  useEffect(() => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${POSTS_PER_PAGE}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los posts");
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, [currentPage]);

  const handleDelete = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al eliminar el post");
        }
        setModalMessage("Post eliminado correctamente.");
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(error => {
        setModalMessage(null);
        setErrorMessage(error.message);
      });
  };

  const closeModal = () => {
    setModalMessage(null);
    setEditPost(null); // Resetear el estado de edición
    setFormTitle("");  // Limpiar el título
    setFormBody("");   // Limpiar el contenido
    setShowForm(false); // Ocultar el formulario al cerrar
  };

  // Filtrar posts por título y contenido
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      title: formTitle,
      body: formBody,
    };

    if (editPost) {
      // Actualizar post existente
      fetch(`https://jsonplaceholder.typicode.com/posts/${editPost.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then(response => response.json())
        .then(updatedPost => {
          setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
          setModalMessage("Post actualizado correctamente.");
          closeModal();
        });
    } else {
      // Crear un nuevo post
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then(response => response.json())
        .then(newPost => {
          setPosts([...posts, newPost]);
          setModalMessage("Post creado correctamente.");
          closeModal();
        });
    }
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4 uppercase">Lista de Posts</h1>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por título o contenido..."
        className="border border-gray-300 rounded-full shadow-sm w-72 p-2 px-4 mb-4 mr-2"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />  

      <button
        onClick={() => {
          setEditPost(null); // Resetear el post a editar
          setFormTitle("");
          setFormBody("");
          setModalMessage(""); // Asegurarse de que no haya mensajes anteriores
          setShowForm(true); // Mostrar el formulario al hacer clic en "Nuevo Post"
        }}
        className="bg-blue-500 hover:bg-[#243e6c] active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 uppercase font-semibold text-white py-2 px-4 mb-4 w-50 rounded-full"
      >
        Nuevo Post
      </button>

      {loading ? (
        <p>Cargando posts...</p>
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Título</th>
              <th className="border border-gray-300 px-4 py-2">Contenido</th>
              <th className="border border-gray-300 px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map(post => (
              <tr key={post.id}>
                <td className="border border-gray-300 px-4 py-2">{post.id}</td>
                <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                <td className="border border-gray-300 px-4 py-2">{post.body}</td>
                <td className="border border-gray-300 px-4 py-2">
                <button
                    onClick={() => {
                      setEditPost(post); // Activa la edición del post
                      setFormTitle(post.title); // Setea el título en el formulario
                      setFormBody(post.body); // Setea el cuerpo en el formulario
                      setShowForm(true); // Muestra el formulario
                    }}
                    className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-3 rounded-full mt-1 w-20"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-[#ff3333] hover:bg-[#660000] text-white font-bold py-1 px-3 rounded-full mt-1 w-20"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Formulario Modal */}
      {(editPost || showForm) && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times; {/* Este es el símbolo de la X */}
            </button>

            <form onSubmit={handleSubmit}>
              <h2 className="text-lg font-bold mb-4">{editPost ? "Actualizar Post" : "Crear Post"}</h2>
              <input
                type="text"
                placeholder="Título"
                className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
                value={formTitle}
                onChange={e => setFormTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Contenido"
                className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
                value={formBody}
                onChange={e => setFormBody(e.target.value)}
                required
              />
              <button type="submit" className="bg-blue-500 text-white py-1 px-3 rounded">
                {editPost ? "Actualizar" : "Crear"}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="ml-2 bg-gray-500 text-white py-1 px-3 rounded"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-4">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="bg-sky-500 hover:bg-sky-700 text-white py-1 px-3 rounded-full font-semibold"
          >
            Anterior
          </button>
        )}
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="bg-sky-500 hover:bg-sky-700 text-white py-1 px-3 rounded-full font-semibold"
        >
          Siguiente
        </button>
      </div>

      {modalMessage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-1 px-3 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostTable;
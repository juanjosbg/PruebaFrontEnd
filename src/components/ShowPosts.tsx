import React from "react";
import { Post } from "../interfaces/Post";

interface ShowPostsProps {
  posts: Post[];
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  showSortedPostsModal: boolean;
  setShowSortedPostsModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
  sortedPosts: () => Post[];
}

const ShowPosts: React.FC<ShowPostsProps> = ({
  posts,
  sortOrder,
  setSortOrder,
  showSortedPostsModal,
  setShowSortedPostsModal,
  closeModal,
  sortedPosts,
}) => {
  return (
    <section>
      <button
        onClick={() => setShowSortedPostsModal(true)}
        className="bg-[#254f98] hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 uppercase font-semibold text-white py-2 px-4 mb-4 w-50 rounded-full mr-2"
      >
        Mostrar Post
      </button>

      {/* Botón para alternar orden */}
      <button
        onClick={() => setSortOrder(prev => (prev === "asc" ? "desc" : "asc"))}
        className="bg-blue-600 hover:bg-[#254f98] h active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 uppercase font-semibold text-white py-2 px-4 mb-10 w-50 rounded-full"
      >
        Ordenar {sortOrder === "asc" ? "Descendente" : "Ascendente"}
      </button>

      {/* Modal de posts ordenados */}
      {showSortedPostsModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            <h2 className="text-lg font-bold mb-4">Posts Ordenados</h2>
            <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Título</th>
                  <th className="border border-gray-300 px-4 py-2">Contenido</th>
                </tr>
              </thead>
              <tbody>
                {sortedPosts().map(post => (
                  <tr key={post.id}>
                    <td className="border border-gray-300 px-4 py-2">{post.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white py-1 px-3 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowPosts;

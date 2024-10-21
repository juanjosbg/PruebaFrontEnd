import React, { useState, useEffect } from "react";
import { fetchPosts, createPost, updatePost, deletePost } from "../services/apiService";
import PostForm from "./PostForm";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import NotificationModal from "./NotificationModal";

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  const handleCreatePost = async (newPost) => {
    const createdPost = await createPost(newPost);
    setPosts([...posts, createdPost]);
    setNotificationMessage("Post creado con éxito!"); // Mensaje actualizado
    setIsModalOpen(true);
    setCurrentPost(null);
  };
  
  const handleUpdatePost = async (updatedPost) => {
    const newData = await updatePost(updatedPost);
    setPosts(posts.map((post) => (post.id === newData.id ? newData : post)));
    setNotificationMessage("Post modificado con éxito!"); // Mensaje actualizado
    setIsModalOpen(true);
    setCurrentPost(null);
  };
  
  const handleDeletePost = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
    setNotificationMessage("Post eliminado con éxito!"); // Mensaje actualizado
    setIsModalOpen(true);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">Post Management</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PostForm
        currentPost={currentPost}
        setCurrentPost={setCurrentPost}
        onCreate={handleCreatePost}
        onUpdate={handleUpdatePost}
      />
      {/* Data Table for Posts */}
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Content</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id} className="border-b">
              <td className="py-2 px-4">{post.id}</td>
              <td className="py-2 px-4">{post.title}</td>
              <td className="py-2 px-4">{post.body}</td>
              <td className="py-2 px-4">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => {
                    setCurrentPost(post); // Cargar el post actual para editar
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {/* Modal for notifications */}
      <NotificationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        message={notificationMessage}
      />
    </div>
  );
};

export default PostTable;

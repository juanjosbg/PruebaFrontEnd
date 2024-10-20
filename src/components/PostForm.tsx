// src/components/PostForm.tsx
import React, { useState } from "react";
import { Post } from "../interfaces/Post";

interface PostFormProps {
  initialData?: Post;
  onSave: (post: Omit<Post, 'id'>) => void;
}

const PostForm: React.FC<PostFormProps> = ({ initialData, onSave }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [body, setBody] = useState(initialData?.body || "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave({ title, body });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ingrese el título"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contenido</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Ingrese el contenido"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {initialData ? "Actualizar" : "Crear"} Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;

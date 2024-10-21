import React from "react";

const PostList = ({ posts, setCurrentPost, onDelete }) => {
  return (
    <div className="bg-white border rounded-md shadow-md mt-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
          <div className="mt-2">
            <button
              className="text-blue-500 hover:text-blue-700 mr-4"
              onClick={() => setCurrentPost(post)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => onDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

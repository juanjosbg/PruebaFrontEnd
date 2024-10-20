// src/App.jsx
import React from "react";
import PostTable from "./components/PostTable";

const App = () => {
  const handleCreatePost = (newPost) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Post creado exitosamente");
      });
  };

  return (
    <div>
      <PostTable />
    </div>
  );
};

export default App;

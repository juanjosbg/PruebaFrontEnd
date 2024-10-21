// apiService.ts
export const fetchPosts = async (page: number, limit: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) throw new Error("Error al cargar los posts");
    return response.json();
};

export const deletePost = async (id: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error al eliminar el post");
};

export const createPost = async (postData: { title: string; body: string }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
    });
    return response.json();
};

export const updatePost = async (id: number, postData: { title: string; body: string }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
    });
    return response.json();
};
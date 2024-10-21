import React, { useState, useEffect } from "react";

const PostForm = ({ currentPost, setCurrentPost, onCreate, onUpdate }) => {
    const [formData, setFormData] = useState({ title: "", body: "" });

    useEffect(() => {
        if (currentPost) {
            setFormData({ title: currentPost.title, body: currentPost.body });
        } else {
            setFormData({ title: "", body: "" });
        }
    }, [currentPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPost) {
            onUpdate({ ...currentPost, ...formData });
        } else {
            onCreate(formData);
        }
        setFormData({ title: "", body: "" });
        setCurrentPost(null);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 mb-4 bg-gray-100 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                    required
                    type="text"
                    className="border w-full py-2 px-3 rounded-md"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Body</label>
                <textarea
                    required
                    className="border w-full py-2 px-3 rounded-md"
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {currentPost ? "Update Post" : "Create Post"}
            </button>
        </form>
    );
};

export default PostForm;

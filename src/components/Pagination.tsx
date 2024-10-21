import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="inline-flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => setCurrentPage(number)}
              className={`px-4 py-2 border rounded ${
                currentPage === number ? "bg-blue-500 text-white" : "text-blue-500"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

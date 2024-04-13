import React from "react";

const Category = ({ cateName }) => {
  return (
    <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
      {cateName}
    </button>
  );
};

export default Category;

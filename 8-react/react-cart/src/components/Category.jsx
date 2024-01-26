import React from "react";

const Category = ({catName}) => {
  return (
    <button className="catName-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
      {catName}
    </button>
  );
};

export default Category;

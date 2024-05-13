import React, { useEffect, useState } from "react";
import { productApi } from "../../api/product";

const Category = ({ cateName }) => {
  return (
    <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1 active:scale-90 duration-300">
      {cateName}
    </button>
  );
};

export default Category;

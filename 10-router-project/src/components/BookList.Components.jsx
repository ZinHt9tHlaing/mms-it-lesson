import React from "react";

const BookListComponents = ({ data }) => {

  return (
    <div className="w-[300px] h-[380px] border-2 rounded-xl dark:bg-gray-800 grid-cols-4 dark:border-gray-700 hover:bg-gray-700 my-5 hover:scale-95 hover:duration-300 hover:p-1 shadow">
      <div className="hover:scale-95 hover:duration-300 p-2">
        <img
          className=" rounded-lg"
          src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="barna.jpg"
        />
      </div>
      <div className="my-1 p-2">
        <h1 className="text-2xl font-bold text-white p-1 hover:bg-gray-800 rounded-md line-clamp-1">
          {data.book}
        </h1>
        <h2 className="text-sm text-gray-500 hover:bg-gray-800 p-2 rounded-md">
          {data.author}
        </h2>
      </div>
      <div className="p-2">
        <p className="text-gray-300 p-1 text-sm hover:bg-gray-800 rounded-md line-clamp-2">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default BookListComponents;

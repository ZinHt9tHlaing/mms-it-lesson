import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const ErrorComponents = ({ children }) => {
  return (
    <div className=" flex justify-center items-center text-red-500 space-x-2 border shadow py-3 my-3">
      <IoWarningOutline />
      <h1>{children} !</h1>
    </div>
  );
};

export default ErrorComponents;

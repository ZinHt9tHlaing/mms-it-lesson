import React from "react";
import { IoWarningOutline } from "react-icons/io5";

const ErrorComponent = ({children}) => {
  return (
    <div className="flex justify-center items-center text-red-500 border space-x-2 py-3 shadow my-3">
      <IoWarningOutline />
      <h1>{children} !</h1>
    </div>
  );
};

export default ErrorComponent;

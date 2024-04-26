import React from "react";

const FormComponent = ({ label, type, name, placeholder = "", ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className=" px-2 py-3 rounded border-2 border-blue-300 focus:ring-2 focus:ring-blue-700 focus-visible:outline-none duration-200"
      />
    </div>
  );
};

export default FormComponent;

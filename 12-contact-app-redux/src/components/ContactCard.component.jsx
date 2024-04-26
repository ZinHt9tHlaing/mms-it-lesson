import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponent = ({ data }) => {
  const nav = useNavigate();
  const handleDirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  return (
    <button
      onClick={handleDirect}
      className=" w-2/4 h-auto border shadow my-5 px-3 hover:bg-black hover:text-white hover:scale-105 duration-300 rounded"
    >
      <h1 className=" text-xl font-bold">{data.name}</h1>
      <p className="">{data.phone}</p>
    </button>
  );
};

export default ContactCardComponent;

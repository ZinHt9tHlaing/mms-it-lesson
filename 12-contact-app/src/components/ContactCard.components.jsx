import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponents = ({ data }) => {
  const nav = useNavigate();

  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  return (
    <button
      onClick={handleRedirect}
      className=" w-2/4 h-auto border my-5 p-2 rounded-lg shadow active:scale-90 hover:bg-black hover:text-white hover:scale-95 duration-200"
    >
      <h1>{data.name}</h1>
      <p>{data.phone}</p>
    </button>
  );
};

export default ContactCardComponents;

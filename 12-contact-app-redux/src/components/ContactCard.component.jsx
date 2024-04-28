import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";
import { deleteContact } from "../service/contact.service";

const ContactCardComponent = ({ data, handleDelete }) => {
  const nav = useNavigate();
  const handleDirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  const handleEdit = () => {
    // console.log("Is id here?", data.id);
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };

 

  return (
    <div className="w-2/4 h-auto border-2 my-5 rounded-lg shadow-md hover:bg-black hover:text-white flex justify-between items-center p-5 duration-300">
      <button
        onClick={handleDirect}
        className=" me-4 flex-1 duration-200 hover:border-2 hover:py-1 hover:rounded active:scale-90"
      >
        <div>
          <h1 className=" text-xl font-bold">{data.name}</h1>
          <p className="">{data.phone}</p>
        </div>
      </button>
      <div className=" space-x-2">
        <button
          onClick={handleEdit}
          className="border border-gray-300 shadow-md hover:scale-110 rounded text-xl active:scale-95 p-2 duration-300"
        >
          <CiEdit />
        </button>
        <button
          onClick={handleDelete.bind(this, data.id)}
          className="border border-gray-300 shadow-md hover:scale-110 rounded text-xl active:scale-95 p-2 duration-300"
        >
          <CiTrash />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponent;

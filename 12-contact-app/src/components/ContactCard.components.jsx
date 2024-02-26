import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";
import { deleteContact } from "../service/contact.service";

const ContactCardComponents = ({ data, handleDelete }) => {
  const nav = useNavigate();

  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  const handleEdit = () => {
    console.log("Is id here?", data.id);
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };

  return (
    <div className=" w-2/4 h-auto border my-5 rounded-lg shadow hover:bg-black hover:text-white  flex justify-between items-center p-5">
      <button
        onClick={handleRedirect}
        className=" me-4 flex-1 duration-200 hover:border-2 hover:py-1 hover:rounded active:scale-90"
      >
        <div>
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </button>
      <div className=" space-x-3">
        <button
          onClick={handleEdit}
          className="border border-gray-300 hover:p-3 rounded text-xl active:scale-95 p-2 duration-200"
        >
          <CiEdit />
        </button>
        <button
          onClick={handleDelete.bind(this, data.id)}
          className="border border-gray-300 hover:p-3 rounded text-xl active:scale-95 p-2 duration-200"
        >
          <CiTrash />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;

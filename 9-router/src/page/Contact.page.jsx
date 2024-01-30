import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ContactPage = () => {
  const nav = useNavigate();
  const { state } = useLocation();

  const handleBack = () => {
    nav(-1);
  };

  return (
    <div>
      <p>Contact Page</p>

      <button
        className=" bg-black text-white p-3 rounded-lg hover:ring-2 ring-emerald-600 active:scale-90"
        onClick={handleBack}
      >
        Back
      </button>

      <h3>Contact name is - {state.name}</h3>
    </div>
  );
};

export default ContactPage;

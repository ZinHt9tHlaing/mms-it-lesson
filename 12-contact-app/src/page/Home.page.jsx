import React from "react";
import { PreventComponents } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" font-bold text-4xl my-9">HomePage</h1>
        <button
          onClick={handleLogout}
          className=" bg-blue-500 px-3 py-2 rounded text-white text-2xl active:scale-90 duration-200"
        >
          Logout
        </button>
      </div>
    </PreventComponents>
  );
};

export default HomePage;

import React, { useEffect } from "react";
import { PreventComponents } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  const handleAdd = () => {
    nav("/home/add");
  };

  const handleReturnHome = () => {
    nav("/home");
  };

  useEffect(() => {
    (async () => {
      const res = await getProfile();
    })();
  }, []);

  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className="container font-serif mx-auto h-screen">
        <div className="lg:w-[80%] mx-auto h-full">
          <nav className=" flex sticky top-0 justify-between items-center px-2 py-3 shadow">
            <button
              onClick={handleReturnHome}
              className="hover:-rotate-3 active:scale-95 duration-300"
            >
              <h1 className=" text-2xl">Contact App</h1>
            </button>
            <div className=" space-x-5">
              <button
                onClick={handleAdd}
                className=" px-2 py-1 rounded bg-black text-white active:scale-95 duration-200"
              >
                Add
              </button>
              <button
                onClick={handleLogOut}
                className=" px-2 py-1 rounded bg-black text-white active:scale-95 duration-200"
              >
                Logout
              </button>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </PreventComponents>
  );
};

export default HomePage;

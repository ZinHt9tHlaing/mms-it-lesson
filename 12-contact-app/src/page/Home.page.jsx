import React, { useEffect } from "react";
import { PreventComponents } from "../components";
import { useNavigate, Outlet } from "react-router-dom";
import { getProfile } from "../service/auth.service";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    nav("/");
  };

  useEffect(() => {
    (async () => {
      const res = await getProfile();
      // console.log(res);
    })();
  }, []);

  const handleHomeBack = () => {
    nav("/");
  };

  const handleAddBtn = () => {
    nav("/home/add");
  };
  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className=" container mx-auto h-screen">
        <div className="w-[80%] mx-auto h-full">
          <nav className="flex justify-between items-center px-2 py-3 shadow">
            <button
              onClick={handleHomeBack}
              className="font-bold text-xl active:scale-95 duration-200"
            >
              Contact App
            </button>
            <div className=" space-x-5">
              <button
                onClick={handleAddBtn}
                className=" bg-blue-500 text-white px-3 py-2 rounded active:scale-95 duration-200"
              >
                Add
              </button>
              <button
                onClick={handleLogout}
                className=" bg-blue-500 text-white px-3 py-2 rounded active:scale-95 duration-200"
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

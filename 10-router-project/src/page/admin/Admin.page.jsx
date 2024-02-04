import React, { useEffect, useState } from "react";
import { Auth } from "../../service/user.service";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const finder = localStorage.getItem("auth");
    if (finder) {
      nav("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const data = await Auth("user", formData);

    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
  };

  return (
    <div className=" w-[50%] mx-auto">
      <div className=" flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col mb-4">
            <label
              htmlFor="email"
              className="cursor-pointer text-lg font-semibold"
            >
              Enter Your Email
            </label>
            <input
              value={formData.email}
              onChange={(e) => {
                setFormData((pre) => ({ ...pre, email: e.target.value }));
              }}
              type="email"
              id="email"
              name="email"
              className=" px-3 py-1 w-[350px] border-2 border-gray-300 focus:border-gray-700"
            />
          </div>
          <div className=" flex flex-col mb-4">
            <label
              htmlFor="password"
              className="cursor-pointer text-lg font-semibold"
            >
              Enter Your Password
            </label>
            <input
              value={formData.password}
              onChange={(e) => {
                setFormData((pre) => ({ ...pre, password: e.target.value }));
              }}
              type="password"
              id="password"
              name="password"
              className=" px-3 py-1 w-[350px] border-2 border-gray-300 focus:border-gray-700"
            />
          </div>
          <button
            type="submit"
            className=" bg-black text-white px-4 py-2 active:scale-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;

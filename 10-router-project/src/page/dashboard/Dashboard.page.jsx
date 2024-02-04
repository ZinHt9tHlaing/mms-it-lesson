import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const nav = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (!data) {
      nav("/admin");
    }
  }, []);

  return (
    <div className=" grid grid-cols-10">
      <div className=" col-span-2">
        <h1>{state?.data?.email}</h1>
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link to="/dashboard/user">
            <li>User</li>
          </Link>

          <Link to="/dashboard/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className=" col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;

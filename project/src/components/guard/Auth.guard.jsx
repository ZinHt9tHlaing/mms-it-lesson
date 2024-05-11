import React, { useEffect } from "react";
import { useGetProfileQuery } from "../../store/services/endpoints/auth.endpoint";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ check, children, token, path = "/" }) => {
  const nav = useNavigate();
  const { data, isError, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (isError) {
      nav(path);
    } else if (data) {
      nav("/home");
    }
  }, [check, data, isError]);

  return <>{isLoading ? <Loading /> : <>{children}</>}</>;
};

export default AuthGuard;

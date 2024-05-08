import React, { useEffect } from "react";
import { useGetProfileQuery } from "../../store/services/endpoints/auth.endpoint";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ check, children, token }) => {
  const nav = useNavigate();
  const { data, isError, isLoading } = useGetProfileQuery();
  console.log("Auth guard", data, isError, isLoading);

  useEffect(() => {
    if (check) {
      localStorage.setItem("token", JSON.stringify(token));
    } else if (isError) {
      nav("/");
    } else if (data) {
      nav("/home");
    }
  }, [check, data, isError]);

  return <>{isLoading ? <Loading /> : <>{children}</>}</>;
};

export default AuthGuard;

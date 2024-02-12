import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";
import useApi from "../hook/useApi";

const RegisterPage = () => {
  const nav = useNavigate();
  const { handleDealApi, loading, error, data } = useApi(Register);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDealApi(formData);
  };

  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="center">
            <div className=" w-2/6 h-auto">
              <h1 className=" font-serif text-4xl mb-10">
                Register Your Account
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form onSubmit={handleSubmit} className="space-y-5">
                <FormComponents
                  value={formData.name}
                  onChange={handleInputChange}
                  label={"Enter Username"}
                  type={"text"}
                  name={"name"}
                  placeholder="Enter your username"
                />

                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  label={"Enter Your Email"}
                  type={"email"}
                  name={"email"}
                  placeholder="example@gmail.com"
                />

                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  label={"Enter Your Password"}
                  type={"password"}
                  name={"password"}
                  placeholder="Password"
                />

                <FormComponents
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  label={"Confirm Your Password"}
                  type={"password"}
                  name={"password_confirmation"}
                  placeholder="Confirm Password"
                />

                <ButtonComponents type={"submit"} style={"!rounded-lg"}>
                  Register
                </ButtonComponents>
              </form>
              <p className=" mt-5">
                Already have an account?{" "}
                <button
                  className=" text-blue-400 font-semibold active:scale-95 duration-100"
                  onClick={() => nav("/")}
                >
                  Login here
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default RegisterPage;

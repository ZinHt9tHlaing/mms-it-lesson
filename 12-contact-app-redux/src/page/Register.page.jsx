import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponent,
  ErrorComponent,
  FormComponent,
  LoadingComponent,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDealApi(formData);
  };

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className=" Center">
            <div className=" w-2/6 h-auto">
              <h1 className=" font-serif text-4xl text-center mb-10">
                Register Your Account
              </h1>
              {error && <ErrorComponent>{error}</ErrorComponent>}
              <form onSubmit={handleSubmit}>
                <div className=" space-y-3 mt-5">
                  <FormComponent
                    value={formData.name}
                    onChange={handleInputChange}
                    type={"name"}
                    name={"name"}
                    label={"Enter Your Username"}
                  />
                  <FormComponent
                    value={formData.email}
                    onChange={handleInputChange}
                    type={"email"}
                    name={"email"}
                    label={"Enter Your Email"}
                    placeholder="example@gmail.com"
                  />
                  <FormComponent
                    value={formData.password}
                    onChange={handleInputChange}
                    type={"password"}
                    name={"password"}
                    label={"Enter Your Password"}
                    placeholder="******"
                  />
                  <FormComponent
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    type={"password"}
                    name={"password_confirmation"}
                    label={"Confirm Your Password"}
                    placeholder="Confirm Password"
                  />
                  <ButtonComponents type="submit" style={"rounded"}>
                    Register
                  </ButtonComponents>
                  <p>
                    You have already account?{" "}
                    <button
                      className="text-blue-400 hover:underline hover:scale-105 active:scale-95 duration-300"
                      onClick={() => nav("/")}
                    >
                      Login here
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </ContainerComponent>
    </PreventComponents>
  );
};

export default RegisterPage;

import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponent,
  ErrorComponent,
  FormComponent,
  LoadingComponent,
  PreventComponents,
} from "../components";
import { Login } from "../service/auth.service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, processing } from "../store/slice/auth.slice";

const LoginPage = () => {
  const nav = useNavigate();
  const { loading, error, data, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(processing()); // loading true
    const res = await Login(formData);
    dispatch(login(res.data));
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
                Login Your Contact
              </h1>

              {error && <ErrorComponent>{error}</ErrorComponent>}

              <form onSubmit={handleSubmit}>
                <div className=" space-y-3 mt-5">
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
                    label={"Password"}
                    placeholder="******"
                  />
                  <ButtonComponents type="submit" style={"rounded"}>
                    Login
                  </ButtonComponents>
                  <p>
                    You have no account?{" "}
                    <button
                      className="text-blue-400 hover:underline hover:scale-105 active:scale-95 duration-300"
                      onClick={() => nav("/register")}
                    >
                      Register here
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

export default LoginPage;

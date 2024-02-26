import React, { useEffect, useState } from "react";
import ContainerComponents from "../components/Container.components";
import {
  ButtonComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, processing } from "../store/slice/auth.slice";
import { Login } from "../service/auth.service";

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
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="center">
            <div className=" w-2/6 h-auto">
              <h1 className=" font-serif text-2xl text-center mb-10">
                Login Your Contact
              </h1>

              {error && <ErrorComponents>{error}</ErrorComponents>}

              <form onSubmit={handleSubmit} className=" space-y-7 mt-5">
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder="example@gmail.com"
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                  placeholder="Your password"
                />
                <ButtonComponents style={"!rounded-lg"} type="submit">
                  Login
                </ButtonComponents>
              </form>
              <p className=" mt-5">
                You have no account?{" "}
                <button
                  className=" text-blue-400 font-semibold active:scale-95 duration-100"
                  onClick={() => nav("/register")}
                >
                  Register here
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;

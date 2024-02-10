import React, { useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  FormComponents,
} from "../components";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <ContainerComponents>
      <div className="center">
        <div className=" w-2/6 h-auto">
          <h1 className=" font-serif text-4xl mb-10">Register Your Account</h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <FormComponents
              value={formData.name}
              onChange={handleInputChange}
              label={"Enter Username"}
              type={"text"}
              name={"name"}
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
        </div>
      </div>
    </ContainerComponents>
  );
};

export default RegisterPage;

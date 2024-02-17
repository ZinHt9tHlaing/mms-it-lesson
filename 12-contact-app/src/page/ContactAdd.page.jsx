import React, { useState } from "react";
import { ButtonComponents, FormComponents } from "../components";

const ContactAddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleFormPrevent = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="center">
      <div className=" w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className=" font-serif text-2xl mb-10 text-center">
          Create Your Contact
        </h1>
        <form onSubmit={handleFormPrevent} className="space-y-5">
          <FormComponents
            value={formData.name}
            onChange={handleFormDataChange}
            label={"Name"}
            type={"text"}
            name={"name"}
          />
          <FormComponents
            value={formData.phone}
            onChange={handleFormDataChange}
            label={"Phone"}
            type={"number"}
            name={"phone"}
          />
          <FormComponents
            value={formData.email}
            onChange={handleFormDataChange}
            label={"Email"}
            type={"email"}
            name={"email"}
          />
          <FormComponents
            value={formData.address}
            onChange={handleFormDataChange}
            label={"Address"}
            type={"text"}
            name={"address"}
          />
          <ButtonComponents>Login here</ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;

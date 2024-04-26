import React, { useState } from "react";
import { ButtonComponents, FormComponent } from "../components";
import { addNewContact } from "../service/contact.service";
import { useNavigate } from "react-router-dom";

const ContactAddPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addNewContact(formData)
    console.log(res);
    if (res) {
      nav("/home")
    }
  };
  return (
    <div className=" Center">
      <div className=" w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className=" font-serif text-xl text-center mb-10">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormComponent
            value={formData.name}
            onChange={handleFormDataChange}
            type={"name"}
            name={"name"}
            label={"Name"}
          />
          <FormComponent
            value={formData.phone}
            onChange={handleFormDataChange}
            type={"number"}
            name={"phone"}
            label={"Phone"}
            placeholder="09*******"
          />
          <FormComponent
            value={formData.email}
            onChange={handleFormDataChange}
            type={"email"}
            name={"email"}
            label={"Email"}
            placeholder="examapl@gmail.com"
          />
          <FormComponent
            value={formData.address}
            onChange={handleFormDataChange}
            type={"text"}
            name={"address"}
            label={"Address"}
          />
          <ButtonComponents type="submit" style={"rounded"}>
            Create Contact
          </ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;

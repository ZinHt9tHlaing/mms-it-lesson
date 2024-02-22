import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ButtonComponents, FormComponents } from "../components";
import { addNewContact, editContact } from "../service/contact.service";

const ContactAddPage = () => {
  const nav = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (location.state?.edit) {
      const { email, address, name, phone } = location.state.data;
      setFormData({ name, email, phone, address });
    }
  }, [location]);

  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContact(location.state.id, formData);
    } else {
      res = await addNewContact(formData);
    }
    console.log(res);
    if (res) {
      nav("/home");
    }
  };

  return (
    <div className="center">
      <div className=" w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className=" font-serif text-2xl mb-10 text-center font-bold">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
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
          <ButtonComponents type="submit">
            {location.state?.edit ? "Edit Contact" : "Create Contact"}
          </ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;

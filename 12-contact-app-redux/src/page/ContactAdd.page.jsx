import React, { useEffect, useState } from "react";
import { ButtonComponents, FormComponent } from "../components";
import { addNewContact, editContact } from "../service/contact.service";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateContactMutation,
  useEditContactMutation,
} from "../store/endpoints/contact.endpoint";

const ContactAddPage = () => {
  const [fun, postData] = useCreateContactMutation();
  const [edit, { isError, isLoading, data }] = useEditContactMutation();

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
      setFormData({ email, address, name, phone });
    }
  }, [location]);

  const handleFormDataChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await edit(location.state.id, formData);
    } else {
      res = await fun(formData);
    }
    if (res) {
      nav("/home");
    }
  };
  return (
    <div className=" Center">
      <div className=" w-3/5 h-auto shadow px-6 py-7 border">
        <h1 className=" font-serif text-2xl text-center mb-10 font-bold">
          {location.state?.edit ? "Edit Your Contact" : "Create Your Contact"}
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
            {location.state?.edit ? "Edit Contact" : "Create Contact"}
          </ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;

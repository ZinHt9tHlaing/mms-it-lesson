import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button } from "../../../components/ui/button";
import { Loader2 } from "lucide-react";

const FormTool = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name field is required")
      .min(3, "Name must be 3 length"),
    email: yup
      .string()
      .email("That should be email format")
      .required("Email field is required"),
    phone: yup
      .string()
      .required("Phone field is required")
      .min(9, "That should be valid phone number")
      .max(11, "That should be valid phone number"),
    address: yup.string().required("Phone is required"),
  });

  const handleSubmit = () => {
    console.log("Hello World");
  };

  return (
    <div className=" h-full">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ handleBlur, handleChange, values, isSubmitting }) => (
          <>
            <Form className=" flex flex-col gap-4 h-full justify-between pb-10">
              <div className=" space-y-5">
                <div>
                  <Label htmlFor="name">Email Address</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    className=" bg-gray-200 mt-3"
                    type="name"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="name"
                    className=" text-danger text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    className="bg-gray-200 mt-3"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="email"
                    className=" text-danger text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    className="bg-gray-200 mt-3"
                    type="phone"
                    id="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="phone"
                    className=" text-danger text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    className="bg-gray-200 mt-3"
                    type="address"
                    id="address"
                    name="address"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="address"
                    className=" text-danger text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full text-basic border-basic hover:text-basic hover:duration-300 mt-3"
                >
                  Cancel
                </Button>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-blue-600  mt-3 hover:bg-basic hover:duration-300"
                >
                  Create
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormTool;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const App = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Address"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Length must be greater than 4")
      .max(8, "Length must be less than 8")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="m-5">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValue}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="flex flex-col w-[50%] gap-5">
              <label
                htmlFor="email"
                className=" text-xl font-bold cursor-pointer"
              >
                Email
              </label>
              <Field
                className="border-2 border-gray-500 py-1 px-2 bg-gray-100 active:scale-95 duration-200 rounded-lg"
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                component={"p"}
                name="email"
                className=" text-red-600"
              />
              <label
                htmlFor="password"
                className=" text-xl font-bold cursor-pointer"
              >
                Password
              </label>
              <Field
                className="border-2 border-gray-500 py-1 px-2 bg-gray-100 active:scale-95 duration-200 rounded-lg"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                component={"p"}
                name="password"
                className=" text-red-600"
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className=" bg-black text-white px-2 py-1 active:scale-95 duration-200 rounded-lg"
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;

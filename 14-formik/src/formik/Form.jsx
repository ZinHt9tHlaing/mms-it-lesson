import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const App = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required!")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required!")
      .min(4, "Length must be longer than 4")
      // .max(8, "Length must be shorter than 8")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  return (
    <div className=" w-[50%] m-5">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
          <>
            <Form className=" flex flex-col">
              <label htmlFor="email" className=" font-bold text-xl">
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className=" border-2 border-gray-400 rounded px-3 py-1 my-2"
              />
              <ErrorMessage
                component={"p"}
                name="email"
                className="text-red-500"
              />
              <label htmlFor="password" className=" font-bold text-xl">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className=" border-2 border-gray-400 rounded px-3 py-1 my-2"
              />
              <ErrorMessage
                component={"p"}
                name="password"
                className="text-red-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className=" px-2 py-1 text-white bg-gray-600 rounded active:scale-95 duration-200"
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

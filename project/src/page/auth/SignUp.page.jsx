import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../store/services/endpoints/auth.endpoint";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [fun, data] = useSignUpMutation();
  console.log(data);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const handleSubmit = async (value) => {
    await fun(value);
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(8, "Name should be longer than 8 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Formate"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be 8 letters"),
    password_confirmation: yup
      .string()
      .required("Password Confirm is required")
      .oneOf(
        [yup.ref("password"), null],
        "Password Confirm should match with Password"
      ),
  });

  return (
    <div className=" w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className=" basis-2/4 p-5 shadow-md">
        <CardHeader className=" flex-row justify-between items-center mb-5">
          <CardTitle className=" font-bold text-3xl">Sign Up</CardTitle>
          <CardDescription className=" text-basic">
            <Link to={"/"}>Already have an account?</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <>
                <Form className=" flex flex-col gap-3">
                  {/* name */}
                  <Label htmlFor="name" className=" text-gray-500">
                    Name
                  </Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    id="name"
                    name="name"
                    placeholder="Enter Your name"
                    className=" shadow-sm focus-visible:outline-none focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="name"
                    className=" text-danger text-sm"
                  />

                  {/* email */}
                  <Label htmlFor="email" className=" text-gray-500">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className=" shadow-sm focus-visible:outline-none focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="email"
                    className=" text-danger text-sm"
                  />

                  {/* password */}
                  <Label htmlFor="password" className=" text-gray-500">
                    Password
                  </Label>
                  <Input
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                    name="password"
                    className=" shadow-sm focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="password"
                    className=" text-danger text-sm"
                  />

                  {/* password_confirmation */}
                  <Label
                    htmlFor="password_confirmation"
                    className=" text-gray-500"
                  >
                    Password Confirm
                  </Label>
                  <Input
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password_confirmation}
                    id="password_confirmation"
                    name="password_confirmation"
                    className=" shadow-sm focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="password_confirmation"
                    className=" text-danger text-sm"
                  />

                  {/* button */}
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className=" w-full bg-basic mt-3 hover:bg-blue-500 active:scale-95 duration-200"
                  >
                    Sign Up{" "}
                    {isSubmitting && (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;

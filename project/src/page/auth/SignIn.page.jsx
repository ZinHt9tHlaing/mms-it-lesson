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
import { Loader2 } from "lucide-react";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSignInMutation } from "../../store/services/endpoints/auth.endpoint";

const SignInPage = () => {
  const [fun, data] = useSignInMutation();
  console.log(data);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (value, action) => {
    await fun(value);
    // action.reset();
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Formate"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be 8 letters"),
  });

  return (
    <div className=" w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className=" basis-2/4 p-5 shadow-md">
        <CardHeader className=" flex-row justify-between items-center mb-5">
          <CardTitle className=" font-bold text-3xl">Sign In</CardTitle>
          <CardDescription className=" text-basic">
            <Link to={"/sign_up"}>I don't have an account</Link>
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

                  {/* button */}
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className=" w-full bg-basic mt-3 hover:bg-blue-500 active:scale-95 duration-200"
                  >
                    Sign In{" "}
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

export default SignInPage;

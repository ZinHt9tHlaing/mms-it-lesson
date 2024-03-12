import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "../../store/service/endpoints/auth.endpoint";

const SignUpPage = () => {
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
      .required("Name is requires")
      .min(2, "Name should be longer than 2 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must should be 8 letters"),
    password_confirmation: yup
      .string()
      .required("Password Confirm is required")
      .oneOf(
        [yup.ref("password"), null],
        "Password confirm should match with Password"
      ),
  });

  return (
    <div className=" w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className=" basis-3/4 bg-gray-100 shadow">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className=" text-basic">
            <Link to={"/"}>Already have an account ?</Link>
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
                <Form className=" flex flex-col gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      className=" bg-gray-200 mt-3"
                      type="text"
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
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className=" bg-gray-200 mt-3"
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
                    <Label htmlFor="password">Password</Label>
                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      className="bg-gray-200 mt-3"
                      type="password"
                      id="password"
                      name="password"
                    />
                    <ErrorMessage
                      component={"p"}
                      name="password"
                      className=" text-danger text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password_confirmation">
                      Password Confirmation
                    </Label>
                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password_confirmation}
                      className=" bg-gray-200 mt-3"
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                    />
                    <ErrorMessage
                      component={"p"}
                      name="password_confirmation"
                      className=" text-danger text-sm"
                    />
                  </div>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-basic"
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

export default SignUpPage;

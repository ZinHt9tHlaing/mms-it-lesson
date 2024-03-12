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
import { useSignInMutation } from "../../store/service/endpoints/auth.endpoint";

const SignInPage = () => {
  const [fun, data] = useSignInMutation();
  console.log(data);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (value, action) => {
    await fun(value);
    action.reset();
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must should be 8 letters"),
  });

  return (
    <div className=" w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className=" basis-3/4 bg-gray-100 shadow">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className=" text-basic">
            <Link to={"sign_up"}>I don't have an account</Link>
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
                    <Label htmlFor="name">Email Address</Label>
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
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-basic"
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

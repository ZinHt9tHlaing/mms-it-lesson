import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSignInMutation } from "../../store/service/endpoints/auth.endpoints";

const SignInPage = () => {
  const [fun, data] = useSignInMutation();
  console.log(data);
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password length should be 8 letters"),
  });

  const handleSubmit = async (value, action) => {
    await fun(value);
    action.reset();
  };

  return (
    <div className="w-3/5 mx-auto  h-full flex justify-center items-center">
      <Card className="basis-2/4 p-5 rounded-lg">
        <CardHeader className="flex flex-row justify-between mb-5">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className="text-basic">
            <Link to="sign_up">I don't have an account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleBlur, handleChange, values, isSubmitting }) => (
              <>
                <Form className="flex flex-col gap-4">
                  <Label
                    htmlFor="email"
                    className="text-gray-400 cursor-pointer"
                  >
                    Email Address
                  </Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    name="email"
                    id="email"
                    className=" bg-gray-100"
                  />
                  <ErrorMessage
                    className=" text-danger text-sm"
                    component={"p"}
                    name="email"
                  />
                  <Label
                    htmlFor="password"
                    className="text-gray-400 cursor-pointer"
                  >
                    Password
                  </Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    name="password"
                    id="password"
                    className=" bg-gray-100"
                  />
                  <ErrorMessage
                    className=" text-danger text-sm"
                    component={"p"}
                    name="password"
                  />
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-basic mt-3 active:scale-95 duration-300"
                  >
                    Sign In{" "}
                    {isSubmitting && (
                      <Loader2 className="ms-2 h-4 w-4 animate-spin" />
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

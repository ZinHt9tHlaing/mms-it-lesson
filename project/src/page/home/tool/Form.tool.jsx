import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { useCreateContactMutation } from "../../../store/services/endpoints/contact.endpoint";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { SheetClose } from "../../../components/ui/sheet";

const FormTool = () => {
  const CloseRef = useRef();
  const [fun, { data, isError, isLoading }] = useCreateContactMutation();
  // console.log(data);

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
      .min(3, "Name must be 3 lengths"),
    email: yup
      .string()
      .email("That should be email format")
      .required("Email field is required"),
    phone: yup
      .string()
      .required("Phone field is required")
      .min(9, "That should be valid phone number")
      .max(11, "That should be valid phone number"),
    address: yup.string().required("Address field is required"),
  });

  const handleSubmit = async (value) => {
    await fun(value);
    CloseRef.current.click();
  };

  useEffect(() => {
    console.log("Hello world", data, isError, isLoading);
  }, [data, isError, isLoading]);

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
              <div className=" space-y-5 mt-5">
                {/* name */}
                <div>
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
                    className="  shadow border-2 focus-visible:outline-none focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="name"
                    className=" text-danger text-sm"
                  />
                </div>

                {/* email */}
                <div className="">
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
                    className="  shadow border-2 focus-visible:outline-none focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="email"
                    className=" text-danger text-sm"
                  />
                </div>

                {/* phone */}
                <div className="">
                  <Label htmlFor="phone" className=" text-gray-500">
                    Phone
                  </Label>
                  <Input
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    id="phone"
                    name="phone"
                    placeholder="xxxxxxxxx"
                    className="  shadow border-2 focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="phone"
                    className=" text-danger text-sm"
                  />
                </div>

                {/* address */}
                <div className="">
                  <Label htmlFor="address" className=" text-gray-500">
                    Address
                  </Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    id="address"
                    name="address"
                    placeholder="........"
                    className=" shadow border-2 focus:ring-2 focus:ring-basic duration-200"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="address"
                    className=" text-danger text-sm"
                  />
                </div>
              </div>

              {/* button */}
              <div className="flex gap-3">
                <SheetClose ref={CloseRef} asChild>
                  <Button
                    variant="outline"
                    disabled={isSubmitting}
                    type="button"
                    className=" w-full mt-3 border-basic hover:text-white hover:bg-blue-500 active:scale-95 duration-200"
                  >
                    Cancel
                    {isSubmitting && (
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                </SheetClose>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className=" w-full mt-3 bg-basic hover:bg-blue-500 active:scale-95 duration-200"
                >
                  Create
                  {isSubmitting && (
                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  )}
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

import React from "react";
import Nav from "../../components/nav/Nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetOverlay,
  SheetPortal,
} from "../../components/ui/sheet";

import { FaPlus } from "react-icons/fa";
import EmptyLottie from "../../components/lottieComponents/Empty.lottie";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import AuthGuard from "../../components/guard/Auth.guard";
import FormTool from "./tool/Form.tool";
import { useGetQuery } from "../../store/service/endpoints/contact.endpoint";

const HomePage = () => {
  const { data, isError, isLoading, isSuccess } = useGetQuery();
  console.log("Hello World", data);

  return (
    <AuthGuard>
      <Sheet>
        <div className=" w-screen h-screen">
          <Nav />
          <div className=" mx-auto px-52">
            <div className=" flex justify-end">
              <SheetTrigger>
                <Button className="bg-basic space-x-2 mt-5 hover:bg-blue-500 active:scale-95 active:duration-300">
                  <FaPlus />
                  <p>Create Contact</p>
                </Button>
              </SheetTrigger>
            </div>

            {data?.contacts?.data?.length > 0 ? (
              <h1>Hello</h1>
            ) : (
              <div className="border bg-gray-100 h-[600px] w-full mt-5 rounded flex flex-col justify-center items-center">
                <div className=" mx-auto">
                  <EmptyLottie />
                </div>
                <p className=" text-center font-semibold text-lg text-gray-500">
                  There is no lists...
                </p>
              </div>
            )}
          </div>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className=" text-2xl font-bold mb-4">
                Contact Information
              </SheetTitle>
            </SheetHeader>
            <FormTool />
            <SheetFooter>
              <SheetClose asChild>
                {/* <div>
                  <Button type="submit">Save changes</Button>
                </div> */}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
      </Sheet>
    </AuthGuard>
  );
};

export default HomePage;

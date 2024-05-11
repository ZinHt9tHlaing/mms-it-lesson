import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useLogoutMutation } from "../../store/services/endpoints/auth.endpoint";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const Nav = () => {
  const [logoutFun, { isSuccess }] = useLogoutMutation();
  const nav = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await logoutFun();
    nav("/");
    toast.success("Logout Successfully");
  };

  return (
    <div className=" w-full h-20 px-52 flex items-center bg-gray-100 shadow">
      <div className=" flex justify-between items-center w-full">
        <Link to={"/home"}>
          <h1 className=" text-2xl text-basic font-bold hover:-rotate-6 hover:scale-125 active:scale-95 duration-300">
            MMS
          </h1>
        </Link>
        <div className="flex justify-center items-center gap-5">
          <Button
            onClick={handleLogout}
            className=" bg-gray-700 hover:bg-gray-600 active:scale-95 duration-300"
          >
            {isSuccess ? (
              <Loader2 className="h-5 w-5 animate-spin mx-4" />
            ) : (
              <>Logout</>
            )}
          </Button>
          <Avatar className=" hover:scale-125 hover:-rotate-6 duration-300">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="font-bold">Profile</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;

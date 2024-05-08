import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" w-full h-20 px-52 flex items-center bg-gray-100 shadow">
      <div className=" flex justify-between items-center w-full">
        <Link to={"/home"}>
          <h1 className=" text-2xl text-basic font-bold hover:-rotate-6 hover:scale-110 active:scale-95 duration-300">
            MMS
          </h1>
        </Link>
        <div>
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

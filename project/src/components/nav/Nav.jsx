import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Nav = () => {
  return (
    <div className="shadow flex items-center w-full h-16 px-52 mx-auto bg-gray-200">
      <div className="flex justify-between items-center w-full">
        <h1 className=" text-2xl font-bold hover:-rotate-6 hover:scale-110 hover:duration-300">
          Content
        </h1>
        <div>
          <Avatar className="hover:-rotate-6 hover:scale-110 hover:duration-300">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Nav;

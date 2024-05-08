import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
    </div>
  );
};

export default Loading;

import { Route, Routes } from "react-router-dom";
import { HomePage, SignIn, SignUp } from "./page";
// import { ToastProvider } from "@radix-ui/react-toast";

const App = () => {
  return (
    <div className="w-screen h-screen">
      {/* <ToastProvider> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      {/* </ToastProvider> */}
    </div>
  );
};

export default App;

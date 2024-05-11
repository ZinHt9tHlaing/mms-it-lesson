import { Route, Routes } from "react-router-dom";
import { HomePage, SignIn, SignUp } from "./page";

const App = () => {
  return (
    <div className="w-screen h-screen">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
    </div>
  );
};

export default App;

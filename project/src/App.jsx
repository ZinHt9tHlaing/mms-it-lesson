import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignIn, SignUp } from "./page";
import { Toast, ToastProvider } from "./components/ui/toast";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ToastProvider>
        <Toast />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ToastProvider>
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./page"

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </main>
  );
};

export default App;

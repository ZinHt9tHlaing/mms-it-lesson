import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContactAddPage, ContactPage, HomePage, LoginPage, RegisterPage } from "./page";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

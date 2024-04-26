import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ContactAddPage,
  ContactPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./page";
import { DetailContactPage } from "./components";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
          <Route path="contact/:id" element={<DetailContactPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

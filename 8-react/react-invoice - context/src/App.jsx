import React, { useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";
import Test from "./components/Test";

const App = () => {
  

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm />
      <RecordTable />
      <Footer />
      <ProductDrawer />
      {/* <Test /> */}
    </div>
  );
};

export default App;

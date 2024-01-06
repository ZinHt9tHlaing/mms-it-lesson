import React, { useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";
import Test from "./components/Test";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.99 },
    { id: 3, name: "Orange", price: 2.49 },
    { id: 4, name: "Grapes", price: 3.99 },
    // Add more fruits as needed
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);

  const addRecord = (newRecord) => setRecord([...records, newRecord]);

  const removeRecord = (id) =>
    setRecord(records.filter((record) => record.id != id));

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm products={products} addRecord={addRecord} />
      <RecordTable removeRecord={removeRecord} records={records} />
      <Footer handleDrawer={handleDrawer} />
      <ProductDrawer
        products={products}
        addProduct={addProduct}
        handleDrawer={handleDrawer}
        openDrawer={openDrawer}
      />
      {/* <Test /> */}
    </div>
  );
};

export default App;

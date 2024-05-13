import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCarts] = useState([]);

  const [cartBtnInfo, setCartBtnInfo] = useState({});

  const toggleCartDrawer = () => setCartDrawer(!cartDrawer);

  const addCart = (newCart) => {
    setCarts([...carts, newCart]);
  };

  const deleteCart = (id) =>
    setCarts(carts.filter((cart) => cart.product_id != id));

  // increment & decrement
  const updateRecord = (id, addQuantity) => {
    setCarts(
      carts.map((el) => {
        if (el.id === id) {
          const newQuantity = el.quantity + addQuantity;
          const newCost = el.price * newQuantity;
          return {
            ...el,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return el;
      })
    );
  };

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
        deleteCart,
        updateRecord
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

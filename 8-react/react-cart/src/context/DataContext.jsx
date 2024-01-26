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

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

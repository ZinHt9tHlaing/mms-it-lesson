import React from "react";
import emptyCart from "../../image/empty-cart.svg"

const EmptyCart = ({ carts }) => {
  return (
    <>
      {carts.length === 0 && (
        <div className="m-auto text-center w-3/4">
          <img src={emptyCart} />
          <p className="font-heading">There is no item in cart</p>
        </div>
      )}
    </>
  );
};

export default EmptyCart;

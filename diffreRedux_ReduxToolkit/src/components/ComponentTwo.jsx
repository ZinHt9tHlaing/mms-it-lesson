import React from "react";
import { useDispatch } from "react-redux";
import { increase, increaseWithPayload } from "../store/slice/counter.slice";
import ComponentThree from "./ComponentThree";

const ComponentTwo = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleIncreasePayload = () => {
    dispatch(increaseWithPayload(3));
  };

  return (
    <div>
      ComponentTwo
      <button
        onClick={handleIncrease}
        className=" px-2 py-1 m-5 rounded bg-blue-200 active:scale-95 duration-200"
      >
        Increase 
      </button>

      <button
        onClick={handleIncreasePayload}
        className=" px-2 py-1 m-5 rounded bg-yellow-200 active:scale-95 duration-200"
      >
        Increase With Payload
      </button>
      <ComponentThree/>
    </div>
  );
};

export default ComponentTwo;

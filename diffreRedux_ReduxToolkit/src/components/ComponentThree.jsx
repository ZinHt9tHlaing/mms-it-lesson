import React from "react";
import { useDispatch } from "react-redux";
import { decrease } from "../store/slice/counter.slice";

const ComponentThree = () => {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decrease())
  };

  return (
    <div>
      ComponentThree
      <button
        onClick={handleDecrease}
        className=" px-2 py-1 m-5 rounded bg-red-200 active:scale-95 duration-200"
      >
        Decrease
      </button>
    </div>
  );
};

export default ComponentThree;

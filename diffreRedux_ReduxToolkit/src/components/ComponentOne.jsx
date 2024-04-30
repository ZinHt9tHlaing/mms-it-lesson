import React from "react";
import { useSelector } from "react-redux";
import ComponentTwo from "./ComponentTwo";

const ComponentOne = () => {
  const { value } = useSelector((state) => state.counter);
  // console.log(value);

  return (
    <div>
      Counter Value - {value}
      <ComponentTwo />
    </div>
  );
};

export default ComponentOne;

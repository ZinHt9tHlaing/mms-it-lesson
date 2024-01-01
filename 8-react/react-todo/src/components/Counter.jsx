import React, { useState } from "react";

const Counter = () => {
  // console.log(useState("zin htet hlaing"));

  const [count, setCount] = useState(0);
  console.log(count);

  const handleIncrement = () => {
    setCount(count + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
    // count > 0 && setCount((prev) => prev - 1);
  };

  return (
    <div className="font-mono border border-gray-400 p-10 rounded-xl">
      <h1 className="text-4xl font-bold mb-5">Counter : {count}</h1>
      <div className="flex gap-3">
        <button
          onClick={handleDecrement}
          className="border bg-sky-500 px-2 rounded-lg select-none"
        >
          Sub (-)
        </button>
        <button
          onClick={handleIncrement}
          className="border bg-sky-500 px-2 rounded-lg select-none"
        >
          Add (+)
        </button>
      </div>
    </div>
  );
};

export default Counter;

import React, { useEffect, useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);

  console.log("update", count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  useEffect(() => {
    // effect body
    console.log("content mounted");

    const runner = setInterval(() => {
      console.log("Random : ", Math.random());
    }, 3000);

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    return () => {
      // cleanup function
      
      console.log("content unmounted");
      clearInterval(runner);
    };
  }, [count]);

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md">
      <p className="text-lg mb-3">This is the content to hide or show.</p>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          -
        </button>
        <p className="mx-4 text-xl">{count}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Content;

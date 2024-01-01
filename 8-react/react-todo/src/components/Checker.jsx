import React, { useState } from "react";

const Checker = () => {
  const [done, setDone] = useState(true);
  console.log(done);
  const handleInput = () => {
    setDone(!done);
  };

  return (
    <div>
      <h1 className="mb-5">Name Input</h1>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="x"
          className="w-6 h-6"
          checked={done}
          onChange={handleInput}
        />
        <label htmlFor="x" className=" text-2xl select-none cursor-pointer">
          Check Me
        </label>
      </div>
    </div>
  );
};

export default Checker;

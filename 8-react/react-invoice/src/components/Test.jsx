import React, { useRef } from "react";

const Test = () => {
  const numRef = useRef(0);
  const handleBtn = () => {
    numRef.current = numRef.current + 1;
    console.log(numRef.current);
  };
  return (
    <div>
      <h1>Num:{numRef.current}</h1>
      <button
        onClick={handleBtn}
        className="border-2 mt-2 border-black px-2 py-1 rounded-lg active:scale-90"
      >
        Add
      </button>
    </div>
  );
};

export default Test;

// // increment test
// import React, { useState } from "react";

// const Test = () => {
//   const [increment, setIncrement] = useState([0]);

//   const handleBtn = () => {
//     setIncrement(increment.map((el) => el + 1));
//   };

//   return (
//     <div>
//       <h1>Num: {increment} </h1>
//       <button
//         onClick={handleBtn}
//         className="border-2 mt-2 border-black px-2 py-1 rounded-lg active:scale-90"
//       >
//         Add
//       </button>
//     </div>
//   );
// };

// export default Test;

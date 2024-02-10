import React, { useReducer } from "react";

const reducer = (store, action) => {
  switch (action.type) {
    case "increase": {
      if (action.payload) {
        return (store = store + action.payload);
      } else {
        return store + 1;
      }
      break;
    }
    case "decrease": {
      if (store > 0) {
        return store - 1;
      } else {
        return store;
      }
      break;
    }

    case "addWithPayLoad": {
      return (store = store + action.payload);
    }

    default: {
      return store;
    }
  }
};

const App = () => {
  const [state, dispatcher] = useReducer(reducer, 0);

  const handleAdd = () => {
    dispatcher({ type: "increase", payload: 10 });
  };

  const handleRemove = () => {
    dispatcher({ type: "decrease" });
  };

  const handleAddWithPayload = () => {
    dispatcher({ type: "addWithPayLoad", payload: 2 });
  };

  return (
    <div className=" mx-5">
      <h1 className=" font-bold text-3xl">{state}</h1>
      <button
        onClick={handleRemove}
        className=" px-3 mx-2 py-1 bg-black text-white active:scale-90"
      >
        Remove
      </button>
      <button
        onClick={handleAdd}
        className=" px-3 mx-2 py-1 bg-black text-white active:scale-90"
      >
        Add
      </button>
      <button
        onClick={handleAddWithPayload}
        className=" px-3 mx-2 py-1 bg-black text-white active:scale-90"
      >
        Add 2
      </button>
    </div>
  );
};

export default App;

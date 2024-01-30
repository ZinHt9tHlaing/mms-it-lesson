import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const nav = useNavigate();

  const handleToContact = () => {
    nav("/contact");
  };

  const handleDataTransfer = (event) => {
    event.preventDefault();
    console.log(text);
    nav("/contact",{state:{name:text}});
  };

  return (
    <div>
      <p>Home Page</p>
      <button
        className=" bg-black text-white p-3 rounded-lg hover:ring-2 ring-emerald-600 active:scale-90"
        onClick={handleToContact}
      >
        Next to Contact
      </button>
      <form className="flex flex-col w-[200px] my-5">
        <label htmlFor="name">Name</label>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="mb-3 border-2 border-gray-400 rounded-lg text-center"
          type="text"
          id="name"
          name="name"
        />
        <button
          onClick={handleDataTransfer}
          type="submit"
          className=" bg-black w-20 rounded-lg p-1 text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default HomePage;

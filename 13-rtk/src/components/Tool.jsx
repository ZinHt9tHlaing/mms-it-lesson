import React, { useState } from "react";
import { usePostTodoMutation } from "../store/service/endpoints/todo.endpoints";

const Tool = ({ handleFetch }) => {
  const [fun, data] = usePostTodoMutation();
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun({
      text: todo,
    });
    handleFetch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className=" border-2 border-black me-4 px-1"
        />
        <button
          type="submit"
          className=" bg-black text-white px-2 py-1 rounded active:scale-95"
        >
          Submit
        </button>
      </form>
      <hr className=" my-4 border border-gray-300" />
    </div>
  );
};

export default Tool;

import React, { useState } from "react";
import { usePostTodoMutation } from "../store/service/endpoints/todo.endpoints";

const Tool = ({ handleRefetch }) => {
  const [fun, data] = usePostTodoMutation();
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fun({
      text: todo,
    });
    handleRefetch()
  };

  return (
    <div className=" mb-5">
      <form onSubmit={handleSubmit}>
        <input
          className=" border-2 border-gray-400 me-2 p-1 ps-3"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          name="todo"
          id="todo"
        />
        <button
          type="submit"
          className=" bg-black text-white px-2 py-1 rounded active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tool;

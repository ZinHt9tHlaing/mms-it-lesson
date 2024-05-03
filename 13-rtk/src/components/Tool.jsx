import React, { useState } from "react";
import { usePostTodoMutation } from "../store/services/endpoints/todo.endpoints";

const Tool = ({ handleRefetch }) => {
  const [fun, data] = usePostTodoMutation();
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    await fun({
      text: todo,
    });
    handleRefetch();
  };

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={handleOnChange}
        name="todo"
        id="todo"
        className=" border-2 border-gray-500 px-2 rounded focus-visible:outline-none focus:ring-2 focus:ring-gray-600 duration-200"
      />
      <button
        type="submit"
        className=" px-2 py-1 mx-2 bg-black text-white rounded active:scale-95 duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default Tool;

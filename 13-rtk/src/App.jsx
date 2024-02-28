import React from "react";
import List from "./components/List";
import Tool from "./components/Tool";
import { useGetTodoQuery } from "./store/service/endpoints/todo.endpoints";

const App = () => {
  const { isError, isLoading, isSuccess, data, refetch } = useGetTodoQuery();

  const handleFetch = () => {
    refetch();
  };

  return (
    <div className=" m-5">
      <h1 className=" text-4xl font-serif font-bold mb-3">RTK Todo</h1>
      <Tool handleFetch={handleFetch} />
      <List isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;

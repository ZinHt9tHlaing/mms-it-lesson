import React from "react";
import List from "./components/List";
import Tool from "./components/Tool";
import { useGetTodoQuery } from "./store/services/endpoints/todo.endpoints";

const App = () => {
  const { isError, isLoading, isSuccess, data, refetch } = useGetTodoQuery();

  const handleRefetch = () => {
    // refetch();
  };

  return (
    <div className="p-3">
      <h1 className=" text-2xl font-bold mb-5">RTK Todo</h1>
      <Tool handleRefetch={handleRefetch} />
      <List isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;

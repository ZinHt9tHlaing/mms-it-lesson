import React from "react";
import Tool from "./components/Tool";
import List from "./components/List";
import { useGetTodoQuery } from "./store/service/endpoints/todo.endpoints";

const App = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useGetTodoQuery();
  const handleRefetch = () => {
    refetch();
  };

  return (
    <div className="m-5">
      <h1 className=" text-3xl font-semibold mb-4">RTK Todo</h1>
      <Tool handleRefetch={handleRefetch} />
      <List isLoading={isLoading} data={data} />
    </div>
  );
};

export default App;

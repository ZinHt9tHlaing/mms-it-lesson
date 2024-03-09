import React from "react";
import { useGetTodoQuery } from "../store/service/endpoints/todo.endpoints";

const List = ({ isLoading, data }) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.map((i) => (
            <h1 key={i.id} className=" text-2xl">
              {i.id} - {i.text}
            </h1>
          ))}
        </>
      )}
    </div>
  );
};

export default List;

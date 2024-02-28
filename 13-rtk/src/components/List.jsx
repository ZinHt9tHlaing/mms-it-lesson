import React from "react";
import Delete from "./Delete";

const List = ({ isLoading, data }) => {
  return (
    <div>
      {isLoading ? (
        <h1 className=" text-3xl">Loading...</h1>
      ) : (
        <>
          {data.map((i) => (
            <div key={i.id} className="flex items-center mb-4">
              <span className=" text-md me-3">{i.id} - {i.text}</span>
              <Delete  />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default List;

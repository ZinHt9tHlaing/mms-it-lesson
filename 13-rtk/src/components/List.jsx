import React from "react";

const List = ({ isLoading, data }) => {
  return (
    <div>
      {isLoading ? (
        <h1 className=" text-2xl font-bold">Loading...</h1>
      ) : (
        <>
          {data.map((i) => (
            <div key={i.id} className="flex">
              <span>{i.id}</span> <p className=" mx-1 font-semibold">-</p> <h1 className=" font-bold">{i.text}</h1>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default List;

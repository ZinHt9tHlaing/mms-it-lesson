import React from "react";

const List = ({ course: { id, title, fee, student, count, status } }) => {
  return (
    <div className=" bg-white border-2 p-3 mb-3">
      <p>
        {title} : {fee}
      </p>
    </div>
  );
};

export default List;

import React from "react";

const Course = ({ id, title, count }) => {
  //   console.log(props);
  const borderClassName =
    count === 0 ? "bg-red-100  border-red-300" : "bg-gray-100";
    return (
      count > 0 && (
        <div className={`border-s-4 ${borderClassName} mb-3 p-3`}>
          {count}. {title}
        </div>
      )
    );
};

export default Course;

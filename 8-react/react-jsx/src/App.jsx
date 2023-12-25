import React from "react";
import Heading from "./components/Heading";
import CourseGroup from "./components/CourseGroup";

const App = () => {
  return (
    <div className=" m-10 p-10 border-2 border-gray-200">
      <Heading />
      <CourseGroup />
    </div>
  );
};

export default App;

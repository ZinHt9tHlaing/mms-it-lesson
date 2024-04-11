import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import LoaderRow from "./Loader/LoaderRow";
import { DataContext } from "../contexts/DataContext";
import EmptyRow from "./EmptyRow";

const RowGroup = () => {
  const { courses, setCourses } = useContext(DataContext);
  const [ready, setReady] = useState(false);

  const loaderRowCount = Array.from({ length: 4 }, (_, index) => index);
  // console.log(loaderRowCount);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5173/api/courses");
      const jsonData = await res.json();
      setCourses(jsonData);
      setReady(true);
    };
    
    fetchCourses();
  }, []);

  return (
    <>
      {!ready && loaderRowCount.map((el, index) => <LoaderRow key={index} />)}

      {ready &&
        (courses.length ? (
          courses.map((course) => <Row key={course.id} course={course} />)
        ) : (
          <EmptyRow />
        ))}
    </>
  );
};

export default RowGroup;

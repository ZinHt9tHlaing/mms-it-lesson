import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import LoaderRow from "./LoaderRow";
import EmptyRow from "./EmptyRow";
import { DataContext } from "../contexts/DataContext";

const RowGroup = () => {
  const { courses, setCourses } = useContext(DataContext);
  const [ready, setReady] = useState(false);

  const loaderRowCount = Array.from({ length: 5 }, (_, index) => index);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("http://localhost:5173/api/courses");
      const json = await res.json();
      setCourses(json);
      setReady(true);
    };

    fetchCourses();
  }, []);

  return (
    <>
      {!ready && loaderRowCount.map((el,index)=> <LoaderRow key={index} />)}

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

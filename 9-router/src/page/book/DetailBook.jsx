import React from "react";
import { useParams } from "react-router-dom";

const DetailBook = () => {
    const data = useParams();
    // console.log(data);
  return <div>DetailBook page id is {data.id} </div>;
};

export default DetailBook;

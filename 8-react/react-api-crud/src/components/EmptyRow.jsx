import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const EmptyRow = () => {
  const { toggleCreateDrawer } = useContext(DataContext);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        colSpan={5}
        scope="row"
        className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        There is no Courses.{" "}
        <button
          onClick={toggleCreateDrawer}
          className=" font-bold text-gray-700 underline active:scale-95 hover:text-gray-500 duration-200"
        >
          Create new one
        </button>
      </th>
    </tr>
  );
};

export default EmptyRow;

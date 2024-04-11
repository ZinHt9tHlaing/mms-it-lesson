import React from "react";

const LoaderRow = () => {

  return (
    <tr className="bg-white border-b animate-pulse dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-10" />
      </th>
      <td className="px-6 py-4 cell-editable row-title">
        <div className="flex items-center w-full max-w-[300px]">
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
        </div>
      </td>
      <td className="px-6 py-4 cell-editable row-short">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-20" />
      </td>
      <td className="px-6 py-4 cell-editable row-fee text-end">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40" />
      </td>
      <td className="px-6 py-4 text-right flex gap-1 justify-end">
        <div className="bg-gray-300 w-10 h-10 rounded-full dark:bg-gray-600" />
        <div className="bg-gray-300 w-10 h-10 rounded-full dark:bg-gray-600" />
      </td>
    </tr>
  );
};

export default LoaderRow;

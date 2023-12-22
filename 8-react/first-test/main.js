import React from "react";
import "./style.css";
import ReactDom from "react-dom/client";

const rootElement = document.querySelector("#root");

const root = ReactDom.createRoot(rootElement);

// const heading = React.createElement("h1", null, "Min Ga lar Par"); // react nodes

const App = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Foundation",
      studentCount: 5,
    },
    {
      id: 2,
      title: "Special Web Design",
      studentCount: 7,
    },
    {
      id: 3,
      title: "Web Application Dev",
      studentCount: 0,
    },
    {
      id: 4,
      title: "Basic UI Design",
      studentCount: 5,
    },
    {
      id: 5,
      title: "Premium UI Design",
      studentCount: 0,
    },
  ];

  return React.createElement(
    "div",
    {
      className: " p-10 m-10 border border-gray-500",
    },
    React.createElement(
      "h1",
      {
        className: " font-serif text-3xl font-bold text-blue-500 mb-5",
      },
      "Course Lists"
    ),
    React.createElement(
      "ul",
      null,
      courses
        .filter(({studentCount}) => studentCount > 0)
        .map(({ title, id, studentCount }) =>
          React.createElement(
            "li",
            {
              key: id,
              className: `font-mono ${
                studentCount === 0 ? "bg-red-100" : "bg-gray-100"
              } mb-3 p-2 border-s-4`,
            },
            title
          )
        )
    )
  );
};

root.render(App());

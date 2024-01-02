import React, { useState } from "react";
import CreateForm from "./components/CreateForm";
import Heading from "./components/Heading";
import Status from "./components/Status";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import Input from "./components/input";
import Checker from "./components/Checker";
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/AccordionGroup";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 2, job: "Finish coding assignment", isDone: true },
    { id: 5, job: "Read a book", isDone: true },
    { id: 6, job: "Exercise for 30 minutes", isDone: false },
    // Add more items as needed
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((el) => el.id !== id));
  };

  const doneTask = (id) => {
    setTasks(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="w-[400px] mx-auto mt-10">
      <Heading />
      <CreateForm addTask={addTask} />
      <Status tasks={tasks} />
      <ListGroup deleteTask={deleteTask} doneTask={doneTask} tasks={tasks} />
      {/* <Counter/> */}
      {/* <Input /> */}
      {/* <Checker /> */}
      {/* <AccordionGroup /> */}
    </div>
  );
};

export default App;

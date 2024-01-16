import React, { useContext } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import CourseTable from "./components/CourseTable";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";
import { DataContext } from "./contexts/DataContext";

const App = () => {
  const { editDrawer } = useContext(DataContext);

  return (
    <div>
      <Container>
        <Header />
        <CreateDrawer />
        <CourseTable />
        {editDrawer && <EditDrawer />}
      </Container>
    </div>
  );
};

export default App;

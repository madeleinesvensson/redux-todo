import React from "react";

import { Button } from "theme-ui";

const Navigation = ({ setTodoFilter }) => {
  return (
    <>
      <Button onClick={() => setTodoFilter("UNCOMPLETED")}>Todo</Button>
      <Button onClick={() => setTodoFilter("COMPLETED")}>Completed</Button>
      <Button onClick={() => setTodoFilter("ALL")}>All</Button>
    </>
  );
};

export default Navigation;

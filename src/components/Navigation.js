import React from "react";

import { Button } from "theme-ui";

const Navigation = ({ setTodoFilter }) => {
  return (
    <>
      <Button variant="underlined" onClick={() => setTodoFilter("UNCOMPLETED")}>
        Todo
      </Button>
      <Button variant="underlined" onClick={() => setTodoFilter("COMPLETED")}>
        Completed
      </Button>
      <Button variant="underlined" onClick={() => setTodoFilter("ALL")}>
        All
      </Button>
    </>
  );
};

export default Navigation;

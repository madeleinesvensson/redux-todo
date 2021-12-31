import React from "react";

import { Box, Button } from "theme-ui";

const Navigation = ({ setTodoFilter }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant="underlined" onClick={() => setTodoFilter("UNCOMPLETED")}>
        Todo
      </Button>
      <Button variant="underlined" onClick={() => setTodoFilter("COMPLETED")}>
        Completed
      </Button>
      <Button variant="underlined" onClick={() => setTodoFilter("ALL")}>
        All
      </Button>
    </Box>
  );
};

export default Navigation;

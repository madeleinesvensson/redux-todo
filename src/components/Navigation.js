import React from "react";

import { Box, Paragraph } from "theme-ui";

const Navigation = ({ setTodoFilter }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paragraph
        sx={{
          color: "black",
          margin: "10px",
          "&:active": {
            borderBottom: "1px solid black",
          },
        }}
        variant="underlined"
        onClick={() => setTodoFilter("UNCOMPLETED")}
      >
        Todo
      </Paragraph>
      <Paragraph
        sx={{
          color: "black",
          margin: "10px",

          "&:active": {
            borderBottom: "1px solid black",
          },
        }}
        variant="underlined"
        onClick={() => setTodoFilter("COMPLETED")}
      >
        Completed
      </Paragraph>
      <Paragraph
        sx={{
          color: "black",
          margin: "10px",
          "&:active": {
            borderBottom: "1px solid black",
          },
        }}
        variant="underlined"
        onClick={() => setTodoFilter("ALL")}
      >
        All
      </Paragraph>
    </Box>
  );
};

export default Navigation;

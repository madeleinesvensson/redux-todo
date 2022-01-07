import React from "react";

import { Box, NavLink } from "theme-ui";

const Navigation = ({ setTodoFilter }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <NavLink
        href="#!"
        sx={{
          color: "black",
          fontFamily: "Roboto",
          margin: "10px",
          fontSize: "20px",
          fontWeight: "500",
        }}
        onClick={() => setTodoFilter("UNCOMPLETED")}
      >
        Todo
      </NavLink>
      <NavLink
        href="#!"
        sx={{
          color: "black",
          margin: "10px",
          fontFamily: "Roboto",
          fontSize: "20px",
          fontWeight: "500",
        }}
        onClick={() => setTodoFilter("COMPLETED")}
      >
        Completed
      </NavLink>
      <NavLink
        href="#!"
        sx={{
          color: "black",
          margin: "10px",
          fontFamily: "Roboto",
          fontSize: "20px",
          fontWeight: "500",
        }}
        onClick={() => setTodoFilter("ALL")}
      >
        All
      </NavLink>
    </Box>
  );
};

export default Navigation;

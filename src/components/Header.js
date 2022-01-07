import React from "react";
import { connect } from "react-redux";
import { getCompletedTodos, getTodos } from "reducers/todo.reducer";
import { Box, Heading, Paragraph } from "theme-ui";

const Header = ({ todos, completedTodos }) => {
  return (
    <Box
      sx={{
        height: "150px",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        bg: "bg",
      }}
    >
      <div>
        <Heading
          sx={{ fontFamily: "Roboto", color: "primary", fontSize: "3em" }}
        >
          TASK
        </Heading>
        <Heading
          sx={{
            fontFamily: "Shadows Into Light",
            color: "secondary",
            fontSize: "2em",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          Manager
        </Heading>
      </div>
      <Paragraph
        sx={{ alignItems: "flex-end", display: "flex", fontFamily: "Roboto" }}
      >
        {completedTodos.length} / {todos.length} tasks completed
      </Paragraph>
    </Box>
  );
};

export default connect(
  (state) => ({
    todos: getTodos(state),
    completedTodos: getCompletedTodos(state),
  }),
  null
)(Header);

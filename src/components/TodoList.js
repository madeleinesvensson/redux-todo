import React, { useMemo } from "react";
import { connect } from "react-redux";
import {
  getCompletedTodos,
  getTodos,
  getUncompleteTodos,
} from "reducers/todo.reducer";
import CheckTodo from "./CheckTodo";
import DeleteTodo from "./DeleteTodo";
import { Box, Paragraph } from "theme-ui";

const TodoList = ({
  todos,
  completedTodos,
  uncompletedTodos,
  todoFilter,
  hasNoTodos,
  categoryInput,
}) => {
  const filteredTodos = useMemo(() => {
    switch (todoFilter) {
      case "COMPLETED":
        return completedTodos;
      case "UNCOMPLETED":
        return uncompletedTodos;
      case "ALL":
      default:
        return todos;
    }
  }, [todoFilter, todos]);

  const borderColorSwitcher = (category) => {
    switch (category) {
      case "Important":
        return "red";
      case "School":
        return "blue";
      case "Home":
        return "pink";
      case "Work":
        return "brown";
      case "Pay":
        return "green";
      case "Buy":
        return "yellow";
      default:
        return "black";
    }
  };
  return (
    <div>
      {hasNoTodos ? (
        <h1>No todos</h1>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {filteredTodos.map((todo, index) => (
            <Box
              key={todo.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: `3px solid ${borderColorSwitcher(todo.category)}`,
                borderRadius: "10px",
                margin: "10px",
                padding: "10px",
                height: "100px",
                boxShadow: `1px 1px 3px ${borderColorSwitcher(todo.category)}`,
              }}
            >
              <CheckTodo id={todo.id} complete={todo.isCompleted} />
              <Box sx={{ width: "70%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <Paragraph sx={{ paddingRight: "20px" }}>
                    {todo.time.format("ddd DD MMM, HH:mm")}
                  </Paragraph>
                  <Paragraph sx={{ textTransform: "uppercase" }}>
                    {todo.category}
                  </Paragraph>
                </Box>
                <Paragraph key={todo + index}>{todo.title}</Paragraph>
              </Box>
              <DeleteTodo id={todo.id} />
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};
export default connect(
  (state) => ({
    todos: getTodos(state),
    completedTodos: getCompletedTodos(state),
    uncompletedTodos: getUncompleteTodos(state),
    hasNoTodos: getTodos(state).length === 0,
  }),
  null
)(TodoList);

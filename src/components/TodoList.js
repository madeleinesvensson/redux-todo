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
        return "#EF6461";
      case "School":
        return "#F4D35E";
      case "Home":
        return "#C89F9C";
      case "Work":
        return "#70C1B3";
      case "Pay":
        return "#A799B7";
      case "Buy":
        return "#005E7C";
      default:
        return "black";
    }
  };
  return (
    <>
      {hasNoTodos ? (
        <h1>No todos</h1>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
                padding: "10px 30px",
                height: "100px",
                boxShadow: `1px 1px 3px ${borderColorSwitcher(todo.category)}`,
                maxWidth: "500px",
              }}
            >
              <Box
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Paragraph
                    sx={{ paddingRight: "20px", fontFamily: "Roboto" }}
                  >
                    {todo.time.format("ddd DD MMM, HH:mm")}
                  </Paragraph>
                  <Paragraph
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: "Shadows Into Light",
                    }}
                  >
                    {todo.category}
                  </Paragraph>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <CheckTodo id={todo.id} complete={todo.isCompleted} />
                  <Paragraph
                    key={todo + index}
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                      color: todo.isCompleted ? "gray" : "black",
                    }}
                  >
                    {todo.title}
                  </Paragraph>
                  <DeleteTodo id={todo.id} sx={{ alignSelf: "flex-end" }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
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

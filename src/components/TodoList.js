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
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <CheckTodo id={todo.id} complete={todo.isCompleted} />
              <div>
                <div>
                  <Paragraph sx={{}}>
                    {todo.time.format("ddd DD MMM, HH:mm")}
                  </Paragraph>
                  <p>{todo.category}</p>
                </div>
                <p key={todo + index}>{todo.title}</p>
              </div>
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

import React, { useMemo } from "react";
import { connect } from "react-redux";
import {
  getCompletedTodos,
  getTodos,
  getUncompleteTodos,
} from "reducers/todo.reducer";
import CheckTodo from "./CheckTodo";
import DeleteTodo from "./DeleteTodo";
import { Box } from "theme-ui";

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
            color: ["primary", "green", "purple"],
          }}
        >
          {filteredTodos.map((todo, index) => (
            <Box key={todo.id}>
              <CheckTodo id={todo.id} complete={todo.isCompleted} />
              <div>
                <p>{todo.time.format("ddd DD MMM, HH:mm")}</p>
                <p>{todo.category}</p>
              </div>
              <p key={todo + index}>{todo.title}</p>
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

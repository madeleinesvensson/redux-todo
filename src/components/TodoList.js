import React from "react";
import { connect } from "react-redux";
import { getTodos } from "reducers/todo.reducer";

const TodoList = ({ todos, hasNoTodos }) => {
  console.log(todos);

  return (
    <div>
      {hasNoTodos ? (
        <h1>No todos</h1>
      ) : (
        <div>
          {todos.map((todo, index) => (
            <p key={todo + index}>{todo.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default connect(
  (state) => ({
    todos: getTodos(state),
    hasNoTodos: getTodos(state).length === 0,
  }),
  null
)(TodoList);

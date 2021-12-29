import React from "react";
import { connect } from "react-redux";
import { getCompletedTodos, getTodos } from "reducers/todo.reducer";

const Header = ({ todos, completedTodos }) => {
  return (
    <>
      <h1>TASK</h1>
      <h1>Manager</h1>
      <p>
        {completedTodos.length} / {todos.length} tasks completed
      </p>
    </>
  );
};

export default connect(
  (state) => ({
    todos: getTodos(state),
    completedTodos: getCompletedTodos(state),
  }),
  null
)(Header);

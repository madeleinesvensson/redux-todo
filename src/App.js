import React from "react";
import { connect } from "react-redux";
import { getTodos } from "reducers/todo.reducer";

const App = ({ todos }) => {
  console.log(todos);
  return <div></div>;
};
export default connect(
  (state) => ({
    todos: getTodos(state),
  }),
  null
)(App);

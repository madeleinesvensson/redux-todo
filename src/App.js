import Form from "components/Form";
import TodoList from "components/TodoList";
import React from "react";
import { connect } from "react-redux";
import { getTodos } from "reducers/todo.reducer";
import { ThemeProvider } from "theme-ui";
import theme from "./themes/theme";

const App = ({ todos }) => {
  console.log(todos);
  return (
    <ThemeProvider theme={theme}>
      <h1 sx={{ color: "primary", fontFamily: "heading" }}>Hello</h1>
      <Form />
      <TodoList />
    </ThemeProvider>
  );
};
export default connect(
  (state) => ({
    todos: getTodos(state),
  }),
  null
)(App);

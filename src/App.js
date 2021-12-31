import { CheckAllButton } from "components/Buttons";
import { DeleteAllButton } from "components/Buttons";
import Form from "components/Form";
import TodoList from "components/TodoList";
import React, { useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./themes/theme";
import Header from "components/Header";
import Navigation from "components/Navigation";
import { DeleteCheckAllButton } from "components/DeleteCheckAllButton";
import { Footer } from "components/Footer";

const App = () => {
  const [todoFilter, setTodoFilter] = useState("ALL");

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Form />
      <Navigation setTodoFilter={setTodoFilter} />
      <TodoList todoFilter={todoFilter} />
      <DeleteCheckAllButton />
      <Footer />
    </ThemeProvider>
  );
};
export default App;

import { CheckAllButton } from "components/Buttons";
import { DeleteAllButton } from "components/Buttons";
import Form from "components/Form";
import TodoList from "components/TodoList";
import React, { useState } from "react";
import { Flex, ThemeProvider } from "theme-ui";
import theme from "./themes/theme";
import Header from "components/Header";
import Navigation from "components/Navigation";
import { DeleteCheckAllButton } from "components/DeleteCheckAllButton";
import { Footer } from "components/Footer";

const App = () => {
  const [todoFilter, setTodoFilter] = useState("ALL");

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{ flexDirection: "column", height: "100%", overflow: "hidden" }}
      >
        <Header />
        <Flex
          sx={{
            flexDirection: "column",
            flexGrow: 1,

            overflow: "auto",
          }}
        >
          <Form />
          <Navigation setTodoFilter={setTodoFilter} />
          <TodoList todoFilter={todoFilter} />
        </Flex>
        <DeleteCheckAllButton />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};
export default App;

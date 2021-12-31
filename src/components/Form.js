import React, { useState } from "react";
import { addTodo } from "actions/todo.actions";
import { connect } from "react-redux";
import { SubmitButton } from "./Buttons";
import dayjs from "dayjs";
import { Flex, Input, Select, Box } from "theme-ui";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const handleSubmit = (event) => {
    setInput("");
    setCategoryInput("");
    event.preventDefault();
  };
  return (
    <Box
      bg="primary"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "20px",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
      }}
      as="form"
      onSubmit={(event) => {
        addTodo({
          title: input,
          isCompleted: false,
          category: categoryInput,
          time: dayjs(),
        });
        setInput("");
        setCategoryInput("");
        event.preventDefault();
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Add a thing todo"
        />

        <Select
          value={categoryInput}
          onChange={(event) => setCategoryInput(event.target.value)}
        >
          <option hidden>Category</option>
          <option value="Important">Important</option>
          <option value="School">School</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Buy">Buy</option>
          <option value="Pay">Pay</option>
        </Select>
      </Box>
      <SubmitButton onClick={() => handleSubmit()} />
    </Box>
  );
};

export default connect((state) => ({}), { addTodo })(Form);

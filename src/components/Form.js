import React, { useState } from "react";
import { addTodo } from "actions/todo.actions";
import { connect } from "react-redux";
import { SubmitButton } from "./SubmitButton";
import dayjs from "dayjs";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const handleSubmit = (event) => {
    setInput("");
    setCategoryInput("");
    event.preventDefault();
  };
  return (
    <div>
      <form
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
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <select
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
        </select>
        <SubmitButton onClick={() => handleSubmit()} />
      </form>
    </div>
  );
};

export default connect((state) => ({}), { addTodo })(Form);

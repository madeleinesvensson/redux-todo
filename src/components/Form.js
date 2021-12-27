import React, { useState } from "react";
import { addTodo } from "actions/todo.actions";
import { connect } from "react-redux";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <form
        onSubmit={(event) => {
          addTodo({ title: input, isCompleted: false });
          setInput("");
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default connect((state) => ({}), { addTodo })(Form);

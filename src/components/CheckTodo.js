import React from "react";
import { connect } from "react-redux";
import { checkTodo } from "actions/todo.actions";
import { Checkbox, Label } from "theme-ui";

const CheckTodo = ({ id, checkTodo, complete }) => {
  return (
    <Label>
      <Checkbox
        key={id}
        checked={complete}
        onChange={() => {
          checkTodo(id);
        }}
      />
    </Label>
  );
};

export default connect(null, { checkTodo })(CheckTodo);

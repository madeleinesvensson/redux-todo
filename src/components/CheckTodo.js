import React from "react";
import { connect } from "react-redux";
import { checkTodo } from "actions/todo.actions";

const CheckTodo = ({ id, checkTodo, complete }) => {
  return (
    <div>
      <input
        key={id}
        type="checkbox"
        checked={complete}
        onChange={() => {
          checkTodo(id);
        }}
      />
    </div>
  );
};

export default connect(null, { checkTodo })(CheckTodo);

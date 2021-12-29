import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "actions/todo.actions";

const DeleteTodo = ({ id, deleteTodo }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteTodo(id);
        }}
      >
        Remove TODO
      </button>
    </div>
  );
};

export default connect(null, { deleteTodo })(DeleteTodo);

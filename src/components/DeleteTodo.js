import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTodo } from "actions/todo.actions";

const DeleteTodo = ({ id, deleteTodo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <a
        onClick={(e) => {
          e.preventDefault();
          deleteTodo(id);
        }}
      >
        Remove TODO
      </a>
    </div>
  );
};

export default connect(null, { deleteTodo })(DeleteTodo);

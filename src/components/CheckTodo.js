import React from "react";
import { connect, useDispatch } from "react-redux";
import { checkTodo } from "actions/todo.actions";

const CheckTodo = ({ id, checkTodo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <a
        onClick={(e) => {
          e.preventDefault();
          checkTodo(id);
        }}
      >
        check TODO
      </a>
    </div>
  );
};

export default connect(null, { checkTodo })(CheckTodo);

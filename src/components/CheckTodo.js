import React from "react";
import { connect, useDispatch } from "react-redux";
import { checkTodo } from "actions/todo.actions";

const CheckTodo = ({ id, checkTodo, complete }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        key={id}
        type="checkbox"
        checked={complete}
        onClick={() => {
          checkTodo(id);
        }}
      />
    </div>
  );
};

export default connect(null, { checkTodo })(CheckTodo);

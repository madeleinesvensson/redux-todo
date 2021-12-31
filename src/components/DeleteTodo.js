import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "actions/todo.actions";
import { Button, Image } from "theme-ui";
import trash from "../assets/trash.svg";

const DeleteTodo = ({ id, deleteTodo }) => {
  return (
    <div>
      <Button
        variant="delete"
        onClick={(e) => {
          e.preventDefault();
          deleteTodo(id);
        }}
      >
        <Image src={trash} />
      </Button>
    </div>
  );
};

export default connect(null, { deleteTodo })(DeleteTodo);

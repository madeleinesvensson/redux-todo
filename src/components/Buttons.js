import { deleteAllTodos } from "actions/todo.actions";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { Button } from "theme-ui";

export const SubmitButton = () => {
  return (
    <Button type="submit" variant="secondary">
      +
    </Button>
  );
};

export const DeleteAllButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      variant="primary"
      onClick={() => dispatch(deleteAllTodos())}
    >
      Delete all
    </Button>
  );
};

export const CheckAllButton = () => {
  return (
    <Button type="button" variant="primary">
      Complete all
    </Button>
  );
};

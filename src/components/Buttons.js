import { checkAllTodos, deleteAllTodos } from "actions/todo.actions";
import React from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  return (
    <Button
      type="button"
      variant="primary"
      onClick={() => dispatch(checkAllTodos())}
    >
      Complete all
    </Button>
  );
};

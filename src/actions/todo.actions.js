export const addTodo = (todo) => {
  return async (dispatch) => {
    dispatch({ type: "TODOS_ADD_TODO", payload: todo });
  };
};
export const deleteTodo = (id) => ({
  type: "TODOS_DELETE_TODO",
  payload: id,
});

export const editTodo = (todo) => ({
  type: "TODOS_EDIT_TODO",
  payload: todo,
});

export const deleteAllTodos = () => ({
  type: "TODOS_DELETE_ALL",
});
export const checkTodo = (id) => ({
  type: "TODOS_CHECK_TODO",
  payload: id,
});

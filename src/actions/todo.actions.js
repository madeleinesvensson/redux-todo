export const addTodo = (todo) => {
  return async (dispatch) => {
    dispatch({ type: "TODOS_ADD_TODO", payload: todo });
  };
};
export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: "TODOS_DELETE_TODO", payload: id });
  };
};

export const editTodo = (todo) => ({
  type: "TODOS_EDIT_TODO",
  payload: todo,
});

export const deleteAllTodos = (id) => {
  return async (dispatch) => {
    dispatch({ type: "TODOS_DELETE_ALL", payload: id });
  };
};

export const checkTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: "TODOS_CHECK_TODO", payload: id });
  };
};
export const checkAllTodos = (id) => {
  return async (dispatch) => {
    dispatch({ type: "TODOS_CHECK_ALL", payload: id });
  };
};

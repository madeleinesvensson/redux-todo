export const addTodo = (payload) => ({
  type: "TODOS_ADD_TODO",
  payload,
});

export const deleteTodo = (payload) => ({
  type: "TODOS_DELETE_TODO",
  payload,
});

export const editTodo = (payload) => ({
  type: "TODOS_EDIT_TODO",
  payload,
});

export const deleteAllTodos = (payload) => ({
  type: "TODOS_DELETE_ALL",
  payload,
});
export const checkTodo = (payload) => ({
  type: "TODOS_CHECK_TODO",
  payload,
});

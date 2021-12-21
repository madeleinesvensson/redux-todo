const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TODOS_ADD_TODO":
      return { ...state, todos: [payload, ...state.todos] };
    case "TODOS_DELETE_TODO":
      return { ...state, ...payload };
    case "TODOS_EDIT_TODO":
      return { ...state, ...payload };
    case "TODOS_DELETE_ALL":
      return initialState;
    case "TODOS_CHECK_TODO":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const getTodos = (state) => state.todosReducer.todos;

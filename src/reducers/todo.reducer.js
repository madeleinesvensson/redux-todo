import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TODOS_ADD_TODO":
      return {
        ...state,
        todos: [{ ...payload, id: uuidv4() }, ...state.todos],
      };
    case "TODOS_DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    case "TODOS_EDIT_TODO":
      return { ...state, ...payload };
    case "TODOS_DELETE_ALL":
      return initialState;

    case "TODOS_CHECK_ALL":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.isCompleted
            ? { ...todo }
            : { ...todo, isCompleted: !todo.isCompleted }
        ),
      };
    case "TODOS_CHECK_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    default:
      return state;
  }
};

export const getTodos = (state) => state.todosReducer.todos;
export const getCompletedTodos = (state) =>
  state.todosReducer.todos.filter((todo) => todo.isCompleted);
export const getUncompleteTodos = (state) =>
  state.todosReducer.todos.filter((todo) => todo.isCompleted === false);

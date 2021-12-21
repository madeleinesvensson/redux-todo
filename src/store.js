import { createStore, combineReducers, applyMiddleware } from "redux";
import { todosReducer } from "reducers/todo.reducer";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ todosReducer });

const middlewares = ReduxThunk;
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middlewares))
);

export default store;

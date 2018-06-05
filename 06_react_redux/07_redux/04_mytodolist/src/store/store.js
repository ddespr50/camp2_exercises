
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import todoReducer from "./reducer";

const store = createStore (
  todoReducer
)

export default store;

import {
  addTodo, addingTodo,
  toggleTodoState, togglingTodoState,
  deleteTodo,deletingTodo
} from "./actions";


export const updateTodoList =(dispatch) => {
  return{
  addOneTodo: (name) => dispatch(addOneTodo(name)),
  toggleTodoState: (todo) => dispatch(toggleTodoState(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
  }
}

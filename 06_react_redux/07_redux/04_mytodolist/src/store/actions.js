export const addTodo = (todo) =>
  ({type: "ADD_TODO",todo: todo});

export const addingTodo = () =>
  ({type: "ADDING_TODO"});

export const toggleTodoState = (todo) =>
  ({type: "TOGGLE_TODO_STATE",id: todo.id});

export const togglingTodoState = () =>
  ({type: "TOGGLING_TODO_STATE"});

export const deleteTodo = (todo) =>
  ({type: "DELETE_TODO",id: todo.id});

export const deletingTodo = () =>
  ({type: "DELETING_TODO"});

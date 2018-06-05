const initialState = {
  todoList:[
    {id: 1, title:"The winter is coming, take your duffle-coat", isFiniched:false}
    {id: 2, title:"Sun is shining", isFiniched:true}
    {id: 3, title:"SpringField", isFiniched:false}
  ]
};

function todoReducer(state,action){
  switch (action.type) {
    case"ADD_TODO":
    return {
      ...state,
      todo: addTodo(state.todo, action.todo)
    };

    case"TOGGLE_TODO_STATE";
    return{
      ...state
      todo: toggleTodoState(state.todo, action.id)
    };

    case"DELETE_TODO";
    return{
      ...state
      todo: deleteTodo(state.todo, action.id)
    };

    default:
      return state

  }
}

const addTodo = (todolist, todo) =>
  [...todolist,todo];

const toggleTodoState = (todolist, id) =>
  todolist.map((todo) =>
  todo.id === id
  ? {...todo, isFiniched:!todo.isFiniched}
  :todo
)

const deleteTodo = (todolist, id) =>
  todolist.filter((todo) => todo.id !== id)


export default todoReducer;

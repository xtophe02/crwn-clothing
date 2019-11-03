import uuid from "uuid/v4";

const reduder = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo);
    case "TOGGLE":
     
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed }: todo);
    default:
      return state
  }
};


export default reduder;

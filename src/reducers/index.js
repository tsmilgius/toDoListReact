import { RENDER_TODO_LIST, REMOVE_TODO_ITEM, ADD_TODO } from '../actions';

const initialState = {
  toDoList: []
};
function removeToDoItem(state, id) {
  const toDoList = state.get('toDoList');
  console.log(toDoList);
  return state.toDoList;
}

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(ADD_TODO);
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
    case REMOVE_TODO_ITEM:
      return {
        ...state.filter(id => id !== action.id)
      };
    default:
      return state;
  }
}

export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      id: new Date().getTime().toString(),
      title
    }
  };
}

export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST
  };
}

export function removeToDoItem(id) {
  console.log('action', id);
  return {
    type: REMOVE_TODO_ITEM,
    id
  };
}

import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST, REMOVE_TODO_ITEM } from '../actions';

export function* fetchToDoList() {
  const endpoint =
    'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export function* removeToDoItem(id) {
  console.log(id);
  yield put({ REMOVE_TODO_ITEM, id });
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}

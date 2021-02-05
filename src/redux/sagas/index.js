import { put, takeEvery, call, all } from "redux-saga/effects";
import * as actionTypes from "../../constants/actionTypes";
// also  try takeLatest

const delay = (ms, action) =>
  new Promise((res, rej) => {
    if (action.type === actionTypes.SEND_ERROR_ASYNC) {
      setTimeout(() => rej(new Error("Test Error")), 1000);
    }
    setTimeout(() => res(action.payload), ms);
  });

function* sendDataAsync(action) {
  try {
    const data = yield call(delay, 2000, action);
    yield put({ type: actionTypes.SEND_DATA, payload: data });
  } catch (error) {
    yield put({ type: actionTypes.SEND_ERROR, payload: error.message });
  }
}

function* watchSendDataAsync() {
  yield takeEvery(actionTypes.SEND_DATA_ASYNC, sendDataAsync);
}
function* watchSendErrorAsync() {
  yield takeEvery(actionTypes.SEND_ERROR_ASYNC, sendDataAsync);
}

export default function* rootSaga() {
  yield all([watchSendDataAsync(), watchSendErrorAsync()]);
}

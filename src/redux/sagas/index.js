import { put, takeEvery, call, all } from 'redux-saga/effects'
import * as CONST from '../constants/index';
// also  try takeLatest

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
    yield call(delay, 2000);
    yield put({ type: CONST.INCREMENT });
}

function* decrementAsync() {
    yield call(delay, 2000);
    yield put({ type: CONST.DECREMENT });
}

function* watchIncrementAsync() {
    yield takeEvery(CONST.INCREMENT_ASYNC, incrementAsync);
}

function* watchDecrementAsync() {
    yield takeEvery(CONST.DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSaga() {
    yield all([ 
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}
import getWeb3 from '../helpers/getWeb3'
import { takeEvery, takeLatest, take, select, fork, call, put, all } from 'redux-saga/effects'

import * as actionTypes from '../constants/actionTypes'
import { dmsgContract } from '../contracts'
import store from '../store'

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()
    console.log('action', action)
    console.log('state', state)
  }
}

export default function* rootSaga ()
{
    yield fork(watchAndLog)
}

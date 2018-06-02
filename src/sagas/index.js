import { takeEvery, takeLatest, take, select, fork, call, put, all } from 'redux-saga/effects'

import * as actionTypes from '../constants/actionTypes'
import store from '../store'

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    const state = yield select()
    console.log('action', action)
    console.log('state', state)
  }
}

function* fetchHistoryAsync (action)
{
    const { contractInstance, userAddress, friendAddress } = yield select()
    const messageIds = yield getMessages(contractInstance, userAddress, friendAddress)
    const getMessageWorkers = []
    for (var i=0; i<messageIds.length; i++) {
        if (messageIds[i] == 0) break;
        getMessageWorkers.push(call(getMessage, contractInstance, messageIds[i], userAddress))
    }

    const messages = yield all(getMessageWorkers)
    yield put({
        type: actionTypes.FETCH_HISTORY_SUCCESS,
        payload: messages.map(msg => {
            return {
            Id: msg[0],
            Who: msg[1],
            What: msg[3],
            When: msg[4]
        }}).sort(messageComparer)
    })
}

function* sendMessageAsync (action)
{
    const { contractInstance, userAddress, friendAddress } = yield select()

    // マイニング完了まで表示する仮メッセージ
    const dummyMsg = {
        Id: Math.floor(Math.random() * 100000000),
        Who: userAddress,
        What: action.payload,
        When: (new Date().valueOf()) / 1000
    }
    yield put({ type: actionTypes.ADD_MESSAGE, payload: dummyMsg })

    // 本メッセージを送信
    yield sendMessage(contractInstance, userAddress, friendAddress, action.payload)
}

const getMessage = (dmsgContractInstance, messageId, userAddress) => {
    // return dmsgContractInstance.methods.getMessage(messageId).call({from: userAddress})
    return null
}

const getMessages = (dmsgContractInstance, userAddress, friendAddress) => {
    // return dmsgContractInstance.methods.getMessages(friendAddress).call({from: userAddress})
    return null
}

const sendMessage = (dmsgContractInstance, userAddress, friendAddress, message) => {
    // return dmsgContractInstance.methods.sendMessage(friendAddress, message).send({from: userAddress})
    return null
}

const messageComparer = (m1, m2) => {
    if (m1.When > m2.When) {
        return 1;
    } else if (m1.When < m2.When) {
        return -1;
    } else {
        return 0;
    }
}

export default function* rootSaga ()
{
    yield takeLatest(actionTypes.FETCH_HISTORY_REQUESTED, fetchHistoryAsync)
    yield takeEvery(actionTypes.SEND_MESSAGE_REQUESTED, sendMessageAsync)
    yield fork(watchAndLog)
}

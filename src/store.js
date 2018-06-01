import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import rootSage from './sagas'

export const INITIAL_STATE = {
    userAddress: "0x0",
    friendAddress: "0x0",
    history: [],
}

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSage);

import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { generateContractsInitialState } from 'drizzle'

import reducer, { INITIAL_STATE } from './reducers'
import rootSage from './sagas'

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSage);

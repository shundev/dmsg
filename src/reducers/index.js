import { combineReducers } from 'redux'
import { drizzleReducers, generateContractsInitialState } from 'drizzle'

import * as actionTypes from '../constants/actionTypes';
import drizzleOptions from '../drizzleOptions'

export const INITIAL_STATE = {
    dmsg: {
        userAddress: "0x0",
        friendAddress: "0x0",
        history: [],
    },
    contracts: generateContractsInitialState(drizzleOptions)
}

const reducer = combineReducers({
  dmsg: dmsgReducer,
  ...drizzleReducers
})

function dmsgReducer(state = INITIAL_STATE, action = {})
{
    switch (action.type)
    {
        case actionTypes.ADD_MESSAGE:
            return Object.assign({}, state, {
                history: state.history.concat(action.payload)
            })
        case actionTypes.SET_USER_ADDRESS:
            return Object.assign({}, state, {
                userAddress: action.payload
            })
        case actionTypes.SET_FRIEND_ADDRESS:
            return Object.assign({}, state, {
                friendAddress: action.payload
            })
        case actionTypes.FETCH_WEB3_CONNECTION_SUCCESS:
            return Object.assign({}, state, {
                web3: action.web3,
                userAddress: action.userAddress,
                contractInstance: action.contractInstance
            })
        case actionTypes.FETCH_HISTORY_SUCCESS:
            return Object.assign({}, state, {
                history: action.payload
            })
        default:
            return state
    }
}

export default reducer

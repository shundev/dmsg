import { combineReducers } from 'redux'
import { fromJS } from 'immutable'

import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
    userAddress: "0x0",
    friendAddress: "0x0",
    history: [],
    web3: null,
    contractInstance: null,
}

export default function dmsgReducer(state = INITIAL_STATE, action = {})
{
    return state
}

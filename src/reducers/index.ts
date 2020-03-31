import { combineReducers } from 'redux';
import { counterReducer, counterState } from './counter';

export const rootState = {
    counter: {...counterState},
}

export const  rootReducer = combineReducers({
    counter: counterReducer, 
});
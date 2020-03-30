import { INCREMENT, DECREMENT } from '../constants/counter';
import { CounterActionsTypes, CounterState } from '../types/counter';

export const initialState: CounterState = {
    count: 0,
}

export const counterReducer = (state = initialState, action: CounterActionsTypes): CounterState => {
    switch(action.type) {
        case INCREMENT:
            return {count: state.count + action.payload.value}
        case DECREMENT:
            return {count: state.count - action.payload.value}
        default:
            return state;
    }
}
import { INCREMENT, DECREMENT } from '../constants/counter';
import { CounterActionsTypes, CounterState } from '../types/counter';

export const counterState: CounterState = {
    count: 0,
}

export const counterReducer = (state = counterState, action: CounterActionsTypes): CounterState => {
    switch(action.type) {
        case INCREMENT:
            return {count: state.count + action.payload.value}
        case DECREMENT:
            return {count: state.count - action.payload.value}
        default:
            return state;
    }
}
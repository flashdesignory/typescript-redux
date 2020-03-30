import { INCREMENT, DECREMENT } from '../constants/counter';
import { CounterActionsProp, CounterActionsTypes } from '../types/counter';

export const increment = (value : CounterActionsProp): CounterActionsTypes => ({
    type: INCREMENT,
    payload: {
        value,
    },
})

export const decrement = (value: CounterActionsProp): CounterActionsTypes => ({
    type: DECREMENT,
    payload: {
        value,
    },
})
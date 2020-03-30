import { INCREMENT, DECREMENT } from '../constants/counter';

export interface CounterActionsPayload {
    value: number,
}

export type CounterActionsProp = number;

export type CounterActionsIncrement = {
    type: typeof INCREMENT,
    payload: CounterActionsPayload,
}

export type CounterActionsDecrement = {
    type: typeof DECREMENT,
    payload: CounterActionsPayload,
}

export type CounterActionsTypes = CounterActionsIncrement | CounterActionsDecrement;

export type CounterState = {
    count: number,
}
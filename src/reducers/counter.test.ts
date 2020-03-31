import { INCREMENT, DECREMENT } from '../constants/counter';
import { counterReducer, counterState } from './counter';

describe('counter reducer', () => {
    it('should return initial state', () => {
        expect(counterReducer(undefined, {type: '', payload: { value: 0, }})).toEqual(counterState);
    });

    it('should handle INCREMENT', () => {
        const expectedState = {
           count: 1,
        };

        const incrementAction = {
            type: INCREMENT,
            payload: {
                value: 1,
            },
        };

        expect(counterReducer(undefined, incrementAction)).toEqual(expectedState);
    });

    it('should handle DECREMENT', () => {
        const expectedState = {
            count: -1,
        };

        const decrementAction = {
            type: DECREMENT,
            payload: {
                value: 1,
            },
        };

        expect(counterReducer(undefined, decrementAction)).toEqual(expectedState);
    })
});
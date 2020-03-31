import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../actions/counter';
import { RootState } from '../types';

type CounterProps = {
    initialCount?: number,
    amount?: number,
}

const Counter: FunctionComponent<CounterProps> = ({ initialCount = 0, amount = 1 }) => {
    const count = useSelector((state: RootState)  => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => dispatch(increment(amount));
    const handleDecrement = () => dispatch(decrement(amount));

    return (
        <div className="count">
            <div data-testid="count-display">{count}</div>
            <div className="buttons">
                <button data-testid="button-decrement" onClick={handleDecrement} >-</button>
                <button data-testid="button-increment" onClick={handleIncrement} >+</button>
            </div>
        </div>
    );
}

export default Counter;
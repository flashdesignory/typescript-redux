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
            <p>{count}</p>
            <div className="buttons">
                <button onClick={handleDecrement} >-</button>
                <button onClick={handleIncrement} >+</button>
            </div>
        </div>
    );
}

export default Counter;
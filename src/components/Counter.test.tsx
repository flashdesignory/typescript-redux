import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import { rootReducer, rootState } from '../reducers/';

import Counter from './Counter';

describe('Counter', () => {
  it('renders with default state', () => {
    const store = createStore(rootReducer, rootState);
    const { getByTestId } = render(
      <Provider store={store}><Counter /></Provider>
    );
    const countDisplay = getByTestId('count-display');
    expect(countDisplay).toHaveTextContent('0');
  });

  it('increments counter on click', () => {
    const store = createStore(rootReducer, rootState);
    const { getByTestId } = render(
      <Provider store={store}><Counter /></Provider>
    );
    const countDisplay = getByTestId('count-display');
    const button = getByTestId('button-increment');
    fireEvent.click(button);
    expect(countDisplay).toHaveTextContent('1');
  });

  it('decrements counter on click', () => {
    const store = createStore(rootReducer, rootState);
    const { getByTestId } = render(
      <Provider store={store}><Counter /></Provider>
    );
    const countDisplay = getByTestId('count-display');
    const button = getByTestId('button-decrement');
    fireEvent.click(button);
    expect(countDisplay).toHaveTextContent('-1');
  });
});
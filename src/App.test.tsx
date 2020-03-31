import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';

import { rootReducer, rootState } from './reducers';
import App from './App';

describe('App', () => {
  it('renders with default store', () => {
    const store = createStore(rootReducer, rootState);
    const { getByTestId } = render(
      <Provider store={store}><App /></Provider>
    );
    const countDisplay = getByTestId('count-display');
    expect(countDisplay).toHaveTextContent('0');
  });
  
  it('renders with mocked store', () => {
    const mockedState = {
      counter: {
        count: 1,
      }
    };
  
    const store = createStore(rootReducer, mockedState);
    const { getByTestId } = render(
      <Provider store={store}><App /></Provider>
    );
    const countDisplay = getByTestId('count-display');
    expect(countDisplay).toHaveTextContent('1');
  });
});

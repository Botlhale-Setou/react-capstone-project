import React from 'react';
import Renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import '@testing-library/jest-dom';
import Home from '../Pages/Home';

describe('Home test', () => {
  test('Home render', () => {
    const tree = Renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

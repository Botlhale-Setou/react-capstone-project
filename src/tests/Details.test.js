import React from 'react';
import Renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/ConfigureStore';
import '@testing-library/jest-dom';
import Details from '../Pages/Details';

describe('Details test', () => {
  test('Details render', () => {
    const tree = Renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

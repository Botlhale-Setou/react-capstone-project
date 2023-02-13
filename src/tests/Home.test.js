import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/ConfigureStore';
import { Provider } from 'react-redux';
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
import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/ConfigureStore';
import { Provider } from 'react-redux';
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
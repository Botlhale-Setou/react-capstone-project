import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../Components/Navbar';

describe('Test Navbar', () => {
  test('Navbar render', () => {
    const tree = Renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

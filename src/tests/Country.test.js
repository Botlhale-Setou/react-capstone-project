import React from "react";
import Renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/ConfigureStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Country from "../Components/Country";

describe("Country test", () => {
  test("Country render", () => {
    const tree = Renderer.create(
      <Provider store={store}>
        <Router>
          <Country />
        </Router>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

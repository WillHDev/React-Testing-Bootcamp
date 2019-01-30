import React from "react";

import { render, cleanup, fireEvent } from "react-testing-library";

import Counter from "./Counter";

afterEach(cleanup);

test("<Counter />", () => {
  //const wrapper = render(<Counter />);

  //gives us some insight into what wrapper is rendering
  // wrapper.debug();
  // expect(wrapper.getByTestId(/counter-button/i).tagName).toBe("BUTTON");
  // expect(wrapper.getByTestId(/counter-button/i).textContent.toBe('')
  // wrapper.getByText("0");
  //expect(wrapper.getByText("0").tagName).toBe("BUTTON");

  const { debug, getByTestId } = render(<Counter />);
  debug(); //outputs dom as a string
  const counterButton = getByTestId(/counter-button/i);

  expect(counterButton.tagName).toBe("BUTTON");
  expect(counterButton.textContent).toBe("0");

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe("1");
});

import React from "react";

import { render, cleanup, fireEvent } from "react-testing-library";

import MovieForm from "./MovieForm";

afterEach(cleanup);
//with user prop for example in name of test props
// test("<NewMovie />"),
//   () => {
//     const { debug, getByTestId } = render(<NewMovie />);
//     debug();
//   };

const onSubmit = jest.fn();
//() => console.log("hi");

test("<NewMovieTwo />", () => {
  const {
    debug,
    getByTestId,
    queryByTestId,
    getByLabelText,
    getByText,
    container
  } = render(<MovieForm submitForm={onSubmit} />);
  // const titleNode = getByTestId("page-title");
  const formNode = getByTestId("movie-form");
  // expect(titleNode.textContent).toBe("New Movie");
  debug();
  expect(formNode.textContent).toBeTruthy();
  const formInput = getByLabelText("Text");
  fireEvent.change(formInput, {
    target: { value: "hello" }
  });
  // formInput.value = "hello";
  fireEvent.click(getByText("Submit"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    text: "hello"
  });
});

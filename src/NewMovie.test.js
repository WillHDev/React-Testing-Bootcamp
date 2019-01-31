import React from "react";

import { render, cleanup, fireEvent } from "react-testing-library";

import NewMovie from "./NewMovie";

afterEach(cleanup);
//with user prop for example in name of test props
// test("<NewMovie />"),
//   () => {
//     const { debug, getByTestId } = render(<NewMovie />);
//     debug();
//   };

test("<NewMovieTwo />", () => {
  const { debug, getByTestId, queryByTestId, getByText, container } = render(
    <NewMovie />
  );
  const titleNode = getByTestId("page-title");
  const formNode = getByTestId("movie-form");
  expect(titleNode.textContent).toBe("New Movie");
  debug();
  expect(formNode.textContent).toBeTruthy();
  //console.log(container.firstChild);
  expect(container.firstChild).toMatchSnapshot();
});

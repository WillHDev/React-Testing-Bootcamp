import React from "react";

import { render, cleanup, fireEvent } from "react-testing-library";

import Movie, { POSTER_PATH } from "./Movie";
import { MemoryRouter } from "react-router-dom";
afterEach(() => {
  cleanup(), console.error.mockClear();
});
//with user prop for example in name of test props
// test("<NewMovie />"),
//   () => {
//     const { debug, getByTestId } = render(<NewMovie />);
//     debug();
//   };

//const onSubmit = jest.fn();
//() => console.log("hi");
console.error = jest.fn();
test("<Movie />", () => {
  //   const {
  //     debug,
  //     getByTestId,
  //     queryByTestId,
  //     getByLabelText,
  //     getByText,
  //     container
  //   } = render(<Movie />);
  //expect(console.error).toHaveBeenCalled();
  //
  // const titleNode = getByTestId("page-title");
  //   const formNode = getByTestId("movie-form");
  //   // expect(titleNode.textContent).toBe("New Movie");
  //   debug();
  //   expect(formNode.textContent).toBeTruthy();
  //   const formInput = getByLabelText("Text");
  //   fireEvent.change(formInput, {
  //     target: { value: "hello" }
  //   });
  //   // formInput.value = "hello";
  //   fireEvent.click(getByText("Submit"));
  //   expect(onSubmit).toHaveBeenCalledTimes(1);
  //   expect(onSubmit).toHaveBeenCalledWith({
  //     text: "hello"
  //   });
});

const movie = {
  id: "hi",
  title: "Level Up",
  poster_path: "asdfsdf.jpg"
};

test("<Movie /> with movie", () => {
  const {
    debug,
    getByTestId,
    queryByTestId,
    getByLabelText,
    getByText,
    container
  } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );
  expect(console.error).not.toHaveBeenCalled();
  //the relative path of the href NOT the absolute - variable rendering is the reason
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-image").src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );

  debug();
});

//tested that the image is what its supposed to be and
//that the link goes where it needs to go
//this component is now fully tested

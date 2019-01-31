import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MovieDetail from "./MovieDetail";

//for entire test sweet assigns fetch to ...
global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  //console.error.mockClear();
});

// console.error = jest.fn();

const match = {
  params: {
    id: "aldsjjds:k"
  }
};

const movie = {
  id: "hi",
  title: "Level Up",
  poster_path: "asdfsdf.jpg"
};

test("<MovieDetail />", async () => {
  //render(<Movie />);
  //stringify({ title: ..., id: ...})
  fetch.mockResponseOnce(JSON.stringify(movie));
  const { debug, getByTestId, getByText } = render(
    <MovieDetail match={match} />
  );
  await waitForElement(() => getByTestId("movie-title"));
  //expect(console.error).toHaveBeenCalled();
  expect(getByTestId("movie-title").textContent).toBe(movie.title);
  debug();
});

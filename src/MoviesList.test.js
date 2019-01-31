import React from "react";
import { render, cleanup, waitForElement } from "react-testing-library";
import { MemoryRouter } from "react-router-dom";
import MoviesList from "./MoviesList";

//for entire test sweet assigns fetch to ...
global.fetch = require("jest-fetch-mock");

afterEach(() => {
  cleanup();
  //console.error.mockClear();
});

// console.error = jest.fn();

const movies = {
  results: [{ id: "hi", title: "Level Up", poster_path: "asdfsdf.jpg" }]
};
const movie = movies.results[0];
test("<MoviesList />", async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  // fetch.mockResponseOnce(JSON.stringify(movie));
  const { debug, getByTestId, getByText, getAllByTestId } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );

  expect(getByTestId("loading")).toBeTruthy();
  await waitForElement(() => getByTestId("movie-link"));
  // //expect(console.error).toHaveBeenCalled();
  // expect(getByTestId("movie-title").textContent).toBe(movie.title);
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("loading").toBeFalsy());
  //  const movie = movies.results[0];
  getByAllTestId("movie-link").length.toBe(movies.results.length);
  debug();
});

//1. check loading state
//2. wait to see if movie shows up with our fake data
//3. once it shows up, loading gone
//make sure movie link has correct path so renders correctly
//make sure whats displayed is wha we're expecting to see

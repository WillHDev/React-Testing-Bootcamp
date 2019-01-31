import React from "react";
import { render, cleanup } from "react-testing-library";
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

test("<MovieDetail />", () => {
  //render(<Movie />);
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: "hi",
        title: "Level Up"
      }
    })
  );
  const { debug, getByTestId } = render(<MovieDetail match={match} />);
  //expect(console.error).toHaveBeenCalled();
  debug();
});

import React from "react";
import ReactDOM from "react-dom";
//import App from "./App";
import { total } from "./App";
import App from "./App";
import { add } from "./Add";
//setting up a mock spy to an internal dependency
jest.mock("./Add", () => ({
  //the thing inside, the module add
  add: jest.fn(() => 3)
}));

test("total", () => {
  expect(total(1, 2)).toBe("$3");
  //total(1, 2);
  expect(add).toHaveBeenCalledTimes(1);

  add.mockImplementation(() => 30);
  expect(total(1, 29)).toBe("$30");
});

//const add = jest.fn(() => 3);
test("renders without crashing", () => {
  //const div = document.createElement('div')
  expect(true).toBeTruthy();
});

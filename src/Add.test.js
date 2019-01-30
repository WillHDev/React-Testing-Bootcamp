import { add } from "./Add";

test("renders without crashing", () => {
  expect(true).toBeTruthy();
});

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

import { add } from "./math";
import { multiply } from "./math";

test("1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("2 * 3 = 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

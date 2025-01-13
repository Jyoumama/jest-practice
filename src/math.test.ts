import { add, multiply } from "./math";

describe("add", () => {
  test("0 + 0 = 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("1 + 2 = 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("multiply", () => {
  test("0 * 0 = 0", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  test("2 * 3 = 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

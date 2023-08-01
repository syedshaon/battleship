import { capitalize } from "./sum";

test("capitalize first letter", () => {
  expect(capitalize("aabbcc")).toBe("Aabbcc");
});

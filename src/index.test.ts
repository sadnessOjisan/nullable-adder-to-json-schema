import { addNullable } from "./index";
import simple from "../fixture/simple.json";

describe("addNullable", () => {
  test("simple", () => {
    console.log(simple);
    // @ts-expect-error
    const actual = addNullable(simple);
    expect(actual).toEqual(simple);
  });
});

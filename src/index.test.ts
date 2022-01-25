import { addNullable } from "./index";
import simple from "../fixture/simple.json";
import anyof from "../fixture/anyof.json";
import anyofOptional from "../fixture/anyof-optional.json";
import anyofOptionalResult from "../fixture/anyof-optional-result.json";

describe("addNullable", () => {
  test("simple", () => {
    // @ts-expect-error
    const actual = addNullable(simple);
    expect(actual).toEqual(simple);
  });
  test("anyof", () => {
    // @ts-expect-error
    const actual = addNullable(anyof);
    expect(actual).toEqual(anyof);
  });
  test("anyof optional", () => {
    // @ts-expect-error
    const actual = addNullable(anyofOptional);
    expect(actual).toEqual(anyofOptionalResult);
  });
});

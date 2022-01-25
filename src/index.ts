import { JSONSchema7, JSONSchema7Definition } from "json-schema";

const addNullable = (input: JSONSchema7 | JSONSchema7Definition) => {
  if (typeof input === "boolean") return;
  const copy = { ...input };
  if (copy.type !== "object") return;

  const reqKeys = copy.required;

  const prop = copy.properties;

  if (prop === undefined) return;

  Object.entries(prop).forEach((els) => {
    const key = els[0];
    const item = prop[key];
    if (typeof item === "boolean") return;
    if (reqKeys === undefined) {
      // @ts-ignore nullable is only for ajv
      item["nullable"] = true;
      return;
    }
    if (!reqKeys.includes(key)) {
      // @ts-ignore nullable is only for ajv
      item["nullable"] = true;
    }

    if (item["type"] === "object") {
      addNullable(item);
    }

    const items = item["items"];
    if (item["type"] === "array") {
      if (items === undefined || Array.isArray(items)) return;
      addNullable(items);
    }
  });
  return copy;
};

export { addNullable };

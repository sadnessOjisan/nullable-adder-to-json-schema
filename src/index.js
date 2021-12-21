const addNullable = (input) => {
  const copy = { ...input };

  if (copy.type !== "object") return;

  const reqKeys = copy.required;

  Object.entries(copy.properties).forEach((els) => {
    const key = els[0];
    if (reqKeys === undefined) {
      copy.properties[key]["nullable"] = true;
      return;
    }
    if (!reqKeys.includes(key)) {
      copy.properties[key]["nullable"] = true;
    }

    if (copy.properties[key]["type"] === "object") {
      addNullable(copy.properties[key]);
    }

    if (copy.properties[key]["type"] === "array") {
      addNullable(copy.properties[key]["items"]);
    }
  });
  return copy;
};

module.exports = addNullable;

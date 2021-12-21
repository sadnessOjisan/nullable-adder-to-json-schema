const fs = require("fs");
const addNullable = require("../src/index");

const path = process.argv[2];

const jsonSchemaString = fs.readFileSync(path, { encoding: "utf-8" });
const jsonSchema = JSON.parse(jsonSchemaString);

const converted = addNullable(jsonSchema);

console.log(JSON.stringify(converted));

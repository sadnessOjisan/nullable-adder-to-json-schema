const fs = require("fs");
const addNullable = require("../src/index").addNullable;

const path = process.argv[2];

const jsonSchema = fs.readFileSync(path, { encoding: "utf-8" });

const converted = addNullable(jsonSchema);

console.log(JSON.stringify(converted));

const fs = require("fs");
const [input, target] = fs.readFileSync(0).toString().trim().split("\n");

console.log(input.indexOf(target));
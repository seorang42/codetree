const fs = require("fs");
const [target, value] = fs.readFileSync(0).toString().trim().split("\n");

console.log(target.indexOf(value));
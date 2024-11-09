const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n");

console.log([a, b].join(" "));
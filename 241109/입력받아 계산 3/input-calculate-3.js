const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n");

const result = Number(a) * Number(b);
console.log(result);
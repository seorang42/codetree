const fs = require("fs");
const [c, a, b] = fs.readFileSync(0).toString().split("\n");

console.log(c);
console.log(Number(a).toFixed(2));
console.log(Number(b).toFixed(2));
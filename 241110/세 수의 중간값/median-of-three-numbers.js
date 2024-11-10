const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

console.log(b > a && b < c ? 1 : 0);
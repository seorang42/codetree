const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

console.log(a + 87);
console.log(b % 10);
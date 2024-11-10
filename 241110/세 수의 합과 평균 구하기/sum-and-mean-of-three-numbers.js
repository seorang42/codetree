const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

console.log(a + b + c);
console.log(Math.floor((a + b + c) / 3));
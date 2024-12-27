const fs = require("fs");
const [a, b, c, d] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const start = a * 60 + b;
const end = c * 60 + d;

console.log(end - start);
const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = ((a + b) / (a - b)).toFixed(2);
console.log(result);
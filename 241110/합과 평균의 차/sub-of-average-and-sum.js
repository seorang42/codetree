const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const sum = a + b + c;
const average = (a + b + c) / 3;

console.log(sum);
console.log(average);
console.log(sum - average);
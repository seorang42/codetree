const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const array = [a >= b, a > b, b >= a, b > a];

console.log(array.forEach(el => console.log(el ? 1 : 0)));
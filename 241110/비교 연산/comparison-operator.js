const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const array = [a >= b, a > b, b >= a, b > a, a === b, a !== b];
const printResult = (boolean) => console.log(boolean ? 1 : 0);

array.forEach(el => printResult(el));
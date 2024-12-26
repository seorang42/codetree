const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, k] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el)).sort();

console.log(arr[k - 1]);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [arr1, arr2] = [input[1].split(" ").map(el => Number(el)).sort((a, b) => a - b), input[2].split(" ").map(el => Number(el)).sort((a, b) => a - b)];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2) ? "Yes" : "No");
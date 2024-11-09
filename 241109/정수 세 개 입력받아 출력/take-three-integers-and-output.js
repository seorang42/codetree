const fs = require("fs");
const [nums, c] = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = nums.split(" ");

console.log([a, b, c].join(" "));
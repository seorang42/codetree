const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n")[1].split(" ").map(el => Number(el));

console.log(arr.sort((a, b) => a - b).join(" "));
console.log(arr.sort((a, b) => b - a).join(" "));
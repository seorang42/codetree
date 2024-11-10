const fs = require("fs");
const [right, left] = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

console.log(right >= 1 && left >= 1 ? "High" : right >= 0.5 && left >= 0.5 ? "Middle" : "Low");
const fs = require("fs");
const answer = fs.readFileSync(0).toString().trim().split("\n")[1].split(" ").map(el => Math.abs(Number(el)));

console.log(answer.join(" "));
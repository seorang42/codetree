const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const answer = input.slice(1).sort();

console.log(answer.join("\n"));
const fs = require("fs");
const answer = fs.readFileSync(0).toString().trim().split(" ").reverse().join("\n");

console.log(answer);
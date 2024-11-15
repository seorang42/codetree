const fs = require("fs");
const answer = fs.readFileSync(0).toString().trim().split(" ").map(el => String.fromCharCode(Number(el))).join(" ");

console.log(answer);
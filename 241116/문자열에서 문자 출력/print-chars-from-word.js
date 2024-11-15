const fs = require("fs");
const answer = fs.readFileSync(0).toString().trim().split("").join("\n");
console.log(answer);
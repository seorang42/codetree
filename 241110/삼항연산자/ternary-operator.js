const fs = require("fs");
const score = Number(fs.readFileSync(0).toString().trim());

console.log(score === 100 ? "pass" : "failure");
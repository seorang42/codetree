const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const answer = parseInt(input, 2);
console.log(answer);
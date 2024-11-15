const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const index = input.indexOf("e");
const answer = input.slice(0, index) + input.slice(index + 1);
console.log(answer);
const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();

const answer = str.slice(1) + str[0];
console.log(answer);
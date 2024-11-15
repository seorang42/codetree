const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const str1 = input.slice(0, 1) + input.slice(2);
const str2 = str1.slice(0, str1.length - 2) + str1[str1.length - 1];

console.log(str2);
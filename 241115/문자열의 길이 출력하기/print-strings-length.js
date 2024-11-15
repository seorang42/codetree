const fs = require("fs");
const [str1, str2] = fs.readFileSync(0).toString().trim().split("\n");

console.log(str1.length + str2.length);
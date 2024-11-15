const fs = require("fs");
const [str1, str2] = fs.readFileSync(0).toString().trim().split(" ");

const newStr = str1.slice(0, 2) + str2.slice(2);
console.log(newStr);
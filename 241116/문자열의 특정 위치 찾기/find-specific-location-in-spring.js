const fs = require("fs");
const [str, target] = fs.readFileSync(0).toString().trim().split(" ");

console.log(str.indexOf(target) !== -1 ? str.indexOf(target) : "No");
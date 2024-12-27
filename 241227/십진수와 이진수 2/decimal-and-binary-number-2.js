const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const newNumber = parseInt(N, 2) * 17;
console.log(newNumber.toString(2));
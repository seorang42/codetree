const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());

const result = (a % 2 !== 0 || a % 3 === 0) || (a % 2 === 0 || a % 5 === 0);
console.log(result);
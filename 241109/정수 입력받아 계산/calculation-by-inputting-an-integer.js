const fs = require("fs");
const a = Number(fs.readFileSync(0).toString());

console.log(a * 2 + 3);
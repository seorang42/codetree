const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());

console.log(a < 10 || a > 20 ? "yes" : "no");
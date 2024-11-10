const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

console.log(n >= 3000 ? "book" : n >= 1000 ? "mask" : "no");
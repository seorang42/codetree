const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

console.log(n >= 90 ? "A" : n >= 80 ? "B" : n >= 70 ? "C" : n >= 60 ? "D" : "F");
const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());

console.log(a % 3 === 0 ? "YES" : "NO");
console.log(a % 5 === 0 ? "YES" : "NO");
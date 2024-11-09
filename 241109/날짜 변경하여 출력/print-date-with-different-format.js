const fs = require("fs");
const [y, m, d] = fs.readFileSync(0).toString().trim().split(".");

console.log(`${m}-${d}-${y}`)
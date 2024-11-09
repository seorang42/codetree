const fs = require("fs");
const [m, d, y] = fs.readFileSync(0).toString().trim().split("-");

console.log(`${y}.${m}.${y}`);
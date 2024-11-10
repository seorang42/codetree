const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().map(el => Number(el));

console.log(`${Math.min(a, b, c) === a} ${a === b && b === c}`);
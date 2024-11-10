const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

console.log(`${a < b ? "1" : "0"} ${a === b ? "1" : "0"}`);
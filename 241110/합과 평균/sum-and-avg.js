const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

console.log([a + b, ((a + b) / 2).toFixed(1)].join(" "));
const fs = require("fs");
const [h, m] = fs.readFileSync(0).toString().trim().split(":").map(el => Number(el));

console.log(`${h + 1}:${m}`);
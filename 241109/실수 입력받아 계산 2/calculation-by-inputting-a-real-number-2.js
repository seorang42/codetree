const fs = require("fs");
const a = Number(fs.readFileSync(0).toString());

console.log((a + 1.5).toFixed(2));
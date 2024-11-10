const fs = require("fs");
const a = Number(fs.readFileSync(0).toString().trim());

console.log(a >= 1.0 ? "High" : a >= 0.5 ? "Middle" : "Low");
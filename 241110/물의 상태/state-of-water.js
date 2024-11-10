const fs = require("fs");
const temperature = Number(fs.readFileSync(0).toString().trim());

console.log(temperature >= 100 ? "vapor" : temperature < 0 ? "ice" : "water");
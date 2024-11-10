const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

console.log(`${Math.floor(a / b)}...${a % b}`);
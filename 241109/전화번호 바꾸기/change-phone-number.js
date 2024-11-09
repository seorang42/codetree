const fs = require("fs");
const [_, x, y] = fs.readFileSync(0).toString().trim().split("-");

console.log(`010-${x}-${y}`);
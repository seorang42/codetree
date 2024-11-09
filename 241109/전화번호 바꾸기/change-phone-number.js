const fs = require("fs");
const [x, y] = fs.readFileSync(0).toString().trim().split("-");

console.log(`010-${y}-${x}`);
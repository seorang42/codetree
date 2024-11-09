const fs = require("fs");
const [front, back] = fs.readFileSync(0).toString().trim().split("-");

console.log(front + back);
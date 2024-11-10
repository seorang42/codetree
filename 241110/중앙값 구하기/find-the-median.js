const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const mid = [a, b, c].sort((a, b) => a - b)[1];
console.log(mid);
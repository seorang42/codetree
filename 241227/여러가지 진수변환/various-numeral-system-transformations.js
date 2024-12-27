const fs = require("fs");
const [N, B] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

console.log(N.toString(B));
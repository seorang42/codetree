const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const [newA, newB] = [a + b, b + a + b];
console.log([newA, newB].join(" "));
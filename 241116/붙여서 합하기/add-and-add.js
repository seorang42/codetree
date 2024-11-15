const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

const [newA, newB] = [Number(a + b), Number(b + a)];
console.log(newA + newB);
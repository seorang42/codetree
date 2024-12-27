const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(el => Number(el));
const num = Number(input[1]);

const answer = parseInt(num, a).toString(b);
console.log(answer);
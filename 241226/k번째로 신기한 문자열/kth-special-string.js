const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k, T] = input[0].split(" ");
const arr = input.slice(1);

const answer = arr.filter(el => el.startsWith(T)).sort();
console.log(answer[Number(k) - 1]);
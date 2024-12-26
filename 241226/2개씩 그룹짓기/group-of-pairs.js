const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el)).sort((a, b) => a - b);

const answer = [];
for (let i = 0; i <= n - 1; i++) {
    answer.push(arr[i] + arr[2 * n - i - 1])
}

console.log(answer.sort((a, b) => b - a)[0]);
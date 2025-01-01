const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
for (let i = 0; i <= n - k; i++) {
    const sum = arr[i] + arr[i + 1] + arr[i + 2];
    if (sum > answer) answer = sum;
}

console.log(answer);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
for (let i = 0; i <= n - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
        sum += arr[j];
    }
    if (sum > answer) answer = sum;
}

console.log(answer);
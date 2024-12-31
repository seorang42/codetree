const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

let answer = Infinity;
for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
        if (i === j) {
            continue;
        }
        sum += Math.abs(i - j) * arr[j];
    }
    if (sum < answer) {
        answer = sum;
    }
}

console.log(answer);
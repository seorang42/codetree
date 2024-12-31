const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
for (let i = 0; i < n - 2; i++) {
    for (let j = i + 2; j < n; j++) {
        const sum = arr[i] + arr[j];
        if (sum > answer) {
            answer = sum;
        }
    }
}

console.log(answer);
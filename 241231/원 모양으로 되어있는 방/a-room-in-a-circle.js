const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));
const N = input[0];
const arr = input.slice(1);

let answer = Infinity;
for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
        const start = i;
        const distance = arr[(start + j) % N] * j;
        sum += distance;
    }
    if (sum < answer) {
        answer = sum;
    }
}

console.log(answer);
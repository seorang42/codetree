const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = Infinity;
for (let i = 1; i < N - 1; i++) {
    let sum = 0;
    let index = 0;
    for (let j = 1; j < N; j++) {
        if (j === i) continue;
        const distance = Math.abs(arr[index][0] - arr[j][0]) + Math.abs(arr[index][1] - arr[j][1]);
        index = j;
        sum += distance;
    }
    if (sum < answer) {
        answer = sum;
    }
}

console.log(answer);
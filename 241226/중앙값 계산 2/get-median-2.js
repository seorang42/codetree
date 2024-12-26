const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

const progress = [];
const answer = [];
for (let i = 0; i < n; i++) {
    progress.push(arr[i]);
    if (i % 2 === 0) {
        answer.push(progress.sort((a, b) => a - b)[i / 2]);
    }
}

console.log(answer.join(" "));
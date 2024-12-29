const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => Number(el));

let count = 0;
let answer = 0;
for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[i - 1] || i === 0) {
        count++;
    } else {
        if (count > answer) {
            answer = count;
        }
    }
    if (i === n - 1 && count > answer) answer = count;
}

console.log(answer);
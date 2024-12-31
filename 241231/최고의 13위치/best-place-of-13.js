const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
        let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
        if (sum > answer) {
            answer = sum;
        }
    }
}

console.log(answer);
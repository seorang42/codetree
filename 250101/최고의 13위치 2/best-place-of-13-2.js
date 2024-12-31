const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 0; i < N - 1; i++) {
    for (let k = 0; k < N - 2; k++) {
        for (let j = i + 1; j < N; j++) {
            for (let l = 0; l < N - 2; l++) {
                const sum = arr[i][k] + arr[i][k + 1] + arr[i][k + 2] + arr[j][k] + arr[j][k + 1] + arr[j][k + 2];
                if (sum > answer) {
                    answer = sum;
                }
            }
        }
    }
}

console.log(answer);
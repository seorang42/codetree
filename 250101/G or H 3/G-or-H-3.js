const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ")).sort((a, b) => a[0] - b[0]);
const last = Number(arr[arr.length - 1][0]);

let answer = 0;
for (let i = 0; i < last - K; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
        if (Number(arr[j][0]) >= i + 1 && Number(arr[j][0]) <= i + K + 1) {
            sum += arr[j][1] === "G" ? 1 : 2;
        }
    }
    if (sum > answer) answer = sum;
}

console.log(answer);
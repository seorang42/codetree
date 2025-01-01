const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ")).sort((a, b) => a[0] - b[0]);
const [first, last] = [Number(arr[0][0]), Number(arr[arr.length - 1][0])];

let answer = 0;
for (let i = first; i <= last - K + 1; i++) {
    const [start, end] = [i, i + K];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i][0]) < start) {
            continue;
        }
        if (Number(arr[i][0]) > end) {
            break;
        }
        sum += arr[i][1] === "G" ? 1 : 2;
    }
    if (sum > answer) {
        answer = sum;
    }
}

console.log(answer);
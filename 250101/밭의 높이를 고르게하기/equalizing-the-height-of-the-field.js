const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, H, T] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el));

let answer = Infinity;
for (let i = 0; i <= N - T; i++) {
    let sum = 0;
    for (let j = i; j < i + 3; j++) {
        sum += Math.abs(H - arr[j]);
    }
    if (sum < answer) {
        answer = sum;
    }
}

console.log(answer);
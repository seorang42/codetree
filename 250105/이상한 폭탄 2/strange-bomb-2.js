const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const [N, K] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => Number(el));

let answer = -1;
for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
        if (j - i > K) break;
        if (arr[i] === arr[j] && arr[i] > answer) {
            answer = arr[i];
        }
    }
}

console.log(answer);
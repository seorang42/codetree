const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M, K] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => Number(el));

const stuArr = Array(N).fill(0);
let answer = -1;
for (let i = 0; i < M; i++) {
    stuArr[arr[i - 1]]++;
    if (stuArr[arr[i - 1]] === K) {
        answer = arr[i - 1];
        break;
    }
}

console.log(answer);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(el => Number(el));
const A = input[1].split(" ").map(el => Number(el));
const B = input[2].split(" ").map(el => Number(el)).sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i <= N - M; i++) {
    const arr = [];
    for (let j = i; j < i + M; j++) {
        arr.push(A[j]);
    }
    const sortedArr = [...arr].sort((a, b) => a - b);
    if (JSON.stringify(sortedArr) === JSON.stringify(B)) {
        answer++;
    }
}

console.log(answer);
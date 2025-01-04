const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));
const OFFSET = 1000000;

let answer = 0;
for (let i = 0; i < N; i++) {
    const [start, end] = arr[i].map(el => el + OFFSET);
    let flag = false;
    for (let j = 0; j < N; j++) {
        if (i === j) {
            continue;
        }
        const [x1, x2] = arr[j].map(el => el + OFFSET);
        if (x1 > start && x2 < end || start > x1 && end < x2) {
            flag = true;
        }
    }
    if (!flag) answer++;
}

console.log(answer);
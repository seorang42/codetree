const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [K, N] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        if (i === j) continue;
        let flag = true;
        for (let k = 0; k < K; k++) {
            const [iIndex, jIndex] = [arr[k].indexOf(i), arr[k].indexOf(j)];
            if (iIndex > jIndex) {
                flag = false;
                break;
            }
        }
        if (flag) answer++;
    }
}

console.log(answer);
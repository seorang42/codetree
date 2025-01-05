const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

let answer = Infinity;
for (let i = 0; i < n; i++) {
    const newArr = [...arr];
    newArr[i] *= 2;
    for (let j = 0; j < n; j++) {
        const remain = [];
        for (let k = 0; k < n; k++) {
            if (j !== k) {
                remain.push(newArr[k]);
            }
        }

        let diff = 0;
        for (let k = 0; k < n - 2; k++) {
            diff += Math.abs(remain[k] - remain[k + 1]);
        }
        if (diff < answer) {
            answer = diff;
        }
    }
}

console.log(answer);
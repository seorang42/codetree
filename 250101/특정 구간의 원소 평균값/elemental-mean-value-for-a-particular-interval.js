const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N + 1; j++) {
        let sum = 0;
        for (let k = i; k < j; k++) {
            sum += arr[k];
        }
        const avg = sum / (j - i);
        for (let k = i; k < j; k++) {
            avg
            if (avg === arr[k]) {
                answer++;
                break;
            }
        }
     }
}

console.log(answer);
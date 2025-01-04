const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, B] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => Number(el)).sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < N; i++) {
    const discountedArr = [...arr];
    discountedArr[i] /= 2;
    let [budget, count] = [B, 0];
    for (let j = 0; j < N; j++) {
        if (budget - discountedArr[j] >= 0) {
            budget -= discountedArr[j];
            count++;
        } else {
            break;
        }
    }
    if (count > answer) {
        answer = count;
    }
}

console.log(answer);
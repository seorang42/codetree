const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));
const N = input[0];
const arr = input.slice(1);

let answer = 0;
for (let i = 1; i <= 1000; i++) {
    let [count, isSinked] = [0, true];
    const sinkedArr = [...arr].map(el => el - i);
    for (let j = 0; j < N; j++) {
        if (sinkedArr[j] <= 0 && !isSinked) {
            isSinked = !isSinked;
            count++;
        } else if (sinkedArr[j] > 0 && isSinked) {
            isSinked = !isSinked;
        }
    }
    if (!isSinked) count++;
    if (count > answer) answer = count;
}

console.log(answer);
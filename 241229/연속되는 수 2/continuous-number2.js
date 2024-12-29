const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => Number(el));

let [count, answer] = [0, 0];
for (let i = 0; i < n; i++) {
    if (i === 0) {
        count++;
        continue;
    }
    if (arr[i] === arr[i - 1]) {
        count++;
    } else {
        if (count > answer) {
            answer = count;
            count = 1;
        } else {
            count = 1;
        }
    }
    if (i === n - 1 && count > answer) {
        answer = count;
    }
}

console.log(answer);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));
const n = input[0];
const arr = input.slice(1);

let [count, max] = [0, 0];
for (let i = 0; i < n; i++) {
    if (arr[i] * arr[i - 1] < 0 && i !== 0) {
        if (count > max) {
            max = count;
        }
        count = 1;
    } else {
        count++;
    }

    if (i === n - 1 && count > max) {
        max = count;
    }
}

console.log(max);
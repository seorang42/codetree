const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el)).sort((a, b) => a - b);
const [lowest, highest] = [arr[0], arr[arr.length - 1]];

let answer = 0;
for (let i = lowest + 1; i < highest; i++) {
    let count = 0;
    for (let j = 0; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if (i > arr[j] && arr[k] > i && i - arr[j] === arr[k] - i) count++;
        }
    }
    if (count > answer) {
        answer = count;
    }
}

console.log(answer);
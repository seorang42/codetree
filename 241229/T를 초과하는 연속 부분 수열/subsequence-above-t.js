const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, t] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el));

let [count, max] = [0, 0];
for (let i = 0; i < n; i++) {
    if (arr[i] > t) {
        count++;
    } else {
        if (count > max) {
            max = count;
        }
        count = 0;
    }

    if (i === n - 1) {
        if (count > max) {
            max = count;
        }
    }
}

console.log(max);
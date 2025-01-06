const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));
const end = (arr[0][1] / 2).toFixed(1);

let answer = 0;
for (let i = 1; i <= end; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
        if (i * (2 ** (j + 1)) < arr[j][0] || i * (2 ** (j + 1)) > arr[j][1]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        answer = i;
    }
}

console.log(answer);
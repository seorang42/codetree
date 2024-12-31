const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("").map(el => Number(el));

let answer = 0;
for (let i = 0; i < input.length; i++) {
    const arr = [...input];
    arr[i] = arr[i] === 1 ? 0 : 1;
    const num = parseInt(arr.join(""), 2);
    if (num > answer) {
        answer = num;
    }
}

console.log(answer);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

let answer = "";
for (let i = 1; i <= n; i++) {
    answer += input[i];
}

console.log(answer);
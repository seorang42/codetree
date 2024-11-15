const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

let result = 0;
for (let i = 1; i <= n; i++) {
    result += Number(input[i]);
}

const answer = String(result);
console.log(answer.slice(1) + answer[0]);
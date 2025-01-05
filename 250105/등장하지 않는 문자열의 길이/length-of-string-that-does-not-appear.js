const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const letter = input[1];

let answer = 0;
for (let i = 1; i <= N; i++) {
    let flag = false;
    for (let j = 0; j <= N - i; j++) {
        if (flag) break;
        const target = letter.slice(j, j + i);
        const count = letter.split(target).length - 1;
        if (count >= 2) flag = true;
    }
    if (!flag) {
        answer = i;
        break;
    }
}

console.log(answer);
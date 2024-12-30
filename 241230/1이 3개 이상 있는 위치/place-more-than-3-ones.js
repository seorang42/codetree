const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const getValue = (x, y) => {
    return x >= 0 && y >= 0 && x < n && y < n ? arr[x][y] : 0;
}

let answer = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const count = getValue(i, j - 1) + getValue(i, j + 1) + getValue(i - 1, j) + getValue(i + 1, j);
        if (count >= 3) answer++;
    }
}

console.log(answer);
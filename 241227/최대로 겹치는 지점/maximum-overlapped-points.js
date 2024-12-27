const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const line = Array(100).fill(0);
arr.forEach(el => {
    for (let i = el[0] - 1; i <= el[1] - 1; i++) {
        line[i]++;
    }
});
console.log(line.sort((a, b) => b - a)[0]);
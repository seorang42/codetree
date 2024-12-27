const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el) + 100));

const line = Array(200).fill(0);
arr.forEach(el => {
    for (let i = el[0]; i < el[1]; i++) {
        line[i]++;
    }
})

console.log(line.sort((a, b) => b - a)[0]);
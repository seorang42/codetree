const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const blocks = Array(N).fill(0);
arr.forEach(el => {
    for (let i = el[0] - 1; i <= el[1] - 1; i++) {
        blocks[i]++;
    }
})

console.log(blocks.sort((a, b) => b - a)[0]);
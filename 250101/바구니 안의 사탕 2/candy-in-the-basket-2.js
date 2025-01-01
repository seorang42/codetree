const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el))).sort((a, b) => a[1] - b[1]);
const line = Array(101).fill(0);

const [start, last] = [arr[0][1], arr[arr.length - 1][1]];

arr.forEach(el => {
    const [count, location] = el;
    line[location] += count;
});

let answer = 0;
for (let i = start + K; i <= last - K; i++) {
    let sum = 0;
    for (let j = i - K; j <= i + K; j++) {
        sum += line[j];
    }
    if (sum > answer) answer = sum;
}

console.log(answer);
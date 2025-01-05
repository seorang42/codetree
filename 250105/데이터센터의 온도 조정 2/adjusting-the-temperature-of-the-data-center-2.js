const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, C, G, H] = input[0].split(" ").map(el => Number(el));
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

const lowest = [...arr].sort((a, b) => a[0] - b[0])[0][0];
const highest = [...arr].sort((a, b) => b[1] - a[1])[0][1];

let answer = 0;
for (let i = lowest - 1; i <= highest + 1; i++) {
    let sum = 0;
    for (let j = 0; j < N; j++) {
        if (i < arr[j][0]) {
            sum += C;
        } else if (i >= arr[j][0] && i <= arr[j][1]) {
            sum += G;
        } else if (i > arr[j][1]) {
            sum += H;
        }
    }
    if (sum > answer) {
        answer = sum;
    }
}

console.log(answer);
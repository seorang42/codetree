const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = Infinity;
for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
        const [x1, y1] = arr[i];
        const [x2, y2] = arr[j];
        const distance = (x1 - x2) ** 2 + (y1 - y2) ** 2;
        if (distance < answer) {
            answer = distance;
        }
    }
}

console.log(answer);
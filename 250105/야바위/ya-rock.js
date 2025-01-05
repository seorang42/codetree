const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 1; i <= 3; i++) {
    let score = 0;
    let location = i;
    for (let j = 0; j < N; j++) {
        if (arr[j][0] === location) {
            location = arr[j][1];
        } else if (arr[j][1] === location) {
            location = arr[j][0];
        }
        if (location === arr[j][2]) score++;
    }
    if (score > answer) {
        answer = score;
    }
}

console.log(answer);
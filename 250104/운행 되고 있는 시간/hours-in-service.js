const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 0; i < N; i++) {
    const timeline = Array(1000).fill(0);
    for (let j = 0; j < N; j++) {
        if (j === i) {
            continue;
        }
        for (let k = arr[j][0] - 1; k < arr[j][1] - 1; k++) {
            if (timeline[k] === 0) {
                timeline[k] = 1;
            }
        }
        const count = timeline.filter(el => el === 1).length;
        if (count > answer) {
            answer = count;
        }
    }
}

console.log(answer);
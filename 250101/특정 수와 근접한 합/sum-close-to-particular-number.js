const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(el => Number(el));
const arr = input[1].split(" ").map(el => Number(el));

let answer = Infinity;
for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
        let sum = 0;
        arr.forEach((el, index) => {
            if (index !== i && index !== j) {
                sum += el;
            }
        });
        if (Math.abs(S - sum) < answer) {
            answer = Math.abs(S - sum);
        }
    }
}

console.log(answer);
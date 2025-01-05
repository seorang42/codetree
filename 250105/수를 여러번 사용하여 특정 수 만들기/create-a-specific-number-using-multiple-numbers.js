const fs = require("fs");
const [A, B, C] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const [maxA, maxB] = [Math.floor(C / A), Math.floor(C / B)];

let answer = 0;
for (let i = 0; i <= maxA; i++) {
    for (let j = 0; j <= maxB; j++) {
        const sum = A * i + B * j;
        if (sum < C && sum > answer) answer = sum;
    }
}

console.log(answer);
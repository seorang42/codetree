const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

let answer = 0;
for (let i = 0; i < input.length - 1; i++) {
    if (input[i] !== "(") {
        continue;
    }
    for (let j = i + 1; j < input.length; j++) {
        if (input[j] === ")") {
            answer++;
        }
    }
}

console.log(answer);
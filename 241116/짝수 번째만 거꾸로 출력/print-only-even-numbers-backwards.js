const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const answer = [];
for (let i = 0; i < input.length; i++) {
    if ((i + 1) % 2 === 0) {
        answer.push(input[i]);
    }
}

console.log(answer.reverse().join(""));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let current = "";
let count = 0;
let answer = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] !== current) {
        if (i !== 0) {
            answer += current + count;
        }
        current = input[i];
        count = 1;
    } else {
        count++;
    }
    if (i === input.length - 1) {
        answer += current + count;
    }
}

console.log(answer.length);
console.log(answer);
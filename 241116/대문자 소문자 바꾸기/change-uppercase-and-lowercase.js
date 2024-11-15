const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let answer = "";
for (let i = 0; i < input.length; i++) {
    const target = input[i];
    if (target.toUpperCase() === target) {
        answer += target.toLowerCase();
    } else {
        answer += target.toUpperCase();
    }
}

console.log(answer);
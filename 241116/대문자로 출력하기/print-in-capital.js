const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let answer = "";
for (let i = 0; i < input.length; i++) {
    const target = input[i].charCodeAt(0);
    if ((target >= 65 && target <= 90) || (target >= 97 && target <= 122)) {
        answer += input[i].toUpperCase();
    }
}

console.log(answer);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = [input[1], input[2]];

const checkAnswer = (a, b) => {
    return a.includes(b) ? "Yes" : "No";
}

console.log(checkAnswer(a, b));
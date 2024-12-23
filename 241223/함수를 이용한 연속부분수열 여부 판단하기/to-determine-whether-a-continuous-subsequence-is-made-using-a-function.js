const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [a, b] = [input[1], input[2]];

const checkAnswer = (a, b) => {
    const [newA, newB] = [" " + a + " ", " " + b + " "];
    return newA.includes(newB) ? "Yes" : "No";
}

console.log(checkAnswer(a, b));
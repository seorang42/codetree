const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const A = input[1].split(" ").map(el => Number(el));

const calcAnswer = (m) => {
    let num = m;
    let result = 0;
    while (num >= 1) {
        result += A[num - 1];
        num = num % 2 === 0 ? num / 2 : num - 1;
    }
    return result;
}

console.log(calcAnswer(m));
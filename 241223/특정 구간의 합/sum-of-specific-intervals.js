const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const A = input[1].split(" ").map(el => Number(el));

const addNums = (a, b) => {
    let sum = 0;
    for (let i = a - 1; i <= b - 1; i++) {
        sum += A[i];
    }
    return sum;
}

for (let i = 2; i <= m + 1; i++) {
    const [a, b] = input[i].split(" ").map(el => Number(el));
    console.log(addNums(a, b));
}
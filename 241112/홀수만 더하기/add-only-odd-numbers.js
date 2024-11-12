const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));
const n = input[0];
const numbers = [];
for (let i = 1; i <= n; i++) {
    numbers.push(input[i]);
}

let result = 0;
numbers.forEach(el => {
    if (el % 2 !== 0 && el % 3 === 0) {
        result += el;
    }
});

console.log(result);
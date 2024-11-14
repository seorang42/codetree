const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const array = input.split(" ").map(el => Number(el));

const total = Number(n);
let min = 999;
for (let i = 0; i < total; i++) {
    for (let j = i + 1; j < total; j++) {
        const value = Math.abs(array[i] - array[j]);
        if (value < min) {
            min = value;
        }
    }
}

console.log(min);
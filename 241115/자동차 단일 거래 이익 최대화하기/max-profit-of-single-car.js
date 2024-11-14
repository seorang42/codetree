const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const array = input.split(" ").map(el => Number(el));

let max = 0;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (j > i && j - i > max) {
            max = j - i;
        }
    }
}

console.log(max);
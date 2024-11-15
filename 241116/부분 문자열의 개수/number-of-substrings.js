const fs = require("fs");
const [input, target] = fs.readFileSync(0).toString().trim().split("\n");

let count = 0;
for (let i = 0; i < input.length - 1; i++) {
    if (input.slice(i, i + 2) === target) {
        count++;
    }
}

console.log(count);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let sum = 0;
for (let i = 0; i < input.length; i++) {
    const target = Number(input[i]);
    if (isNaN(target) === false) {
        sum += target;
    }
}

console.log(sum);
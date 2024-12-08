const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const calc = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return Math.floor(sum / 10);
}

console.log(calc(input));
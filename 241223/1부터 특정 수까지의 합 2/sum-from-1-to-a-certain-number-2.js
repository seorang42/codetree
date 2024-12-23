const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const calcSum = (n) => {
    if (n === 0) {
        return 0;
    }
    return n + calcSum(n - 1);
}

console.log(calcSum(input));
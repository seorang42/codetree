const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const calcSum = (n) => {
    if (n < 10) {
        return n ** 2;
    }
    return calcSum(parseInt(n / 10)) + (n % 10) ** 2;
}

console.log(calcSum(input));
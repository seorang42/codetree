const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const calcNum = (n) => {
    if (n === 1) return 2;
    if (n === 2) return 4;
    return (calcNum(n - 2) * calcNum(n - 1)) % 100;
}

console.log(calcNum(input));
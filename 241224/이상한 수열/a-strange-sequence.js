const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const getNum = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return getNum(Math.floor(n / 3)) + getNum(n - 1);
}

console.log(getNum(input));
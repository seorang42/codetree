const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

const addNum = (n) => {
    if (n === 1 || n === 2) {
        return n;
    }
    return n + addNum(n - 2);
}

console.log(addNum(input));
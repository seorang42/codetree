const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const calcMin = (a, b, c) => {
    const arr = [a, b, c].sort((a, b) => a - b);
    return arr[0];
}

console.log(calcMin(a, b, c));
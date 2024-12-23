const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const calcSquare = (a, b) => {
    return a ** b;
}

console.log(calcSquare(a, b));
const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().split(" ").map(el => Number(el));

const changeNum = (a, b) => {
    return a > b ? (a + 25) + " " + (b * 2) : (a * 2) + " " + (b + 25);
}

console.log(changeNum(a, b));
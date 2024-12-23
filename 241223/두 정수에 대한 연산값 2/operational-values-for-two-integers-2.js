const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const changeNum = (a, b) => {
    return a > b ? (a * 2) + " " + (b + 10) : (a + 10) + " " + (b * 2);
}

console.log(changeNum(a, b));
const fs = require("fs");
const [M, D] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const checkDay = (m, d) => {
    return days[m - 1] >= d ? "Yes" : "No";
}

console.log(checkDay(M, D));
const fs = require("fs");
const [m1, d1, m2, d2] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));
const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calcDays = (m, d) => {
    let result = 0;
    DAYS.slice(0, m - 1).forEach(el => result += el);
    result += d;
    return result;
}
const [start, end] = [calcDays(m1, d1), calcDays(m2, d2)];


console.log(end - start + 1);
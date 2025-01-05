const fs = require("fs");
const [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const getSum = (num) => {
    if (num < 10) {
        return num;
    }
    return getSum(parseInt(num / 10)) + num % 10;
}

let answer = 0;
for (let i = start; i <= end; i++) {
    const sum = getSum(i);
    if (sum > answer) {
        answer = sum;
    }
}

console.log(answer);
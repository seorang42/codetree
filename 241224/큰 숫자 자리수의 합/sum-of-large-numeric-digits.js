const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const addNum = (num) => {
    if (num < 10) {
        return num;
    }
    return addNum(parseInt(num / 10)) + num % 10;
}

let multi = 1;
arr.forEach(el => multi *= el);

console.log(addNum(multi));
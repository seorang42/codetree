const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let count = 0;
const divideNum = (num) => {
    if (num === 1) {
        return;
    }
    count++;
    if (num % 2 === 0) {
        return divideNum(num / 2);
    } else {
        return divideNum(parseInt(num / 3));
    }
}

divideNum(input);

console.log(count);
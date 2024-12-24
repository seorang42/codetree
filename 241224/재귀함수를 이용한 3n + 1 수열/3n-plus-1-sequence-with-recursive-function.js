const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

let answer = 0;
const changeNum = (num) => {
    if (num === 1) {
        return;
    }
    answer++;
    return num % 2 === 0 ? changeNum(num / 2) : changeNum(3 * num + 1);
}

changeNum(input);
console.log(answer);
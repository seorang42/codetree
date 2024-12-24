const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const length = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

let answer = 0;
const checkNum = (i) => {
    if (i >= length) {
        return;
    }
    checkNum(i + 1);
    if (answer < arr[i]) {
        answer = arr[i];
    }
}

checkNum(0);
console.log(answer);
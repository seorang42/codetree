const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const length = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

const calcMax = (index, max) => {
    if (index === length - 2) {
        return max;
    }
    return arr[index] > arr[index + 1] ? calcMax(index + 1, arr[index]) : calcMax(index + 1, arr[index + 1]);
}

console.log(calcMax(0, 0));
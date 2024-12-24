const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const length = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
}

const getLCM = (a, b) => {
    return a * b / getGCD(a, b);
}

const getResult = (index, num) => {
    if (index === length - 1) {
        return num;
    }
    return getResult(index + 1, getLCM(num, arr[index + 1]));
}

console.log(getResult(0, arr[0]));
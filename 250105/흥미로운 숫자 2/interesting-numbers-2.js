const fs = require("fs");
const [start, end] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let answer = 0;
for (let i = start; i <= end; i++) {
    const numArr = String(i).split("").map(el => Number(el));
    let [num1, num2] = [-1, -1];
    let [num1Count, num2Count] = [0, 0];
    for (let j = 0; j < numArr.length; j++) {
        if (num1 === -1) {
            num1 = numArr[j];
            num1Count++;
        } else if (numArr[j] !== num1 && num2 === -1) {
            num2 = numArr[j];
            num2Count++;
        } else if (numArr[j] === num1) {
            num1Count++;
        } else if (numArr[j] === num2) {
            num2Count++;
        } else {
            continue;
        }

        if (num1 !== -1 && num2 !== -1 && num1Count !== 0 && num2Count !== 0) {
            if (num1Count === 1 && num2Count >= 2) {
                answer++;
            } else if (num2Count === 1 && num1Count >= 2) {
                answer++;
            }
        }
    }
}

console.log(answer);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const length = Number(input[0]);
const arr = input[1].split(" ").map(el => Number(el));

const calcMax = (index, max) => {
    if (index === 0) {
        return max;
    }
    const bigger = Math.max(max, arr[index - 1]);
    return calcMax(index - 1, bigger);
}

console.log(calcMax(length - 1, 0));
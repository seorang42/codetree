const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

const swap = (a, b) => {
    const [tempA, tempB] = [b, a];
    return tempA + " " + tempB;
}

console.log(swap(a, b));
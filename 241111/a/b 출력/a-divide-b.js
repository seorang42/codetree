const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let result = "0.";
for (let i = 0; i < 20; i++) {
    if (b !== 0) {
        if (a < b) a *= 10;
        let [tempA, tempB] = [a, b];
        tempA = Math.floor(a / b);
        result += tempA;
        tempB = a % b;
        [a, b] = [tempA, tempB];
    } else {
        result += 0;
    }
}

console.log(result);
const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = [];
while (a <= b) {
    result.push(a);
    if (a % 2 !== 0) {
        a *= 2;
    } else {
        a += 3;
    }
}

console.log(result.join(" "));
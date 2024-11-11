const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = [a];
while (a < b) {
    if (a % 2 !== 0) {
        a *= 2;
    } else {
        a += 3;
    }
    result.push(a);
}

console.log(result.join(" "));
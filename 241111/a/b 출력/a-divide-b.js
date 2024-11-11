const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let result = `${Math.floor(a / b)}.`;
for (let i = 0; i < 20; i++) {
    if (a < b) a *= 10;
    result += Math.floor(a / b);
    a %= b;
}

console.log(result);
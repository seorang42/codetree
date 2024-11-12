const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let result = 0;
for (let i = a; i <= b; i++) {
    result += i;
}

console.log(result);
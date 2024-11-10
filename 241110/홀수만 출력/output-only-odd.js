const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = [];
for (let i = a; i <= b; i++) {
    if (i % 2 !== 0) {
        result.push(i);
    }
}

console.log(result.join(" "));
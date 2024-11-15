const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().split(" ").map(el => Number(el));

const result = String(a + b);
let count = 0;
for (let i = 0; i < result.length; i++) {
    if (result[i] === "1") {
        count++
    }
}

console.log(count);
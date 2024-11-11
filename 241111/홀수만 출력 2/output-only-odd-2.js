const fs = require("fs");
const [b, a] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = [];
for (let i = b; i >= a; i--) {
    if (i % 2 !== 0) {
        result.push(i);
    }
}

console.log(result.join(" "));
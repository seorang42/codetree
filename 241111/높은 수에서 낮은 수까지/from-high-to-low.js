const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el)).sort((a, b) => a - b);

const result = [];
for (let i = b; i >= a; i--) {
    result.push(i);
}

console.log(result.join(" "));
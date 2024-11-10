const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
for (let i = 1; i <= 5; i++) {
    result.push(i * n);
}

console.log(result.join(" "));
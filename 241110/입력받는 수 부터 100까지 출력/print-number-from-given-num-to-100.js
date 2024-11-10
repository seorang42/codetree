const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
for (let i = n; i <= 100; i++) {
    result.push(i);
}

console.log(result.join(" "));
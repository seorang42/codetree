const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
for (let i = n; i <= 100; i++) {
    result.push(i >= 90 ? "A" : i >= 80 ? "B" : i >= 70 ? "C" : i >= 60 ? "D" : "F");
}

console.log(result.join(" "));
const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
for (let i = 1; i <= n; i++) {
    result.push(i % 3 === 0 || String(i).includes("3") ? 0 : i);
}

console.log(result.join(" "));
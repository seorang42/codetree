const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let count = 0;
for (let i = 1; i <= n; i++) {
    if (i % 4 === 0 && !(i % 100 === 0 && i % 400 !== 0)) {
        count++;
    }
}

console.log(count);
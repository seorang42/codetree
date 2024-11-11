const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
for (i = n; i >= 1; i--) {
    result.push(i);
}

console.log(result.join(" "));
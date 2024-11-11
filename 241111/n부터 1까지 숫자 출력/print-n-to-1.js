const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

const result = [];
while (n >= 1) {
    result.push(n);
    n--;
}

console.log(result.join(" "));
const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let num = 1
const result = [];
while (num <= n) {
    result.push(num);
    num++;
}

console.log(result.join(" "));
const fs = require("fs");
const n = fs.readFileSync(0).toString().trim().map(el => Number(el));

console.log(n);
if (n < 0) {
    console.log("minus");
}
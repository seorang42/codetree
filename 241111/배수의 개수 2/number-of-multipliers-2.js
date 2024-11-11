const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

let count = 0;
input.forEach(el => {
    if (el % 2 !== 0) count++;
})

console.log(count);
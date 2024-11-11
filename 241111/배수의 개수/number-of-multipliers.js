const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(el => Number(el));

let [three, five] = [0, 0];
input.forEach(el => {
    if (el % 3 === 0) {
        three++;
    }
    if (el % 5 === 0) {
        five++;
    }
})

console.log([three, five].join(" "));
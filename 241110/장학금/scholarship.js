const fs = require("fs");
const [mid, final] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

let amount = 0;
if (mid >= 90) {
    if (final >= 95) {
        amount = 100000;
    } else if (final >= 90) {
        amount = 50000;
    }
}

console.log(amount);
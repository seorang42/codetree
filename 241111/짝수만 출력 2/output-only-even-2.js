const fs = require("fs");
let [b, a] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const result = [];
while(b >= a) {
    if (b % 2 === 0) {
        result.push(b);
        b -= 2;
    } else {
        b--;
    }
}

console.log(result.join(" "));